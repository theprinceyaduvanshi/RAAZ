import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { supabaseConfig } from "./supabase-config.js";

const RAAZ_API_TIMEOUT = 12000;
const raazFetch = async (input, init = {}) => {
  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => { timedOut = true; controller.abort(); }, RAAZ_API_TIMEOUT);
  if (init.signal) {
    if (init.signal.aborted) controller.abort();
    else init.signal.addEventListener("abort", () => controller.abort(), { once: true });
  }
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } catch (e) {
    if (timedOut) throw new Error("Supabase Data API did not respond within 12 seconds. Open Supabase → Integrations → Data API and make sure Data API is enabled and the RAAZ public tables are exposed.");
    throw e;
  } finally { clearTimeout(timer); }
};

const supabase = createClient(supabaseConfig.url, supabaseConfig.publishableKey, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  global: { fetch: raazFetch, headers: { "x-raaz-client": "raaz-v15" } }
});

const app = document.querySelector("#app");
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
const uid = () => state.user?.id || null;
const now = () => new Date().toISOString();

const state = {
  session: null, user: null, profile: null,
  route: "home", profileUid: null, chatId: null, chatUser: null,
  feed: [], stories: [], reels: [], following: new Set(), saved: new Set(), liked: new Set(),
  users: [], chats: [], messages: [], notifications: [], requests: [], unread: 0,
  comments: {}, profileContent: [], profileTab: "posts", feedFilter: "all", createMode: "post",
  replyTo: null, typing: false, subscriptions: [], loading: {home:true,explore:false,reels:false,chats:false,chat:false,profile:false}, errors: {}
};
let renderToken = 0;
let booting = false;
let typingTimer = null;
let fatalShown = false;
const routeLoading = new Set();
function showFatal(err){
  if(fatalShown) return; fatalShown=true;
  console.error("RAAZ fatal error", err);
  const msg = friendly(err);
  if(app) app.innerHTML = `<div class="fatal-page"><div class="fatal-card"><img src="./icon.svg" alt="RAAZ"><h1>RAAZ</h1><p>Something went wrong while opening RAAZ.</p><small>${esc(msg)}</small><button class="primary wide" onclick="location.reload()">Reload RAAZ</button></div></div>`;
}
window.addEventListener("error", e=>showFatal(e.error || e.message));
window.addEventListener("unhandledrejection", e=>showFatal(e.reason || "Unexpected error"));

function toast(msg, type = "info") {
  const root = $("#toast-root"); if (!root) return;
  const n = document.createElement("div"); n.className = `toast ${type}`; n.textContent = msg; root.append(n);
  requestAnimationFrame(() => n.classList.add("show"));
  setTimeout(() => { n.classList.remove("show"); setTimeout(() => n.remove(), 220); }, 3000);
}
function friendly(e) {
  const m = e?.message || String(e || "Unknown error");
  const hint = e?.hint ? ` Hint: ${e.hint}` : "";
  if (/permission denied|42501/i.test(m)) return `Supabase Data API permission is missing for this request.${hint}`;
  if (/relation .* does not exist|column .* does not exist/i.test(m)) return `RAAZ database schema is incomplete.${hint}`;
  if (/duplicate key|unique constraint/i.test(m)) return "This item already exists.";
  if (/not authenticated|jwt/i.test(m)) return "Your session expired. Please log in again.";
  if (/email.*confirm|confirm.*email/i.test(m)) return "Email confirmation is required. Open the confirmation email and return to this RAAZ site.";
  if (/Data API did not respond|Failed to fetch|NetworkError|Load failed/i.test(m)) return "RAAZ could not reach the Supabase Data API. Check Supabase → Integrations → Data API, make sure it is enabled, and expose the RAAZ public tables/functions. Then reload RAAZ.";
  return m + hint;
}
function time(v) { if (!v) return ""; const d = new Date(v); return Number.isNaN(d.getTime()) ? "" : d.toLocaleString([], {day:"2-digit", month:"short", hour:"2-digit", minute:"2-digit"}); }
function avatar(p, sz = "md") { return `<div class="avatar ${sz}">${p?.photo_url ? `<img src="${esc(p.photo_url)}" alt="">` : esc((p?.display_name || p?.username || "R").slice(0,1).toUpperCase())}</div>`; }
function loading(text = "Loading…") { return `<section class="center"><div class="spinner"></div><p>${esc(text)}</p></section>`; }
function errorBox(text, retry = "") { return `<section class="center error-box"><b>RAAZ couldn't load this</b><p>${esc(text)}</p><small class="muted-block">Supabase connection check active • ${RAAZ_API_TIMEOUT/1000}s timeout</small>${retry ? `<button class="primary" data-retry="${esc(retry)}">Retry</button>` : ""}</section>`; }
function navItem(r, icon, label) { return `<button class="nav-item ${state.route===r?"active":""}" data-nav="${r}"><b>${icon}</b><span>${label}</span></button>`; }
function shell(content) {
  const unread = state.unread ? `<span class="badge">${state.unread > 99 ? "99+" : state.unread}</span>` : "";
  return `<div class="app-shell"><header class="topbar"><button class="brand" data-nav="home"><span>RAAZ</span><small>Your Chats Is Fully RAAZ</small></button><div class="top-actions"><button class="icon-btn" data-nav="notifications" aria-label="Notifications">♡${unread}</button><button class="icon-btn" data-nav="chats" aria-label="Chats">✦</button></div></header><main class="page">${content}</main><nav class="bottom-nav">${navItem("home","⌂","Home")}${navItem("explore","⌕","Explore")}${navItem("create","＋","Create")}${navItem("reels","▶","Reels")}${navItem("chats","✦","Chats")}${navItem("profile","◎","Profile")}</nav></div>`;
}
function back(title, route="home") { return `<div class="subbar"><button class="back" data-nav="${route}" aria-label="Back">‹</button><h2>${esc(title)}</h2><span></span></div>`; }

function authView(mode="login") {
  return `<div class="auth-page"><div class="auth-card auth-glow"><div class="logo-box"><img src="./icon.svg" alt="RAAZ"></div><h1>RAAZ</h1><p>Your Chats Is Fully RAAZ</p><div class="auth-tabs"><button class="${mode==="login"?"selected":""}" data-auth="login">Login</button><button class="${mode==="signup"?"selected":""}" data-auth="signup">Create account</button></div><form id="auth-form">${mode==="signup"?`<label>Full name<input name="name" required autocomplete="name" maxlength="60"></label>`:""}<label>Email<input name="email" type="email" required autocomplete="email"></label><label>Password<input name="password" type="password" minlength="6" required autocomplete="current-password"></label>${mode==="signup"?`<label>Username<input name="username" required minlength="3" maxlength="24" pattern="[A-Za-z0-9_]+" autocomplete="username"></label>`:""}<button class="primary wide" type="submit">${mode==="login"?"Login to RAAZ":"Create my RAAZ account"}</button></form>${mode==="login"?`<button class="link-btn" data-reset>Forgot password?</button>`:""}<p class="security-note">Real authentication • Supabase secured</p></div></div>`;
}

async function profileFor(id) {
  if (!id) return null;
  const {data, error} = await supabase.from("profiles").select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return data;
}
async function ensureProfile() {
  if (!uid()) return null;
  let p = await profileFor(uid());
  if (p) return p;
  const requested = String(state.user.user_metadata?.username || state.user.email?.split("@")[0] || "user").toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0,24) || `user${Date.now()%100000}`;
  const base = {id:uid(), username:requested, display_name:String(state.user.user_metadata?.display_name || "RAAZ User").slice(0,60), bio:"", photo_url:""};
  const {data, error} = await supabase.from("profiles").insert(base).select().single();
  if (error) throw error;
  return data;
}

async function boot(session) {
  if(!session?.user) return;
  if(booting && state.session?.user?.id === session.user.id) return;
  booting = true;
  state.session = session; state.user = session.user;
  // Render the authenticated shell immediately. Database failures must never leave a blank screen.
  if(state.route === "login" || state.route === "signup") state.route = "home";
  render();
  try {
    try {
      state.profile = await ensureProfile();
    } catch(e) {
      console.warn("Profile setup unavailable", e);
      state.profile = {id:uid(), username:String(session.user.user_metadata?.username || session.user.email?.split("@")[0] || "raazuser").toLowerCase().replace(/[^a-z0-9_]/g,"").slice(0,24) || "raazuser", display_name:String(session.user.user_metadata?.display_name || "RAAZ User"), bio:"", photo_url:"", posts_count:0, followers_count:0, following_count:0};
      toast("RAAZ opened. Profile database access needs attention.", "error");
    }
    await Promise.allSettled([loadFollowing(), loadSaved(), loadLiked(), loadNotifications(), loadRequests(), loadUnread()]);
    render();
    subscribeRealtime();
  } catch(e) {
    console.error(e);
    toast(`Account setup: ${friendly(e)}`, "error");
    render();
  } finally { booting = false; }
}

async function loadFollowing() {
  state.following = new Set(); if (!uid()) return;
  const {data,error} = await supabase.from("follows").select("following_id").eq("follower_id",uid());
  if (error) throw error; (data||[]).forEach(x => state.following.add(x.following_id));
}
async function loadSaved() {
  state.saved = new Set(); if (!uid()) return;
  const {data,error} = await supabase.from("saved_posts").select("post_id").eq("user_id",uid());
  if (error) throw error; (data||[]).forEach(x => state.saved.add(x.post_id));
}
async function loadLiked() {
  state.liked = new Set(); if (!uid()) return;
  const {data,error} = await supabase.from("likes").select("post_id").eq("user_id",uid());
  if (error) throw error; (data||[]).forEach(x => state.liked.add(x.post_id));
}
async function loadUnread() {
  if (!uid()) return 0;
  const {data,error} = await supabase.from("chats").select("member_a,member_b,unread_a,unread_b").or(`member_a.eq.${uid()},member_b.eq.${uid()}`);
  if (error) { console.warn(error); return 0; }
  state.unread = (data||[]).reduce((n,c)=>n + Number(c.member_a===uid()?c.unread_a:c.unread_b || 0),0);
  return state.unread;
}
async function loadNotifications() {
  if (!uid()) return;
  const {data,error} = await supabase.from("notifications").select("*").eq("user_id",uid()).order("created_at",{ascending:false}).limit(50);
  if (error) throw error;
  const ids=[...new Set((data||[]).map(n=>n.actor_id).filter(Boolean))];
  const profiles=ids.length?(await supabase.from("profiles").select("id,username,display_name,photo_url").in("id",ids)).data||[]:[];
  state.notifications=(data||[]).map(n=>({...n,actor:profiles.find(p=>p.id===n.actor_id)}));
}
async function loadRequests() {
  if (!uid()) return;
  const {data,error}=await supabase.from("message_requests").select("*").eq("to_user_id",uid()).eq("status","pending").order("created_at",{ascending:false});
  if (error) throw error;
  const ids=[...new Set((data||[]).map(n=>n.from_user_id))];
  const profiles=ids.length?(await supabase.from("profiles").select("id,username,display_name,photo_url").in("id",ids)).data||[]:[];
  state.requests=(data||[]).map(r=>({...r,sender:profiles.find(p=>p.id===r.from_user_id)}));
}
async function enrichPosts(rows) {
  const ids=[...new Set((rows||[]).map(p=>p.user_id).filter(Boolean))];
  if (!ids.length) return rows||[];
  const {data,error}=await supabase.from("profiles").select("id,username,display_name,photo_url").in("id",ids);
  if (error) throw error;
  return (rows||[]).map(p=>({...p,profile:(data||[]).find(x=>x.id===p.user_id)}));
}
async function loadFeed() {
  state.loading.home=true; state.errors.home="";
  try {
    const {data,error}=await supabase.from("posts").select("*").order("created_at",{ascending:false}).limit(100);
    if (error) throw error;
    state.feed=await enrichPosts(data||[]);
    const sr=await supabase.from("stories").select("*").gt("expires_at",now()).order("created_at",{ascending:false}).limit(100);
    if (sr.error) console.warn("Stories",sr.error); else {
      const ids=[...new Set((sr.data||[]).map(s=>s.user_id))];
      const profiles=ids.length?(await supabase.from("profiles").select("id,username,display_name,photo_url").in("id",ids)).data||[];
      state.stories=(sr.data||[]).map(s=>({...s,profile:profiles.find(p=>p.id===s.user_id)}));
    }
  } catch(e) {
    state.errors.home=friendly(e);
    throw e;
  } finally { state.loading.home=false; }
}
async function loadReels() {
  state.loading.reels=true; state.errors.reels="";
  const {data,error}=await supabase.from("posts").select("*").eq("type","reel").order("created_at",{ascending:false}).limit(100);
  if(error){state.errors.reels=friendly(error);state.loading.reels=false;throw error;}
  state.reels=await enrichPosts(data||[]); state.loading.reels=false;
}
async function loadDiscover(term="") {
  state.loading.explore=true; state.errors.explore="";
  let q=supabase.from("profiles").select("*").neq("id",uid()).order("created_at",{ascending:false}).limit(100);
  const safe=String(term||"").trim().replace(/[,()%]/g," ");
  if(safe) q=q.or(`username.ilike.%${safe}%,display_name.ilike.%${safe}%`);
  const {data,error}=await q;
  if(error){state.errors.explore=friendly(error);state.loading.explore=false;throw error;}
  state.users=data||[];state.loading.explore=false;
}
async function loadChats() {
  state.loading.chats=true;state.errors.chats="";
  const {data,error}=await supabase.from("chats").select("*").or(`member_a.eq.${uid()},member_b.eq.${uid()}`).order("updated_at",{ascending:false}).limit(100);
  if(error){state.errors.chats=friendly(error);state.loading.chats=false;throw error;}
  const rows=data||[]; const ids=[...new Set(rows.map(c=>c.member_a===uid()?c.member_b:c.member_a))];
  const profiles=ids.length?(await supabase.from("profiles").select("id,username,display_name,photo_url").in("id",ids)).data||[]:[];
  state.chats=rows.map(c=>({...c,other:profiles.find(p=>p.id===(c.member_a===uid()?c.member_b:c.member_a))}));state.loading.chats=false;
}
async function loadChat() {
  if(!state.chatId)return;
  const {data:c,error:ce}=await supabase.from("chats").select("*").eq("id",state.chatId).maybeSingle();
  if(ce)throw ce; if(!c){state.errors.chat="Chat not found or you don't have access.";return;}
  if(c.member_a!==uid()&&c.member_b!==uid())throw new Error("You do not have access to this chat.");
  const other=c.member_a===uid()?c.member_b:c.member_a; state.chatUser=await profileFor(other);
  const {data,error}=await supabase.from("messages").select("*").eq("chat_id",state.chatId).order("created_at",{ascending:true}).limit(500);
  if(error)throw error; state.messages=data||[];
  await supabase.rpc("mark_chat_seen",{target_chat:state.chatId}).catch(()=>{});
  await loadUnread();
}
async function loadProfileContent(id) {
  state.loading.profile=true; state.errors.profile=""; state.targetProfile=null;
  state.targetProfile=await profileFor(id);
  if(!state.targetProfile){state.errors.profile="Profile not found.";state.loading.profile=false;return;}
  const {data,error}=await supabase.from("posts").select("*").eq("user_id",id).order("created_at",{ascending:false}).limit(100);
  if(error){state.errors.profile=friendly(error);state.loading.profile=false;throw error;}
  state.profileContent=data||[];state.loading.profile=false;
}

function render() {
  const token=++renderToken;
  if(!state.session){app.innerHTML=authView(state.route==="signup"?"signup":"login");bindAuth();return;}
  let content="";
  if(state.route==="home")content=renderHome();
  else if(state.route==="explore")content=renderExplore();
  else if(state.route==="create")content=renderCreate();
  else if(state.route==="reels")content=renderReels();
  else if(state.route==="chats")content=renderChats();
  else if(state.route==="chat")content=renderChat();
  else if(state.route==="profile")content=renderProfile(state.profileUid||uid());
  else if(state.route==="settings")content=renderSettings();
  else if(state.route==="notifications")content=renderNotifications();
  else content=renderHome();
  app.innerHTML=shell(content);bind();
  if(token!==renderToken)return;
  loadRouteData(token).catch(e=>{
    console.error("RAAZ route load",e);
    if(state.route==="home")state.errors.home=friendly(e);
    if(state.route==="explore")state.errors.explore=friendly(e);
    if(state.route==="reels")state.errors.reels=friendly(e);
    if(state.route==="chats")state.errors.chats=friendly(e);
    if(state.route==="chat")state.errors.chat=friendly(e);
    if(state.route==="profile")state.errors.profile=friendly(e);
    if(token===renderToken) render();
  });
}
async function loadRouteData(token) {
  const key = `${state.route}:${state.profileUid||""}:${state.chatId||""}`;
  if(routeLoading.has(key)) return;
  const shouldLoad =
    (state.route==="home" && !state.feed.length && !state.errors.home) ||
    (state.route==="explore" && !state.users.length && !state.errors.explore) ||
    (state.route==="reels" && !state.reels.length && !state.errors.reels) ||
    (state.route==="chats" && !state.chats.length && !state.errors.chats) ||
    (state.route==="chat" && !!state.chatId && !state.messages.length && !state.errors.chat) ||
    (state.route==="profile" && !!state.profileUid && (state.targetProfile===null || !state.profileContent.length) && !state.errors.profile);
  if(!shouldLoad) return;
  routeLoading.add(key);
  try {
    if(state.route==="home"){ await loadFeed(); }
    else if(state.route==="explore"){ await loadDiscover(); }
    else if(state.route==="reels"){ await loadReels(); }
    else if(state.route==="chats"){ await loadChats(); }
    else if(state.route==="chat"){ await loadChat(); }
    else if(state.route==="profile"){ if(state.profileUid===uid()) state.targetProfile=state.profile; await loadProfileContent(state.profileUid); }
    if(token===renderToken) render();
  } finally {
    routeLoading.delete(key);
  }
}

function renderHome(){
  let posts=state.feed;
  if(state.feedFilter==="following")posts=posts.filter(p=>state.following.has(p.user_id)||p.user_id===uid());
  if(state.feedFilter==="saved")posts=posts.filter(p=>state.saved.has(p.id));
  const body=state.errors.home?errorBox(state.errors.home,"home"):state.loading.home?loading("Loading your feed…"):posts.length?posts.map(renderPost).join(""):`<div class="empty">No posts yet. Follow people or create the first RAAZ post.</div>`;
  return `<section>${renderStories()}<div class="filterbar"><button class="${state.feedFilter==="all"?"active":""}" data-filter="all">All</button><button class="${state.feedFilter==="following"?"active":""}" data-filter="following">Following</button><button class="${state.feedFilter==="saved"?"active":""}" data-filter="saved">Saved</button></div><div class="feed">${body}</div></section>`;
}
function renderStories(){return `<div class="stories"><button class="story add" data-nav="create"><span>＋</span><small>Your story</small></button>${state.stories.map(s=>`<button class="story" data-story="${s.id}">${avatar(s.profile,"lg")}<small>@${esc(s.profile?.username||"user")}</small></button>`).join("")}</div>`;}
function renderPost(p){
  const liked=state.liked.has(p.id), mine=p.user_id===uid();
  const media=p.media_url?(p.media_type?.startsWith("video")?`<video class="post-media" src="${esc(p.media_url)}" controls playsinline preload="metadata" data-view="${p.id}"></video>`:`<img class="post-media" src="${esc(p.media_url)}" alt="RAAZ post" loading="lazy" data-view="${p.id}">`):"";
  return `<article class="post-card"><header class="post-head"><button class="post-author" data-profile="${p.user_id}">${avatar(p.profile)}<span><b>${esc(p.profile?.display_name||"RAAZ User")}</b><small>@${esc(p.profile?.username||"user")} · ${time(p.created_at)}</small></span></button><button class="more" data-post-menu="${p.id}">•••</button></header>${p.text?`<p class="post-text">${esc(p.text)}</p>`:""}${media}<div class="post-actions"><button class="action ${liked?"active-like":""}" data-like="${p.id}">${liked?"♥":"♡"} <span>${p.likes_count||0}</span></button><button class="action" data-comments="${p.id}">◯ <span>${p.comments_count||0}</span></button><button class="action" data-share="${p.id}">↗ <span>${p.shares_count||0}</span></button><button class="action" data-save="${p.id}">${state.saved.has(p.id)?"★":"☆"}</button></div><div class="post-meta">${p.views_count||0} views</div></article>`;
}
function renderExplore(){
  const body=state.errors.explore?errorBox(state.errors.explore,"explore"):state.loading.explore?loading("Finding RAAZ users…"):state.users.length?state.users.map(renderUser).join(""):`<div class="muted-block">No users found.</div>`;
  return `${back("Explore","home")}<div class="search-box"><input id="user-search" placeholder="Search people on RAAZ…"><button id="search-go">Search</button></div><div class="user-list">${body}</div>`;
}
function renderUser(u){return `<button class="user-row" data-profile="${u.id}">${avatar(u)}<span><b>${esc(u.display_name||"RAAZ User")}</b><small>@${esc(u.username||"user")}</small></span><i>${state.following.has(u.id)?"Following":"Follow"}</i></button>`;}
function renderCreate(){return `${back("Create","home")}<div class="create-tabs"><button class="${state.createMode==="post"?"active":""}" data-create="post">Post</button><button class="${state.createMode==="story"?"active":""}" data-create="story">Story</button><button class="${state.createMode==="reel"?"active":""}" data-create="reel">Reel</button></div><form id="create-form" class="composer"><textarea name="text" maxlength="5000" placeholder="${state.createMode==="story"?"Story text…":"Share something with RAAZ…"}"></textarea><label class="file-pick">Choose media<input name="media" type="file" accept="${state.createMode==="reel"?"video/*":"image/*,video/*"}"></label><button class="primary wide" type="submit">Publish ${state.createMode}</button><small class="hint">${state.createMode==="reel"?"Video up to 50 MB":"Images/videos up to 50 MB"}</small></form>`;}
function renderReels(){const body=state.errors.reels?errorBox(state.errors.reels,"reels"):state.loading.reels?loading("Loading reels…"):state.reels.length?state.reels.map(p=>`<article class="reel-card">${p.media_url?`<video src="${esc(p.media_url)}" controls playsinline loop preload="metadata" data-view="${p.id}"></video>`:`<div class="empty">Reel media unavailable</div>`}<div class="reel-overlay"><button data-profile="${p.user_id}">@${esc(p.profile?.username||"user")}</button><p>${esc(p.text||"")}</p><span>${p.views_count||0} views · ${p.likes_count||0} likes</span></div></article>`).join(""):`<div class="empty">No reels yet.</div>`;return `${back("Reels","home")}<div class="reels-feed">${body}</div>`;}
function renderChats(){const body=state.errors.chats?errorBox(state.errors.chats,"chats"):state.loading.chats?loading("Loading chats…"):state.chats.length?state.chats.map(c=>`<button class="chat-row" data-chat="${c.id}">${avatar(c.other)}<span><b>${esc(c.other?.display_name||"RAAZ User")}</b><small>@${esc(c.other?.username||"user")} · ${esc(c.last_message||"Start a conversation")}</small></span><i>${(c.member_a===uid()?c.unread_a:c.unread_b)||""}</i></button>`).join(""):`<div class="empty">No chats yet. Open a profile and tap Message.</div>`;return `${back("Chats","home")}<div class="request-strip">${state.requests.length?`<button data-requests>Message requests (${state.requests.length})</button>`:""}</div><div class="chat-list">${body}</div>`;}
function renderChat(){if(state.errors.chat)return `${back("Chat","chats")}${errorBox(state.errors.chat,"chat")}`;return `${back(state.chatUser?.display_name||"Chat","chats")}<div class="chat-screen"><div id="messages" class="messages">${state.messages.map(renderMessage).join("")}</div><div class="typing-indicator">${state.typing?"typing…":""}</div><div id="reply-preview" class="reply-preview ${state.replyTo?"show":""}">${state.replyTo?`Replying to: ${esc(state.replyTo.text)}<button type="button" data-clear-reply>×</button>`:""}</div><form id="message-form" class="message-form"><button type="button" id="attach" aria-label="Attach">＋</button><input name="text" autocomplete="off" maxlength="4000" placeholder="Message…"><button class="send" type="submit">➤</button></form></div>`;}
function renderMessage(m){const mine=m.sender_id===uid();return `<div class="message-wrap ${mine?"mine":""}" data-message="${m.id}"><button class="message" data-dbl="${m.id}" data-message-actions="${m.id}">${m.reply_text?`<small class="reply">${esc(m.reply_text)}</small>`:""}<span>${esc(m.deleted?"Message deleted":m.text)}</span>${m.edited?`<small class="edited"> edited</small>`:""}</button><small class="message-time">${time(m.created_at)}${m.seen&&mine?" · Seen":""}</small></div>`;}
function renderProfile(id){
  const own=id===uid(); const p=own?(state.profile||state.targetProfile):state.targetProfile;
  if(state.errors.profile)return `${back("Profile",own?"home":"explore")}${errorBox(state.errors.profile,"profile")}`;
  if(!p)return `${back("Profile",own?"home":"explore")}${loading("Loading profile…")}`;
  return `${back("Profile",own?"home":"explore")}<section class="profile-head">${avatar(p,"xl")}<h2>${esc(p.display_name||"RAAZ User")}</h2><p>@${esc(p.username||"user")}</p><p class="bio">${esc(p.bio||"")}</p><div class="profile-stats"><b>${p.posts_count||0}<small>Posts</small></b><b>${p.followers_count||0}<small>Followers</small></b><b>${p.following_count||0}<small>Following</small></b></div>${own?`<div class="profile-buttons"><button data-nav="settings">Settings</button><button data-edit-profile>Edit profile</button></div>`:`<div class="profile-buttons"><button class="${state.following.has(id)?"":"primary"}" data-follow="${id}">${state.following.has(id)?"Following":"Follow"}</button><button class="primary" data-message="${id}">Message</button></div>`}</section><div class="profile-tabs"><button class="${state.profileTab==="posts"?"active":""}" data-ptab="posts">Posts</button><button class="${state.profileTab==="reels"?"active":""}" data-ptab="reels">Reels</button><button class="${state.profileTab==="analytics"?"active":""}" data-ptab="analytics">Analytics</button></div><div id="profile-content">${state.profileTab==="analytics"?renderAnalytics():renderProfileGrid()}</div>`;
}
function renderProfileGrid(){const arr=state.profileContent.filter(p=>state.profileTab==="reels"?p.type==="reel":p.type!=="reel");return `<div class="media-grid">${arr.length?arr.map(p=>p.media_url?(p.media_type?.startsWith("video")?`<video src="${esc(p.media_url)}" controls playsinline></video>`:`<img src="${esc(p.media_url)}" alt="RAAZ">`):`<div class="text-tile">${esc(p.text||"")}</div>`).join(""):`<div class="empty">No ${state.profileTab==="reels"?"reels":"posts"} yet.</div>`}</div>`;}
function renderAnalytics(){const a=state.profileContent;return `<div class="analytics-grid"><div><b>${a.reduce((n,p)=>n+Number(p.views_count||0),0)}</b><small>Views</small></div><div><b>${a.reduce((n,p)=>n+Number(p.likes_count||0),0)}</b><small>Likes</small></div><div><b>${a.reduce((n,p)=>n+Number(p.shares_count||0),0)}</b><small>Shares</small></div><div><b>${a.reduce((n,p)=>n+Number(p.comments_count||0),0)}</b><small>Comments</small></div></div>`;}
function renderSettings(){return `${back("Settings","profile")}<div class="settings-list"><button data-edit-profile>👤 Edit profile</button><button data-qr>▣ RAAZ QR Code</button><button data-privacy>🔒 Privacy</button><button data-signout>↪ Log out</button></div>`;}
function renderNotifications(){return `${back("Notifications","home")}<div class="notification-list">${state.notifications.length?state.notifications.map(n=>`<button class="notification" data-profile="${n.actor_id||""}">${avatar(n.actor)}<span><b>${esc(n.actor?.display_name||"RAAZ")}</b> ${esc(String(n.type||"activity").replaceAll("_"," "))}<small>${time(n.created_at)}</small></span></button>`).join(""):`<div class="empty">No notifications.</div>`}</div>`;}

async function uploadMedia(file,bucket){
  if(!file)return "";
  if(file.size>50*1024*1024)throw new Error("Media is larger than 50 MB.");
  const allowed=file.type.startsWith("image/")||file.type.startsWith("video/"); if(!allowed)throw new Error("Unsupported media type.");
  const ext=(file.name.split(".").pop()||"bin").toLowerCase().replace(/[^a-z0-9]/g,"")||"bin";
  const path=`${uid()}/${crypto.randomUUID()}.${ext}`;
  const {error}=await supabase.storage.from(bucket).upload(path,file,{contentType:file.type,upsert:false,cacheControl:"3600"});
  if(error)throw error;
  return supabase.storage.from(bucket).getPublicUrl(path).data.publicUrl;
}
async function createContent(form){
  const fd=new FormData(form); const text=String(fd.get("text")||"").trim(); const file=fd.get("media"); const type=state.createMode;
  if(type==="reel"&&(!file||!file.type?.startsWith("video/")))throw new Error("Reel ke liye video select karo.");
  if(type==="story"&&!text&&!file?.size)throw new Error("Story mein text ya media add karo.");
  if(type!=="story"&&!text&&!file?.size)throw new Error("Post/Reel mein text ya media add karo.");
  let url="",mediaType="";
  if(file?.size){url=await uploadMedia(file,type==="story"?"stories":type==="reel"?"reels":"posts");mediaType=file.type;}
  if(type==="story"){
    const {error}=await supabase.from("stories").insert({user_id:uid(),text,media_url:url,media_type:mediaType,expires_at:new Date(Date.now()+86400000).toISOString()});if(error)throw error;
  }else{
    const {data,error}=await supabase.from("posts").insert({user_id:uid(),text,media_url:url,media_type:mediaType,type:type==="reel"?"reel":"post"}).select().single();if(error)throw error;
    await supabase.from("profiles").update({posts_count:Number(state.profile?.posts_count||0)+1,updated_at:now()}).eq("id",uid());
    if(data)state.profile={...state.profile,posts_count:Number(state.profile?.posts_count||0)+1};
  }
  toast(`${type[0].toUpperCase()+type.slice(1)} published`,"success");state.feed=[];state.reels=[];state.stories=[];setRoute("home");
}
async function toggleFollow(target){
  if(!target||target===uid())return toast("You cannot follow yourself.","error");
  const already=state.following.has(target);
  if(already){
    const {error}=await supabase.from("follows").delete().eq("follower_id",uid()).eq("following_id",target);
    if(error)throw error;
    state.following.delete(target);
    if(state.profileUid===target&&state.targetProfile)state.targetProfile={...state.targetProfile,followers_count:Math.max(0,Number(state.targetProfile.followers_count||0)-1)};
    toast("Unfollowed","success");
  }else{
    const {error}=await supabase.from("follows").insert({follower_id:uid(),following_id:target});
    if(error && !/duplicate|unique/i.test(error.message||"")) throw error;
    state.following.add(target);
    if(state.profileUid===target&&state.targetProfile)state.targetProfile={...state.targetProfile,followers_count:Number(state.targetProfile.followers_count||0)+(error?0:1)};
    toast(error?"Already following":"Following","success");
  }
  render();
}
async function toggleLike(id){const {data,error}=await supabase.rpc("toggle_like",{target:id});if(error)throw error;const p=state.feed.find(x=>x.id===id)||state.reels.find(x=>x.id===id);if(data)state.liked.add(id);else state.liked.delete(id);if(p)p.likes_count=Math.max(0,Number(p.likes_count||0)+(data?1:-1));render();}
async function toggleSave(id){const {data,error}=await supabase.rpc("toggle_save",{target:id});if(error)throw error;if(data)state.saved.add(id);else state.saved.delete(id);render();}
async function addComment(id,text){const {error}=await supabase.rpc("add_comment",{target:id,body:text});if(error)throw error;const p=state.feed.find(x=>x.id===id);if(p)p.comments_count=Number(p.comments_count||0)+1;toast("Comment added","success");render();}
async function showComments(id){
  const {data,error}=await supabase.from("comments").select("id,user_id,text,created_at").eq("post_id",id).order("created_at",{ascending:true}).limit(100);if(error)throw error;
  const ids=[...new Set((data||[]).map(c=>c.user_id))];const profiles=ids.length?(await supabase.from("profiles").select("id,username,display_name,photo_url").in("id",ids)).data||[]:[];
  const lines=(data||[]).map(c=>`@${esc(profiles.find(p=>p.id===c.user_id)?.username||"user")}: ${esc(c.text)}`).join("\n")||"No comments yet.";
  const t=prompt(`${lines}\n\nWrite a new comment:`);if(t)await addComment(id,t);
}
async function sharePost(id){const {error}=await supabase.rpc("share_post",{target:id});if(error)throw error;const p=state.feed.find(x=>x.id===id);if(p)p.shares_count=Number(p.shares_count||0)+1;toast("Share recorded","success");render();}
async function startChat(target){
  if(!target||target===uid())return;
  const a=uid(),b=target,[member_a,member_b]=a<b?[a,b]:[b,a];
  let {data:c,error}=await supabase.from("chats").select("*").eq("member_a",member_a).eq("member_b",member_b).maybeSingle();
  if(error)throw error;
  if(!c){
    const r=await supabase.from("chats").insert({member_a,member_b}).select().single();
    if(r.error){
      if(/duplicate|unique/i.test(r.error.message||"")){const again=await supabase.from("chats").select("*").eq("member_a",member_a).eq("member_b",member_b).maybeSingle();if(again.error)throw again.error;c=again.data;}
      else throw r.error;
    } else c=r.data;
  }
  if(!c)throw new Error("Unable to open chat.");
  state.chatId=c.id;setRoute("chat",c.id);
}
async function sendMessage(text){if(!text.trim()||!state.chatId)return;const {error}=await supabase.rpc("send_message",{target_chat:state.chatId,body:text.trim(),reply_id:state.replyTo?.id||null});if(error)throw error;state.replyTo=null;await loadChat();render();requestAnimationFrame(()=>{$("#messages")?.scrollTo({top:$(`#messages`).scrollHeight,behavior:"smooth"});});}
async function editMessage(id){const m=state.messages.find(x=>x.id===id);if(!m||m.sender_id!==uid())return;const text=prompt("Edit message",m.text||"");if(text===null||!text.trim())return;const {error}=await supabase.from("messages").update({text:text.trim(),edited:true,edited_at:now()}).eq("id",id).eq("sender_id",uid());if(error)throw error;await loadChat();render();}
async function deleteMessage(id){const {error}=await supabase.from("messages").update({deleted:true,text:"Message deleted",deleted_at:now()}).eq("id",id).eq("sender_id",uid());if(error)throw error;await loadChat();render();}
async function reactMessage(id,emoji="❤️"){const {data:old}=await supabase.from("message_reactions").select("emoji").eq("message_id",id).eq("user_id",uid()).maybeSingle();if(old){const {error}=await supabase.from("message_reactions").delete().eq("message_id",id).eq("user_id",uid());if(error)throw error;}else{const {error}=await supabase.from("message_reactions").insert({message_id:id,user_id:uid(),emoji});if(error)throw error;}toast(old?"Reaction removed":"❤️ Reacted","success");}
async function markStory(id){
  const s=state.stories.find(x=>x.id===id);if(!s)return;
  if(s.user_id!==uid())await supabase.rpc("add_story_view",{target:id}).catch(()=>{});
  if(s.user_id===uid()){
    const {data:viewers}=await supabase.from("story_views").select("user_id,created_at").eq("story_id",id).order("created_at",{ascending:false}).limit(100);
    if((viewers||[]).length){const ids=viewers.map(v=>v.user_id);const {data:ps}=await supabase.from("profiles").select("username,display_name").in("id",ids);const names=(ps||[]).map(p=>`@${p.username}`).join("\n");alert(`Story viewers (${viewers.length})\n\n${names}`);return;}
    toast(`Story views: ${s.views_count||0}`);return;
  }
  if(s.media_url){const w=window.open("","_blank");if(w){w.document.write(`<title>RAAZ Story</title><body style="margin:0;background:#000;color:#fff;font-family:system-ui;text-align:center;padding:20px"><img src="${esc(s.media_url)}" style="max-width:100%;max-height:80vh;object-fit:contain">${s.text?`<p>${esc(s.text)}</p>`:""}</body>`);w.document.close();}}else alert(`${s?.profile?.display_name||"RAAZ User"}\n\n${s?.text||""}`);}

function setRoute(r,id=""){location.hash=id?`${r}/${id}`:r;}
function parseRoute(){const [r,id]=location.hash.replace(/^#/,'').split('/');state.route=r||"home";state.profileUid=id||null;if(state.route!=="chat")state.chatId=null;if(state.route!=="profile")state.targetProfile=null;}
function subscribeRealtime(){
  state.subscriptions.forEach(s=>supabase.removeChannel(s));state.subscriptions=[];if(!uid())return;
  const ch=supabase.channel(`raaz-${uid()}`)
    .on("postgres_changes",{event:"*",schema:"public",table:"messages"},p=>{if(state.route==="chat"&&p.new?.chat_id===state.chatId)loadChat().then(render).catch(()=>{});else if(state.route==="chats")loadChats().then(render).catch(()=>{});})
    .on("postgres_changes",{event:"*",schema:"public",table:"chats"},()=>{loadUnread().then(()=>{if(state.route!=="chat")render();}).catch(()=>{});if(state.route==="chats")loadChats().then(render).catch(()=>{});})
    .on("postgres_changes",{event:"*",schema:"public",table:"notifications",filter:`user_id=eq.${uid()}`},()=>loadNotifications().then(render).catch(()=>{}))
    .on("postgres_changes",{event:"*",schema:"public",table:"posts"},()=>{if(state.route==="home"){state.feed=[];loadFeed().then(render).catch(()=>{});}if(state.route==="reels"){state.reels=[];loadReels().then(render).catch(()=>{});}})
    .subscribe();
  state.subscriptions.push(ch);
}

function bindAuth(){
  $$('[data-auth]').forEach(b=>b.onclick=()=>{state.route=b.dataset.auth;render();});
  const f=$("#auth-form");if(f)f.onsubmit=async e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));const submit=$("button[type=submit]",f);if(submit)submit.disabled=true;try{
    if(state.route==="signup"){
      const username=String(d.username).trim().toLowerCase();if(!/^[a-z0-9_]{3,24}$/.test(username))throw new Error("Username: 3-24 letters, numbers or _");
      const r=await supabase.auth.signUp({email:String(d.email).trim(),password:String(d.password),options:{data:{username,display_name:String(d.name).trim()},emailRedirectTo:new URL("./",location.href).href}});if(r.error)throw r.error;
      if(!r.data.session){toast("Account created. Check your email to confirm login.","success");state.route="login";render();}else await boot(r.data.session);
    }else{const r=await supabase.auth.signInWithPassword({email:String(d.email).trim(),password:String(d.password)});if(r.error)throw r.error;await boot(r.data.session);}
  }catch(e){toast(friendly(e),"error");}finally{if(submit)submit.disabled=false;}};
  const reset=$("[data-reset]");if(reset)reset.onclick=async()=>{const email=prompt("Enter your account email:");if(!email)return;const {error}=await supabase.auth.resetPasswordForEmail(email,{redirectTo:new URL("./",location.href).href});if(error)toast(friendly(error),"error");else toast("Password reset email sent","success");};
}
function bind(){
  $$('[data-nav]').forEach(b=>b.onclick=()=>{const r=b.dataset.nav;if(r==="profile")setRoute("profile",uid());else setRoute(r);});
  $$('[data-profile]').forEach(b=>b.onclick=()=>{const id=b.dataset.profile;if(id)setRoute("profile",id);});
  $$('[data-retry]').forEach(b=>b.onclick=()=>{const r=b.dataset.retry;state.feed=r==="home"?[]:state.feed;state.users=r==="explore"?[]:state.users;state.reels=r==="reels"?[]:state.reels;state.chats=r==="chats"?[]:state.chats;if(r==="profile"){state.targetProfile=null;state.profileContent=[];}if(r==="chat")state.messages=[];state.errors[r]="";render();});
  $$('[data-filter]').forEach(b=>b.onclick=()=>{state.feedFilter=b.dataset.filter;render();});
  $$('[data-create]').forEach(b=>b.onclick=()=>{state.createMode=b.dataset.create;render();});
  const cf=$("#create-form");if(cf)cf.onsubmit=async e=>{e.preventDefault();const b=$("button[type=submit]",cf);if(b)b.disabled=true;try{await createContent(cf);}catch(x){toast(friendly(x),"error");}finally{if(b)b.disabled=false;}};
  $$('[data-follow]').forEach(b=>b.onclick=async()=>{b.disabled=true;try{await toggleFollow(b.dataset.follow);}catch(e){toast(friendly(e),"error");}finally{b.disabled=false;}});
  $$('[data-message]').forEach(b=>b.onclick=async()=>{b.disabled=true;try{await startChat(b.dataset.message);}catch(e){toast(friendly(e),"error");}finally{b.disabled=false;}});
  $$('[data-like]').forEach(b=>b.onclick=async()=>{try{await toggleLike(b.dataset.like);}catch(e){toast(friendly(e),"error");}});
  $$('[data-save]').forEach(b=>b.onclick=async()=>{try{await toggleSave(b.dataset.save);}catch(e){toast(friendly(e),"error");}});
  $$('[data-share]').forEach(b=>b.onclick=async()=>{try{await sharePost(b.dataset.share);}catch(e){toast(friendly(e),"error");}});
  $$('[data-comments]').forEach(b=>b.onclick=async()=>{try{await showComments(b.dataset.comments);}catch(e){toast(friendly(e),"error");}});
  $$('[data-view]').forEach(el=>{let done=false;const go=()=>{if(done||!el.dataset.view)return;done=true;supabase.rpc("add_post_view",{target:el.dataset.view}).catch(()=>{});};el.addEventListener("play",go);el.addEventListener("click",go);});
  $$('[data-story]').forEach(b=>b.onclick=async()=>{try{await markStory(b.dataset.story);}catch(e){toast(friendly(e),"error");}});
  const sf=$("#user-search"),sg=$("#search-go");if(sg)sg.onclick=async()=>{try{await loadDiscover(sf.value);}catch(e){toast(friendly(e),"error");}render();};
  $$('[data-chat]').forEach(b=>b.onclick=()=>{state.chatId=b.dataset.chat;setRoute("chat",state.chatId);});
  const mf=$("#message-form");if(mf){const input=$("input[name=text]",mf);mf.onsubmit=async e=>{e.preventDefault();try{await sendMessage(input.value);input.value="";}catch(x){toast(friendly(x),"error");}};input?.addEventListener("input",()=>{if(!state.chatId)return;supabase.rpc("set_typing",{target_chat:state.chatId,value:true}).catch(()=>{});clearTimeout(typingTimer);typingTimer=setTimeout(()=>supabase.rpc("set_typing",{target_chat:state.chatId,value:false}).catch(()=>{}),900);});}
  $$('[data-dbl]').forEach(b=>b.ondblclick=async()=>{try{await reactMessage(b.dataset.dbl);}catch(e){toast(friendly(e),"error");}});
  $$('[data-message-actions]').forEach(b=>b.onclick=e=>{e.preventDefault();const m=state.messages.find(x=>x.id===b.dataset.messageActions);if(!m)return;const choices=m.sender_id===uid()?"Reply / React / Edit / Delete":"Reply / React";const c=prompt(`${choices}\nType: reply, react, ${m.sender_id===uid()?"edit, delete":""}`.replace(/, $/,""));if(!c)return;(async()=>{try{if(c==="reply"){state.replyTo=m;render();}else if(c==="react")await reactMessage(m.id);else if(c==="edit"&&m.sender_id===uid())await editMessage(m.id);else if(c==="delete"&&m.sender_id===uid())await deleteMessage(m.id);else toast("Choose one of the shown actions.","error");}catch(e){toast(friendly(e),"error");}})();});
  $$('[data-clear-reply]').forEach(b=>b.onclick=()=>{state.replyTo=null;render();});
  $$('[data-ptab]').forEach(b=>b.onclick=()=>{state.profileTab=b.dataset.ptab;render();});
  $$('[data-edit-profile]').forEach(b=>b.onclick=editProfile);
  const qr=$("[data-qr]");if(qr)qr.onclick=()=>{const url=`${location.origin}${location.pathname}#profile/${uid()}`;const w=window.open("","_blank");if(w)w.document.write(`<title>RAAZ QR Code</title><body style="font-family:system-ui;text-align:center;padding:30px"><h2>RAAZ QR Code</h2><img style="max-width:90vw" src="https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${encodeURIComponent(url)}"><p>Scan to open this RAAZ profile</p></body>`);};
  const so=$("[data-signout]");if(so)so.onclick=async()=>{await supabase.auth.signOut();};
  const req=$("[data-requests]");if(req)req.onclick=showRequests;
  const pv=$("[data-privacy]");if(pv)pv.onclick=()=>toast("Your profile and social data are protected by Supabase RLS.","success");
  const attach=$("#attach");if(attach)attach.onclick=()=>{const i=$("input[name=text]");if(i){i.focus();toast("Chat media storage is configured separately; text chat is ready.");}};
  $$('[data-post-menu]').forEach(b=>b.onclick=()=>{const p=state.feed.find(x=>x.id===b.dataset.postMenu);if(!p)return;if(p.user_id===uid()){const c=confirm("Delete this post?");if(c)deletePost(p.id);}else{toast("Post menu: report/block controls can be added to your moderation policy.");}});
}
async function editProfile(){const p=state.profile||{};const name=prompt("Display name",p.display_name||"");if(name===null)return;const username=prompt("Username",p.username||"");if(username===null)return;const bio=prompt("Bio",p.bio||"");if(bio===null)return;const u=username.trim().toLowerCase();if(!/^[a-z0-9_]{3,24}$/.test(u))return toast("Username: 3-24 letters, numbers or _","error");const {data:existing}=await supabase.from("profiles").select("id").eq("username",u).neq("id",uid()).maybeSingle();if(existing)return toast("Username already taken","error");const {data,error}=await supabase.from("profiles").update({display_name:name.trim()||"RAAZ User",username:u,bio:bio.trim(),updated_at:now()}).eq("id",uid()).select().single();if(error)return toast(friendly(error),"error");state.profile=data;state.targetProfile=data;toast("Profile updated","success");render();}
async function deletePost(id){const {error}=await supabase.from("posts").delete().eq("id",id).eq("user_id",uid());if(error)return toast(friendly(error),"error");state.feed=state.feed.filter(p=>p.id!==id);toast("Post deleted","success");render();}
async function showRequests(){if(!state.requests.length)return;const r=state.requests[0];const yes=confirm(`Accept message request from @${r.sender?.username||"user"}?`);const status=yes?"accepted":"declined";const {error}=await supabase.from("message_requests").update({status,...(yes?{accepted_at:now()}:{declined_at:now()})}).eq("id",r.id);if(error)return toast(friendly(error),"error");if(yes)await startChat(r.from_user_id);await loadRequests();render();}

supabase.auth.onAuthStateChange(async(event,session)=>{if(session&&(!state.session||state.session.user.id!==session.user.id))await boot(session);if(!session){state.session=null;state.user=null;state.profile=null;state.subscriptions.forEach(s=>supabase.removeChannel(s));state.subscriptions=[];state.route="login";state.feed=[];state.chats=[];render();}});
window.addEventListener("hashchange",()=>{parseRoute();render();});
parseRoute();
supabase.auth.getSession().then(({data})=>{if(data.session)boot(data.session);else render();}).catch(e=>{console.error(e);render();});
