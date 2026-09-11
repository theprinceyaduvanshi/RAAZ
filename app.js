// ================= ELEMENTS =================
const splashScreen = document.getElementById("splashScreen");
const authScreen = document.getElementById("authScreen");
const homeScreen = document.getElementById("homeScreen");
const chatScreen = document.getElementById("chatScreen");
const profileScreen = document.getElementById("profileScreen");
const profileViewScreen = document.getElementById("profileViewScreen");
const requestsScreen = document.getElementById("requestsScreen");
const blockedScreen = document.getElementById("blockedScreen");

const nameInput = document.getElementById("nameInput");
const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passInput = document.getElementById("passInput");
const authError = document.getElementById("authError");

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const logoutBtnHome = document.getElementById("logoutBtnHome");
const backBtn = document.getElementById("backBtn");

const myUsernameDisplay = document.getElementById("myUsernameDisplay");
const friendUsernameInput = document.getElementById("friendUsernameInput");
const findFriendBtn = document.getElementById("findFriendBtn");
const homeError = document.getElementById("homeError");
const searchResultsList = document.getElementById("searchResultsList");
const chatListEmpty = document.getElementById("chatListEmpty");
const chatListWrapper = document.getElementById("chatListWrapper");
const primarySectionLabel = document.getElementById("primarySectionLabel");
const secondarySectionLabel = document.getElementById("secondarySectionLabel");
const chatListPrimary = document.getElementById("chatListPrimary");
const chatListSecondary = document.getElementById("chatListSecondary");

// ================= FEED / POSTS ELEMENTS =================
const feedTabBtn = document.getElementById("feedTabBtn");
const chatsTabBtn = document.getElementById("chatsTabBtn");
const feedSection = document.getElementById("feedSection");
const chatsSection = document.getElementById("chatsSection");
const feedFilters = document.querySelectorAll(".feedFilter");
const notificationsBtn = document.getElementById("notificationsBtn");
const notificationsBadge = document.getElementById("notificationsBadge");
const notificationsOverlay = document.getElementById("notificationsOverlay");
const closeNotificationsBtn = document.getElementById("closeNotificationsBtn");
const markNotificationsBtn = document.getElementById("markNotificationsBtn");
const notificationsList = document.getElementById("notificationsList");
const notificationsEmpty = document.getElementById("notificationsEmpty");
const feedList = document.getElementById("feedList");
const feedEmpty = document.getElementById("feedEmpty");
const composerAvatar = document.getElementById("composerAvatar");
const openCreatePostBtn = document.getElementById("openCreatePostBtn");
const createPostOverlay = document.getElementById("createPostOverlay");
const closeCreatePostBtn = document.getElementById("closeCreatePostBtn");
const publishPostBtn = document.getElementById("publishPostBtn");
const postComposerAvatar = document.getElementById("postComposerAvatar");
const postComposerName = document.getElementById("postComposerName");
const postComposerUsername = document.getElementById("postComposerUsername");
const postCaptionInput = document.getElementById("postCaptionInput");
const postImageInput = document.getElementById("postImageInput");
const postImagePreview = document.getElementById("postImagePreview");
const postError = document.getElementById("postError");
const quickCreatePostBtn = document.getElementById("quickCreatePostBtn");

// ================= STORIES ELEMENTS =================
const storyRail = document.getElementById("storyRail");
const openCreateStoryBtn = document.getElementById("openCreateStoryBtn");
const createStoryOverlay = document.getElementById("createStoryOverlay");
const closeCreateStoryBtn = document.getElementById("closeCreateStoryBtn");
const publishStoryBtn = document.getElementById("publishStoryBtn");
const storyTypeBtns = document.querySelectorAll(".storyTypeBtn");
const storyTextMode = document.getElementById("storyTextMode");
const storyPhotoMode = document.getElementById("storyPhotoMode");
const storyTextInput = document.getElementById("storyTextInput");
const storyImageInput = document.getElementById("storyImageInput");
const storyImagePreview = document.getElementById("storyImagePreview");
const storyError = document.getElementById("storyError");
const storyViewerOverlay = document.getElementById("storyViewerOverlay");
const closeStoryViewerBtn = document.getElementById("closeStoryViewerBtn");
const storyViewerAvatar = document.getElementById("storyViewerAvatar");
const storyViewerName = document.getElementById("storyViewerName");
const storyViewerTime = document.getElementById("storyViewerTime");
const storyViewerContent = document.getElementById("storyViewerContent");
const storyProgressBar = document.getElementById("storyProgressBar");
const storyPrevBtn = document.getElementById("storyPrevBtn");
const storyNextBtn = document.getElementById("storyNextBtn");
const storyViewerViews = document.getElementById("storyViewerViews");
const storyViewersOverlay = document.getElementById("storyViewersOverlay");
const storyViewersList = document.getElementById("storyViewersList");
const storyViewersCountLabel = document.getElementById("storyViewersCountLabel");
const closeStoryViewersBtn = document.getElementById("closeStoryViewersBtn");
const deleteStoryBtn = document.getElementById("deleteStoryBtn");
const storyReplyBar = document.getElementById("storyReplyBar");
const storyReplyInput = document.getElementById("storyReplyInput");
const sendStoryReplyBtn = document.getElementById("sendStoryReplyBtn");

const requestsBtn = document.getElementById("requestsBtn");
const requestsBadge = document.getElementById("requestsBadge");
const chatNavBadge = document.getElementById("chatNavBadge");
const requestsBackBtn = document.getElementById("requestsBackBtn");
const requestsList = document.getElementById("requestsList");
const requestsEmpty = document.getElementById("requestsEmpty");

const profileViewBackBtn = document.getElementById("profileViewBackBtn");
const viewAvatar = document.getElementById("viewAvatar");
const viewName = document.getElementById("viewName");
const viewUsername = document.getElementById("viewUsername");
const viewBio = document.getElementById("viewBio");
const viewActionArea = document.getElementById("viewActionArea");
const viewError = document.getElementById("viewError");

const profileBtn = document.getElementById("profileBtn");
const profileBackBtn = document.getElementById("profileBackBtn");
const profileAvatar = document.getElementById("profileAvatar");
const profileName = document.getElementById("profileName");
const profileUsername = document.getElementById("profileUsername");
const profileEmail = document.getElementById("profileEmail");
const qrcodeBox = document.getElementById("qrcodeBox");
const photoInput = document.getElementById("photoInput");
const photoUploadError = document.getElementById("photoUploadError");
const bioDisplay = document.getElementById("bioDisplay");
const editBioBtn = document.getElementById("editBioBtn");
const editBioBox = document.getElementById("editBioBox");
const newBioInput = document.getElementById("newBioInput");
const saveBioBtn = document.getElementById("saveBioBtn");
const cancelBioBtn = document.getElementById("cancelBioBtn");
const editUsernameBtn = document.getElementById("editUsernameBtn");
const editUsernameBox = document.getElementById("editUsernameBox");
const newUsernameInput = document.getElementById("newUsernameInput");
const saveUsernameBtn = document.getElementById("saveUsernameBtn");
const cancelUsernameBtn = document.getElementById("cancelUsernameBtn");
const usernameEditError = document.getElementById("usernameEditError");
const blockedListBtn = document.getElementById("blockedListBtn");
const blockedBackBtn = document.getElementById("blockedBackBtn");
const blockedList = document.getElementById("blockedList");
const blockedEmpty = document.getElementById("blockedEmpty");

const myFollowersStat = document.getElementById("myFollowersStat");
const myFollowingStat = document.getElementById("myFollowingStat");
const myFollowersCount = document.getElementById("myFollowersCount");
const myFollowingCount = document.getElementById("myFollowingCount");
const viewFollowersStat = document.getElementById("viewFollowersStat");
const viewFollowingStat = document.getElementById("viewFollowingStat");
const viewFollowersCount = document.getElementById("viewFollowersCount");
const viewFollowingCount = document.getElementById("viewFollowingCount");
const followBtnArea = document.getElementById("followBtnArea");

const peopleListScreen = document.getElementById("peopleListScreen");
const peopleListBackBtn = document.getElementById("peopleListBackBtn");
const peopleListTitle = document.getElementById("peopleListTitle");
const peopleListContainer = document.getElementById("peopleListContainer");
const peopleListEmpty = document.getElementById("peopleListEmpty");

const messagesDiv = document.getElementById("messages");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const friendNameDisplay = document.getElementById("friendNameDisplay");
const friendStatus = document.getElementById("friendStatus");
const chatHeaderAvatar = document.getElementById("chatHeaderAvatar");
const chatMenuBtn = document.getElementById("chatMenuBtn");
const chatPhotoInput = document.getElementById("chatPhotoInput");

const chatItemMenuOverlay = document.getElementById("chatItemMenuOverlay");
const moveCategoryBtn = document.getElementById("moveCategoryBtn");
const blockFromMenuBtn = document.getElementById("blockFromMenuBtn");
const deleteChatBtn = document.getElementById("deleteChatBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");

// ================= STATE =================
let currentUserName = "";
let currentUsername = "";
let currentPhotoBase64 = null;
let currentBio = "";
let currentChatId = null;
let currentFriendUid = null;

let unsubscribeMessages = null;
let unsubscribeFriendStatus = null;
let unsubscribeChatList = null;
let unsubscribeRequestsBadge = null;
let unsubscribeFeed = null;
let unsubscribeNotifications = null;
let unsubscribeStories = null;
let feedCache = [];
let activeFeedFilter = "all";
let profilePostCache = [];
let storyCache = [];
let currentStoryIndex = 0;
let storyTimer = null;
let activeStoryType = "text";
let unsubscribeChatDoc = null;
let heartbeatInterval = null;
let statusRefreshInterval = null;
let searchDebounceTimer = null;
let typingTimeout = null;
let lastKnownFriendSeen = null;
let cachedMessages = [];
let chatDocData = {};
let isFriendTyping = false;
let readMarkInFlight = false;
let currentProfileViewUid = null;
let currentProfileViewData = null;
let myStatsUnsub = {};
let viewStatsUnsub = {};
const friendAvatarListeners = {};

// Jab chat-item ka "..." menu khula ho, us item ki info yahan store hoti hai
let menuTargetChatId = null;
let menuTargetFriendUid = null;
let menuTargetFriendName = null;
let menuTargetFriendUsername = null;
let menuTargetCategory = "primary";

// ================= HELPERS =================
function getChatId(uidA, uidB) {
  return [uidA, uidB].sort().join("_");
}

function showScreen(screenEl) {
  const allScreens = [authScreen, homeScreen, chatScreen, profileScreen, profileViewScreen, requestsScreen, blockedScreen, peopleListScreen,
    document.getElementById("exploreScreen"), document.getElementById("reelsScreen"), document.getElementById("groupsScreen"),
    document.getElementById("notesScreen"), document.getElementById("settingsScreen"), document.getElementById("gamesScreen")];
  allScreens.forEach(s => s?.classList.add("hidden"));
  screenEl?.classList.remove("hidden");
  if (typeof showRaazBottomNav === "function") {
    showRaazBottomNav(!!screenEl && screenEl !== authScreen && screenEl !== chatScreen);
  }
}

// ================= FRIEND AVATAR LIVE SYNC =================
function watchFriendAvatar(uid) {
  if (friendAvatarListeners[uid]) return;
  friendAvatarListeners[uid] = db.collection("users").doc(uid).onSnapshot((doc) => {
    const data = doc.data() || {};
    updateAllAvatarsForUid(uid, data.photoBase64, data.name);
  });
}

function updateAllAvatarsForUid(uid, photoBase64, name) {
  document.querySelectorAll(`[data-avatar-uid="${uid}"]`).forEach((el) => {
    if (photoBase64) {
      el.style.backgroundImage = `url(${photoBase64})`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.textContent = "";
    } else {
      el.style.backgroundImage = "none";
      const fallback = el.dataset.fallbackLetter || name || "?";
      el.textContent = fallback.charAt(0).toUpperCase();
    }
  });
}

function stopAllFriendAvatarWatchers() {
  Object.values(friendAvatarListeners).forEach((unsub) => unsub());
  Object.keys(friendAvatarListeners).forEach((key) => delete friendAvatarListeners[key]);
}

// ================= SERVICE WORKER =================
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

// ================= ENTRY ANIMATION =================
window.addEventListener("load", () => {
  setTimeout(() => {
    splashScreen.classList.add("splashHide");
    setTimeout(() => { splashScreen.style.display = "none"; }, 700);
  }, 1800);
});

// ================= HEARTBEAT =================
function startHeartbeat() {
  stopHeartbeat();
  const uid = auth.currentUser?.uid;
  if (!uid || localStorage.getItem("raaz.activity") === "0") return;
  db.collection("users").doc(uid).set({ lastSeen: firebase.firestore.FieldValue.serverTimestamp(), activityStatus:true }, { merge: true }).catch(()=>{});
  heartbeatInterval = setInterval(() => {
    if (auth.currentUser && localStorage.getItem("raaz.activity") !== "0") {
      db.collection("users").doc(auth.currentUser.uid).set({ lastSeen: firebase.firestore.FieldValue.serverTimestamp(), activityStatus:true }, { merge: true }).catch(()=>{});
    }
  }, 15000);
}

function stopHeartbeat() {
  if (heartbeatInterval) { clearInterval(heartbeatInterval); heartbeatInterval = null; }
}

// ================= SIGN UP =================
signupBtn.addEventListener("click", async () => {
  const name = nameInput.value.trim();
  const username = usernameInput.value.trim().toLowerCase();
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();

  if (!name || !username || !email || !pass) {
    authError.textContent = "Sab fields bharo!";
    return;
  }
  if (username.includes(" ")) {
    authError.textContent = "Username me space nahi ho sakta!";
    return;
  }

  authError.textContent = "Account ban raha hai...";

  let createdUser = null;
  try {
    // Firestore users collection is readable only after authentication.
    // Therefore the username check must happen AFTER Firebase Auth signup.
    const userCredential = await auth.createUserWithEmailAndPassword(email, pass);
    createdUser = userCredential.user;
    const uid = createdUser.uid;

    await createdUser.updateProfile({ displayName: name });

    const existing = await db.collection("users").where("username", "==", username).get();
    if (!existing.empty) {
      await createdUser.delete();
      authError.textContent = "Ye username already liya gaya hai, doosra try karo!";
      return;
    }

    await db.collection("users").doc(uid).set({
      name: name,
      username: username,
      email: email,
      lastSeen: firebase.firestore.FieldValue.serverTimestamp()
    });

    authError.textContent = "";
  } catch (err) {
    // If Auth succeeded but the Firestore profile could not be created,
    // clean up the just-created Auth account so the email is not stranded.
    if (createdUser && auth.currentUser && auth.currentUser.uid === createdUser.uid) {
      try { await createdUser.delete(); } catch (_) {}
    }
    authError.textContent = err.message || "Account create nahi ho saka.";
  }
});

// ================= LOGIN =================
loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const pass = passInput.value.trim();
  if (!email || !pass) {
    authError.textContent = "Email aur password daalo!";
    return;
  }
  auth.signInWithEmailAndPassword(email, pass).catch((err) => {
    authError.textContent = err.message;
  });
});

// ================= LOGOUT =================
function doLogout() {
  if(chatNavBadge) chatNavBadge.classList.add("hidden");
  stopHeartbeat();
  if (unsubscribeChatList) unsubscribeChatList();
  if (unsubscribeRequestsBadge) unsubscribeRequestsBadge();
  if (unsubscribeMessages) unsubscribeMessages();
  if (unsubscribeFriendStatus) unsubscribeFriendStatus();
  if (unsubscribeChatDoc) unsubscribeChatDoc();
  if (unsubscribeFeed) unsubscribeFeed();
  if (unsubscribeStories) unsubscribeStories();
  if (unsubscribeNotifications) unsubscribeNotifications();
  if (unsubscribeReels) unsubscribeReels?.();
  if (unsubscribeGroups) unsubscribeGroups?.();
  if (unsubscribeNotes) unsubscribeNotes?.();
  if (window.raazReelObserver) { window.raazReelObserver.disconnect(); window.raazReelObserver = null; }
  stopAllFriendAvatarWatchers();
  auth.signOut();
}
logoutBtn?.addEventListener("click", doLogout);
logoutBtnHome?.addEventListener("click", doLogout);

// ================= AUTH STATE WATCHER =================
auth.onAuthStateChanged(async (user) => {
  if (user) {
    currentUserName = user.displayName || user.email;

    const userDoc = await db.collection("users").doc(user.uid).get();
    if (userDoc.exists) {
      currentUsername = userDoc.data().username;
      currentPhotoBase64 = userDoc.data().photoBase64 || null;
      currentBio = userDoc.data().bio || "";
    }

    myUsernameDisplay.textContent = "@" + currentUsername;
    syncBottomProfileAvatar();

    showScreen(homeScreen);
    showRaazBottomNav(true);

    startHeartbeat();
    listenForChatList();
    listenForRequestsBadge();
    renderComposerIdentity();
    listenForFeed();
    listenForStories();
    listenForNotifications();
  } else {
    showScreen(authScreen);
    showRaazBottomNav(false);
    if (unsubscribeMessages) unsubscribeMessages();
    if (unsubscribeFriendStatus) unsubscribeFriendStatus();
    if (unsubscribeChatList) unsubscribeChatList();
    if (unsubscribeRequestsBadge) unsubscribeRequestsBadge();
    if (unsubscribeFeed) unsubscribeFeed();
    if (unsubscribeStories) unsubscribeStories();
    stopStoryTimer();
    if (unsubscribeNotifications) unsubscribeNotifications();
    if (unsubscribeChatDoc) unsubscribeChatDoc();
    if (statusRefreshInterval) clearInterval(statusRefreshInterval);
    stopHeartbeat();
    stopAllFriendAvatarWatchers();
    unattachStats(myStatsUnsub);
    unattachStats(viewStatsUnsub);
  }
});


// ================= HOME TABS =================
let lastHomeTab = "feed";
function showHomeTab(tab) {
  lastHomeTab = tab === "chats" ? "chats" : "feed";
  const feedActive = tab === "feed";
  feedSection.classList.toggle("hidden", !feedActive);
  chatsSection.classList.toggle("hidden", feedActive);
  feedTabBtn?.classList.toggle("active", feedActive);
  chatsTabBtn?.classList.toggle("active", !feedActive);
}

feedTabBtn?.addEventListener("click", () => showHomeTab("feed"));
chatsTabBtn?.addEventListener("click", () => showHomeTab("chats"));

function renderComposerIdentity() {
  const letter = (currentUserName || "R").charAt(0).toUpperCase();
  [composerAvatar, postComposerAvatar].forEach((el) => {
    if (!el) return;
    el.textContent = currentPhotoBase64 ? "" : letter;
    el.style.backgroundImage = currentPhotoBase64 ? `url(${currentPhotoBase64})` : "none";
    if (currentPhotoBase64) {
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
    }
  });
  if (postComposerName) postComposerName.textContent = currentUserName || "Tum";
  if (postComposerUsername) postComposerUsername.textContent = currentUsername ? "@" + currentUsername : "";
}

function formatRelativeTime(timestamp){
  if(!timestamp)return "abhi";
  try{const d=timestamp.toDate?timestamp.toDate():new Date(timestamp);const sec=Math.max(0,Math.floor((Date.now()-d.getTime())/1000));if(sec<60)return "abhi";if(sec<3600)return Math.floor(sec/60)+"m";if(sec<86400)return Math.floor(sec/3600)+"h";return Math.floor(sec/86400)+"d";}catch(e){return "";}
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatPostTime(timestamp) {
  if (!timestamp) return "Abhi";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const diff = Math.max(0, Date.now() - date.getTime());
  const minute = 60000, hour = 3600000, day = 86400000;
  if (diff < minute) return "Abhi";
  if (diff < hour) return `${Math.floor(diff / minute)}m`;
  if (diff < day) return `${Math.floor(diff / hour)}h`;
  if (diff < day * 7) return `${Math.floor(diff / day)}d`;
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

function renderFeedFromCache() {
  feedList.innerHTML = "";
  let posts = window.raazProfileOnly ? [...profilePostCache] : [...feedCache];
  if (activeFeedFilter === "following") {
    const following = window.raazFollowingIds || new Set();
    posts = posts.filter(p => following.has(p.data.uid) || p.data.uid === auth.currentUser?.uid);
  }
  if (activeFeedFilter === "saved") {
    const saved = window.raazSavedPostIds || new Set();
    posts = posts.filter(p => saved.has(p.id));
  }
  if (window.raazProfileOnly) {
    posts = posts.filter(p => p.data.uid === auth.currentUser?.uid);
  }
  feedEmpty.classList.toggle("hidden", posts.length > 0);
  if (!posts.length) {
    feedEmpty.querySelector("h3").textContent = activeFeedFilter === "saved" ? "No saved posts" : activeFeedFilter === "following" ? "Following feed empty" : "RAAZ Feed";
    feedEmpty.querySelector("p").textContent = activeFeedFilter === "saved" ? "Jo posts save karoge wo yahan milenge." : activeFeedFilter === "following" ? "Kisi ko follow karo aur unki posts yahan dekho." : "Abhi koi post nahi hai. Sabse pehli post tum karo!";
    return;
  }
  posts.forEach(({id, data}) => renderPostCard(id, data));
}

async function refreshFollowingIds() {
  if (!auth.currentUser) return;
  try {
    const snap = await db.collection("users").doc(auth.currentUser.uid).collection("following").get();
    window.raazFollowingIds = new Set(snap.docs.map(d => d.id));
  } catch (_) { window.raazFollowingIds = new Set(); }
}

async function refreshSavedPostIds() {
  if (!auth.currentUser) return;
  try {
    const snap = await db.collection("users").doc(auth.currentUser.uid).collection("savedPosts").get();
    window.raazSavedPostIds = new Set(snap.docs.map(d => d.id));
  } catch (_) { window.raazSavedPostIds = new Set(); }
}

async function listenForFeed() {
  if (unsubscribeFeed) unsubscribeFeed();
  feedList.innerHTML = `<div class="feedLoading">Feed load ho raha hai...</div>`;
  await Promise.all([refreshFollowingIds(), refreshSavedPostIds()]);
  unsubscribeFeed = db.collection("posts")
    .orderBy("createdAt", "desc")
    .limit(50)
    .onSnapshot(async (snapshot) => {
      feedCache = snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
      renderFeedFromCache();
    }, (err) => {
      console.warn("RAAZ feed listener:", err);
      feedList.innerHTML = `<div class="feedEmpty feedErrorState"><div class="feedEmptyIcon">Retry</div><h3>Feed abhi available nahi hai</h3><p>Connection ya account access check karke dobara try karo.</p><button class="primaryAction feedRetryBtn">Try again</button></div>`;
      feedList.querySelector(".feedRetryBtn")?.addEventListener("click",()=>listenForFeed());
    });
}

feedFilters.forEach(btn => btn.addEventListener("click", async () => {
  activeFeedFilter = btn.dataset.feedFilter || "all";
  feedFilters.forEach(b => b.classList.toggle("active", b === btn));
  if (activeFeedFilter === "following") await refreshFollowingIds();
  if (activeFeedFilter === "saved") await refreshSavedPostIds();
  renderFeedFromCache();
}));

async function renderPostCard(postId, data) {
  const isMine = auth.currentUser && data.uid === auth.currentUser.uid;
  const card = document.createElement("article");
  card.className = "postCard";
  card.dataset.postId = postId;
  const avatar = data.photoBase64 ? `<div class="postAvatar" style="background-image:url(${data.photoBase64})"></div>` : `<div class="postAvatar">${escapeHtml((data.name || "R").charAt(0).toUpperCase())}</div>`;
  const caption = data.caption ? `<div class="postCaption">${escapeHtml(data.caption).replace(/\n/g, "<br>")}</div>` : "";
  const image = data.imageBase64 ? `<img class="postMedia" src="${data.imageBase64}" alt="Post image" loading="lazy">` : "";
  card.innerHTML = `
    <div class="postHeader">
      <button class="postIdentity">${avatar}<span><strong>${escapeHtml(data.name || "RAAZ User")}</strong><small>@${escapeHtml(data.username || "user")}  -  ${formatPostTime(data.createdAt)}</small></span></button>
      <button class="postMoreBtn" aria-label="Post options">...</button>
    </div>
    ${caption}
    ${image}
    <div class="postActions">
      <button type="button" class="postAction likeBtn" aria-label="Like post">Like <span class="likeCount">0</span></button>
      <button type="button" class="postAction commentBtn" aria-label="Comments">Comment <span class="commentCount">0</span></button>
      <button type="button" class="postAction saveBtn" aria-label="Save post">Save</button>
      <button type="button" class="postAction repostBtn" aria-label="Repost">Repost</button>
      <button type="button" class="postAction shareBtn" aria-label="Share post">Share</button>
    </div>
    <div class="commentsArea hidden">
      <div class="commentsList"></div>
      <div class="commentComposer"><input maxlength="500" placeholder="Comment likho..."><button>Send</button></div>
    </div>`;
  feedList.appendChild(card);

  card.querySelector(".postIdentity").addEventListener("click", async () => {
    if (data.uid === auth.currentUser.uid) profileBtn.click();
    else {
      const userDoc = await db.collection("users").doc(data.uid).get();
      if (userDoc.exists) openProfileView(data.uid, userDoc.data());
    }
  });
  card.querySelector(".postMoreBtn")?.addEventListener("click", async () => {
    await openPostActions(postId, data, card);
  });
  card.querySelector(".likeBtn").addEventListener("click", () => window.raazSafeAction ? window.raazSafeAction(()=>togglePostLike(postId, card),"Like complete nahi hua.") : togglePostLike(postId, card));
  card.querySelector(".commentBtn").addEventListener("click", () => window.raazSafeAction ? window.raazSafeAction(()=>toggleComments(postId, card),"Comments load nahi hue.") : toggleComments(postId, card));
  card.querySelector(".saveBtn").addEventListener("click", () => window.raazSafeAction ? window.raazSafeAction(()=>toggleSavePost(postId, card),"Save complete nahi hua.") : toggleSavePost(postId, card));
  card.querySelector(".repostBtn")?.addEventListener("click", () => window.raazSafeAction ? window.raazSafeAction(()=>repostPost(postId, data),"Repost complete nahi hua.") : repostPost(postId, data));
  card.querySelector(".shareBtn").addEventListener("click", () => sharePost(postId, data));
  card.querySelector(".commentComposer button").addEventListener("click", () => window.raazSafeAction ? window.raazSafeAction(()=>addPostComment(postId, card),"Comment send nahi hua.") : addPostComment(postId, card));
  card.querySelector(".commentComposer input").addEventListener("keydown", (e) => { if (e.key === "Enter") addPostComment(postId, card); });
  let lastTap = 0;
  card.querySelector(".postMedia")?.addEventListener("click", () => {
    const now = Date.now();
    if (now - lastTap < 360) togglePostLike(postId, card);
    lastTap = now;
  });

  const myUid = auth.currentUser.uid;
  const [likeSnap, commentSnap, mineLike] = await Promise.all([
    db.collection("posts").doc(postId).collection("likes").get(),
    db.collection("posts").doc(postId).collection("comments").get(),
    db.collection("posts").doc(postId).collection("likes").doc(myUid).get()
  ]);
  card.querySelector(".likeCount").textContent = likeSnap.size;
  card.querySelector(".commentCount").textContent = commentSnap.size;
  if (mineLike.exists) card.querySelector(".likeBtn").classList.add("liked");
  if (window.raazSavedPostIds && window.raazSavedPostIds.has(postId)) card.querySelector(".saveBtn").classList.add("saved");
}

let postActionTarget = null;
function openPostActions(postId, data, card) {
  postActionTarget = { postId, data, card };
  const overlay = document.getElementById("postActionOverlay");
  const title = document.getElementById("postActionTitle");
  const edit = document.getElementById("editPostActionBtn");
  const del = document.getElementById("deletePostActionBtn");
  const report = document.getElementById("reportPostActionBtn");
  const mine = data.uid === auth.currentUser?.uid;
  if (title) title.textContent = mine ? "Your post" : "Post options";
  edit?.classList.toggle("hidden", !mine);
  del?.classList.toggle("hidden", !mine);
  report?.classList.toggle("hidden", mine);
  overlay?.classList.remove("hidden");
}

document.getElementById("closePostActionBtn")?.addEventListener("click",()=>document.getElementById("postActionOverlay")?.classList.add("hidden"));
document.getElementById("postActionOverlay")?.addEventListener("click",e=>{if(e.target.id==="postActionOverlay")e.currentTarget.classList.add("hidden");});
document.getElementById("editPostActionBtn")?.addEventListener("click",async()=>{
  const t=postActionTarget;if(!t)return;
  const next=prompt("Caption edit karo:",t.data.caption||"");if(next===null)return;
  try{
    const caption=next.trim();
    await db.collection("posts").doc(t.postId).set({caption,updatedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
    const cached=feedCache.find(x=>x.id===t.postId);if(cached)cached.data.caption=caption;
    document.getElementById("postActionOverlay")?.classList.add("hidden");
    renderFeedFromCache();showRaazToast("Post updated","success");
  }catch(e){showRaazToast(e.message||"Post update nahi hui","error");}
});
document.getElementById("deletePostActionBtn")?.addEventListener("click",async()=>{
  const t=postActionTarget;if(!t||!confirm("Is post ko permanently delete karna hai?"))return;
  try{await db.collection("posts").doc(t.postId).delete();document.getElementById("postActionOverlay")?.classList.add("hidden");showRaazToast("Post deleted","success");}
  catch(e){showRaazToast(e.message||"Delete nahi hua","error");}
});
document.getElementById("reportPostActionBtn")?.addEventListener("click",async()=>{
  const t=postActionTarget;if(!t)return;
  try{await db.collection("reports").add({type:"post",targetId:t.postId,targetUid:t.data.uid,reporterUid:auth.currentUser.uid,reason:"user_report",status:"open",createdAt:firebase.firestore.FieldValue.serverTimestamp()});document.getElementById("postActionOverlay")?.classList.add("hidden");showRaazToast("Report submitted","success");}
  catch(e){showRaazToast(e.message||"Report submit nahi hua","error");}
});

async function toggleSavePost(postId, card) {
  const uid = auth.currentUser.uid;
  const ref = db.collection("users").doc(uid).collection("savedPosts").doc(postId);
  const snap = await ref.get();
  if (snap.exists) {
    await ref.delete();
    window.raazSavedPostIds?.delete(postId);
  } else {
    await ref.set({ postId, savedAt: firebase.firestore.FieldValue.serverTimestamp() });
    if (!window.raazSavedPostIds) window.raazSavedPostIds = new Set();
    window.raazSavedPostIds.add(postId);
  }
  card.querySelector(".saveBtn").classList.toggle("saved", !snap.exists);
  if (activeFeedFilter === "saved") renderFeedFromCache();
}

async function togglePostLike(postId, card) {
  const uid = auth.currentUser.uid;
  const ref = db.collection("posts").doc(postId).collection("likes").doc(uid);
  const snap = await ref.get();
  if (snap.exists) {
    await ref.delete();
  } else {
    await ref.set({ uid, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    const postSnap = await db.collection("posts").doc(postId).get();
    const post = postSnap.data() || {};
    if (post.uid && post.uid !== uid) await createNotification(post.uid, { type: "like", fromUid: uid, fromName: currentUserName, fromUsername: currentUsername, postId });
  }
  const count = await db.collection("posts").doc(postId).collection("likes").get();
  card.querySelector(".likeCount").textContent = count.size;
  card.querySelector(".likeBtn").classList.toggle("liked", !snap.exists);
}

async function toggleComments(postId, card) {
  const area = card.querySelector(".commentsArea");
  area.classList.toggle("hidden");
  if (!area.classList.contains("hidden")) await loadPostComments(postId, card);
}

async function loadPostComments(postId, card) {
  const list = card.querySelector(".commentsList");
  if(!list) return;
  try {
  const snap = await db.collection("posts").doc(postId).collection("comments").orderBy("createdAt", "asc").limit(50).get();
  list.innerHTML = snap.empty ? `<div class="noComments">Abhi koi comment nahi.</div>` : "";
  snap.forEach((doc) => {
    const d = doc.data();
    const row = document.createElement("div");
    row.className = "commentRow";
    row.innerHTML = `<strong>@${escapeHtml(d.username || "user")}</strong><span>${escapeHtml(d.text || "")}</span>`;
    list.appendChild(row);
  });
  } catch(err) {
    list.innerHTML = `<div class="noComments">${escapeHtml(err?.message || "Comments load nahi hue.")}</div>`;
  }
}

async function addPostComment(postId, card) {
  const input = card.querySelector(".commentComposer input");
  const text = input.value.trim();
  if (!text || !auth.currentUser) return;
  try {
    await db.collection("posts").doc(postId).collection("comments").add({
      uid: auth.currentUser.uid, name: currentUserName, username: currentUsername, text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    const postSnap = await db.collection("posts").doc(postId).get();
    const post = postSnap.data() || {};
    if (post.uid && post.uid !== auth.currentUser.uid) await createNotification(post.uid, { type: "comment", fromUid: auth.currentUser.uid, fromName: currentUserName, fromUsername: currentUsername, postId, text });
    input.value = "";
    await loadPostComments(postId, card);
    const count = await db.collection("posts").doc(postId).collection("comments").get();
    card.querySelector(".commentCount").textContent = count.size;
  } catch(err) {
    showRaazToast?.(err?.message || "Comment send nahi hua.", "error");
  }
}

async function sharePost(postId, data) {
  const shareText = `@${data.username || 'user'} ne RAAZ par ek post share ki hai${data.caption ? `: ${data.caption}` : ''}`;
  let shared = false;
  if (navigator.share) {
    try {
      await navigator.share({ title: 'RAAZ Post', text: shareText, url: `${location.href.split('#')[0]}#post-${postId}` });
      shared = true;
    } catch (err) {
      if (err?.name === 'AbortError') return;
    }
  } else {
    try { await navigator.clipboard.writeText(`${shareText} ${location.href.split('#')[0]}#post-${postId}`); shared = true; }
    catch (_) { alert(shareText); return; }
  }
  if (shared && auth.currentUser) {
    try {
      const ref = db.collection('posts').doc(postId);
      const snap = await ref.get();
      const current = Number(snap.data()?.shareCount || 0);
      await ref.update({ shareCount: current + 1 });
    } catch (e) { console.warn('Post share counter', e); }
  }
}

async function createNotification(targetUid, data) {
  try {
    await db.collection("users").doc(targetUid).collection("notifications").add({
      ...data, read: false, createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (_) {}
}

function notificationText(d) {
  const who = d.fromName || (d.fromUsername ? "@" + d.fromUsername : "Someone");
  if (d.type === "like") return `<strong>${escapeHtml(who)}</strong> liked your post.`;
  if (d.type === "comment") return `<strong>${escapeHtml(who)}</strong> commented: "${escapeHtml(d.text || "")}` + `"`;
  if (d.type === "follow") return `<strong>${escapeHtml(who)}</strong> started following you.`;
  if (d.type === "chat_message") return `<strong>${escapeHtml(who)}</strong> sent you a message.`;
  if (d.type === "reel_like") return `<strong>${escapeHtml(who)}</strong> liked your reel.`;
  if (d.type === "reel_comment") return `<strong>${escapeHtml(who)}</strong> commented on your reel.`;
  if (d.type === "story_reply") return `<strong>${escapeHtml(who)}</strong> replied to your story.`;
  if (d.type === "repost") return `<strong>${escapeHtml(who)}</strong> reposted your post.`;
  return `<strong>${escapeHtml(who)}</strong> sent you a notification.`;
}

function notificationIcon(type){
  if(type === "like" || type === "reel_like") return "Like";
  if(type === "comment" || type === "reel_comment") return "Chat";
  if(type === "chat_message") return "Message";
  if(type === "follow") return "+";
  if(type === "story_reply") return "Story";
  if(type === "repost") return "Retry";
  return "*";
}

function listenForNotifications() {
  if (unsubscribeNotifications) unsubscribeNotifications();
  if (!auth.currentUser) return;
  unsubscribeNotifications = db.collection("users").doc(auth.currentUser.uid).collection("notifications")
    .orderBy("createdAt", "desc").limit(100).onSnapshot((snap) => {
      const unread = snap.docs.filter(d => !d.data().read).length;
      notificationsBadge.textContent = unread > 99 ? "99+" : String(unread);
      notificationsBadge.classList.toggle("hidden", unread === 0);
      notificationsList.innerHTML = "";
      notificationsEmpty.classList.toggle("hidden", !snap.empty);
      snap.forEach(doc => {
        const d = doc.data();
        const row = document.createElement("button");
        row.className = `notificationItem ${d.read ? "" : "unread"}`;
        row.innerHTML = `<span class="notificationIcon">${notificationIcon(d.type)}</span><span class="notificationText">${notificationText(d)}<small>${formatPostTime(d.createdAt)}</small></span>`;
        row.addEventListener("click", async () => {
          try { await doc.ref.set({ read: true }, { merge: true }); } catch(_) {}
          notificationsOverlay.classList.add("hidden");
          if (d.chatId && d.fromUid) {
            openChat(d.fromUid, d.fromName || "User", d.fromUsername || "user");
          } else if (d.postId) {
            activeFeedFilter = "all"; feedFilters.forEach(b => b.classList.toggle("active", b.dataset.feedFilter === "all")); showHomeTab("feed");
          } else if (d.reelId) {
            raazGoFeature(reelsScreen,"reels"); listenForReels();
          }
        });
        notificationsList.appendChild(row);
      });
    }, err => {
      console.error("Notifications listener", err);
      notificationsList.innerHTML = `<div class="featureEmpty"><h3>Notifications unavailable</h3><p>${escapeHtml(err?.message || "Notifications load nahi hui.")}</p></div>`;
      notificationsEmpty.classList.add("hidden");
    });
}

notificationsBtn.addEventListener("click", () => notificationsOverlay.classList.remove("hidden"));
closeNotificationsBtn.addEventListener("click", () => notificationsOverlay.classList.add("hidden"));
notificationsOverlay.addEventListener("click", e => { if (e.target === notificationsOverlay) notificationsOverlay.classList.add("hidden"); });
markNotificationsBtn.addEventListener("click", async () => {
  if (!auth.currentUser) return;
  try {
    const snap = await db.collection("users").doc(auth.currentUser.uid).collection("notifications").where("read", "==", false).limit(100).get();
    const batch = db.batch(); snap.forEach(d => batch.set(d.ref, { read: true }, { merge: true })); await batch.commit();
    showRaazToast?.("Notifications read ho gayi.","success");
  } catch(err) { showRaazToast?.(err?.message || "Notifications update nahi hui.","error"); }
});

openCreatePostBtn.addEventListener("click", () => {
  renderComposerIdentity();
  postCaptionInput.value = "";
  postImageInput.value = "";
  postImagePreview.innerHTML = "";
  postImagePreview.classList.add("hidden");
  postError.textContent = "";
  createPostOverlay.classList.remove("hidden");
  postCaptionInput.focus();
});
closeCreatePostBtn.addEventListener("click", () => createPostOverlay.classList.add("hidden"));
quickCreatePostBtn?.addEventListener("click", () => openCreatePostBtn.click());
createPostOverlay.addEventListener("click", (e) => { if (e.target === createPostOverlay) createPostOverlay.classList.add("hidden"); });

postImageInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) { postError.textContent = "Sirf image select karo."; return; }
  const reader = new FileReader();
  reader.onload = (event) => {
    postImagePreview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
    postImagePreview.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
});

publishPostBtn.addEventListener("click", async () => {
  const caption = postCaptionInput.value.trim();
  const file = postImageInput.files[0];
  if (!caption && !file) { postError.textContent = "Caption ya photo me se kuch add karo."; return; }
  publishPostBtn.disabled = true;
  publishPostBtn.textContent = "Posting...";
  postError.textContent = "";
  try {
    let imageBase64 = null;
    if (file) {
      imageBase64 = await compressPostImage(file);
      if (imageBase64.length > 950000) throw new Error("Photo bahut badi hai. Thodi chhoti image try karo.");
    }
    await db.collection("posts").add({
      uid: auth.currentUser.uid,
      name: currentUserName,
      username: currentUsername,
      photoBase64: currentPhotoBase64 || null,
      caption,
      imageBase64,
      viewCount: 0,
      shareCount: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    createPostOverlay.classList.add("hidden");
    showHomeTab("feed");
  } catch (err) {
    postError.textContent = err.message || "Post publish nahi hui.";
  } finally {
    publishPostBtn.disabled = false;
    publishPostBtn.textContent = "Post";
  }
});

function compressPostImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Photo read nahi ho payi."));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error("Photo process nahi ho payi."));
      img.onload = () => {
        const max = 1000;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.72));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ================= STORIES SYSTEM =================
function storyIsActive(data) {
  const expires = data.expiresAt?.toDate ? data.expiresAt.toDate() : new Date(data.expiresAt || 0);
  return expires.getTime() > Date.now();
}
function formatStoryTime(timestamp) {
  if (!timestamp) return "Just now";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const diff = Math.max(0, Date.now() - date.getTime());
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  return `${Math.floor(mins / 60)}h ago`;
}
async function listenForStories() {
  if (unsubscribeStories) unsubscribeStories();
  if (!auth.currentUser || !storyRail) return;
  storyRail.innerHTML = `<div class="storyLoading">Stories load ho rahi hain...</div>`;
  unsubscribeStories = db.collection("stories").orderBy("createdAt", "desc").limit(100).onSnapshot(async snap => {
    storyCache = snap.docs.map(d => ({id:d.id, data:d.data()})).filter(x => storyIsActive(x.data));
    await refreshFollowingIds();
    renderStoryRail();
  }, err => {
    console.warn("RAAZ stories listener:", err);
    storyRail.innerHTML = `<div class="storyLoading storyErrorState">Stories abhi available nahi hain <button class="storyRetryBtn">Retry</button></div>`;
    storyRail.querySelector(".storyRetryBtn")?.addEventListener("click",()=>listenForStories());
  });
}
function renderStoryRail() {
  if (!storyRail) return;
  storyRail.innerHTML = "";
  const me = auth.currentUser?.uid;
  const following = window.raazFollowingIds || new Set();
  const visible = storyCache.filter(x => x.data.uid === me || following.has(x.data.uid));
  const grouped = new Map();
  visible.forEach(item => { if (!grouped.has(item.data.uid)) grouped.set(item.data.uid, []); grouped.get(item.data.uid).push(item); });
  const myStories = grouped.get(me) || [];
  const myTile = document.createElement("button");
  myTile.className = "storyTile storyOwnTile";
  myTile.innerHTML = `<div class="storyRing"><div class="storyAvatar">${currentPhotoBase64 ? `<img src="${currentPhotoBase64}" alt="">` : escapeHtml((currentUserName || "R").charAt(0).toUpperCase())}</div><span class="storyPlus">+</span></div><strong>Your Story</strong><small>${myStories.length ? `${myStories.length} active` : "Add story"}</small>`;
  myTile.addEventListener("click", () => myStories.length ? openStoryGroup(myStories, 0) : openCreateStory());
  storyRail.appendChild(myTile);
  [...grouped.entries()].filter(([uid]) => uid !== me).forEach(([uid, items]) => {
    const d = items[0].data, tile = document.createElement("button");
    tile.className = "storyTile";
    const avatar = d.photoBase64 ? `<img src="${d.photoBase64}" alt="">` : escapeHtml((d.name || "R").charAt(0).toUpperCase());
    tile.innerHTML = `<div class="storyRing unseen"><div class="storyAvatar">${avatar}</div></div><strong>${escapeHtml(d.name || "User")}</strong><small>@${escapeHtml(d.username || "user")}</small>`;
    tile.addEventListener("click", () => openStoryGroup(items, 0));
    storyRail.appendChild(tile);
  });
}
function openCreateStory() {
  activeStoryType = "text";
  storyTypeBtns.forEach(b => b.classList.toggle("active", b.dataset.storyType === "text"));
  storyTextMode.classList.remove("hidden"); storyPhotoMode.classList.add("hidden");
  storyTextInput.value = ""; storyImageInput.value = ""; storyImagePreview.innerHTML = ""; storyImagePreview.classList.add("hidden"); storyError.textContent = "";
  createStoryOverlay.classList.remove("hidden"); storyTextInput.focus();
}
openCreateStoryBtn?.addEventListener("click", openCreateStory);
closeCreateStoryBtn?.addEventListener("click", () => createStoryOverlay.classList.add("hidden"));
createStoryOverlay?.addEventListener("click", e => { if (e.target === createStoryOverlay) createStoryOverlay.classList.add("hidden"); });
storyTypeBtns.forEach(btn => btn.addEventListener("click", () => {
  activeStoryType = btn.dataset.storyType || "text";
  storyTypeBtns.forEach(b => b.classList.toggle("active", b === btn));
  storyTextMode.classList.toggle("hidden", activeStoryType !== "text"); storyPhotoMode.classList.toggle("hidden", activeStoryType !== "photo");
}));
storyImageInput?.addEventListener("change", e => {
  const file = e.target.files[0]; if (!file) return;
  if (!file.type.startsWith("image/")) { storyError.textContent = "Sirf image select karo."; return; }
  const reader = new FileReader(); reader.onload = ev => { storyImagePreview.innerHTML = `<img src="${ev.target.result}" alt="Story preview">`; storyImagePreview.classList.remove("hidden"); }; reader.readAsDataURL(file);
});
publishStoryBtn?.addEventListener("click", async () => {
  if (!auth.currentUser) return;
  const text = storyTextInput.value.trim(), file = storyImageInput.files[0];
  if (activeStoryType === "text" && !text) { storyError.textContent = "Story text likho."; return; }
  if (activeStoryType === "photo" && !file) { storyError.textContent = "Story photo select karo."; return; }
  publishStoryBtn.disabled = true; publishStoryBtn.textContent = "Sharing..."; storyError.textContent = "";
  try {
    let imageBase64 = null;
    if (activeStoryType === "photo") { imageBase64 = await compressStoryImage(file); if (imageBase64.length > 950000) throw new Error("Photo bahut badi hai. Chhoti image try karo."); }
    await db.collection("stories").add({uid:auth.currentUser.uid,name:currentUserName,username:currentUsername,photoBase64:currentPhotoBase64 || null,type:activeStoryType,text:activeStoryType === "text" ? text : "",imageBase64,createdAt:firebase.firestore.FieldValue.serverTimestamp(),expiresAt:firebase.firestore.Timestamp.fromDate(new Date(Date.now()+86400000))});
    createStoryOverlay.classList.add("hidden");
  } catch (err) { storyError.textContent = err.message || "Story publish nahi hui."; }
  finally { publishStoryBtn.disabled = false; publishStoryBtn.textContent = "Share"; }
});
function compressStoryImage(file) {
  return new Promise((resolve,reject) => { const r=new FileReader(); r.onerror=()=>reject(new Error("Photo read nahi ho payi.")); r.onload=e=>{ const img=new Image(); img.onerror=()=>reject(new Error("Photo process nahi ho payi.")); img.onload=()=>{ const max=1080, scale=Math.min(1,max/Math.max(img.width,img.height)), c=document.createElement("canvas"); c.width=Math.max(1,Math.round(img.width*scale)); c.height=Math.max(1,Math.round(img.height*scale)); c.getContext("2d").drawImage(img,0,0,c.width,c.height); resolve(c.toDataURL("image/jpeg",.70)); }; img.src=e.target.result; }; r.readAsDataURL(file); });
}
function openStoryGroup(items,index) { if (!items.length) return; window.currentStoryGroup=items; currentStoryIndex=index; storyViewerOverlay.classList.remove("hidden"); renderCurrentStory(); }
function stopStoryTimer(){ if(storyTimer) clearTimeout(storyTimer); storyTimer=null; }
async function renderCurrentStory(){
  stopStoryTimer(); const items=window.currentStoryGroup||[], item=items[currentStoryIndex]; if(!item){closeStoryViewer();return;} const d=item.data;
  storyViewerAvatar.innerHTML=d.photoBase64?`<img src="${escapeHtml(d.photoBase64)}" alt="">`:escapeHtml((d.name||"R").charAt(0).toUpperCase()); storyViewerName.textContent=d.name||"RAAZ User"; storyViewerTime.textContent=formatStoryTime(d.createdAt);
  storyViewerContent.innerHTML=d.type==="photo"?`<img class="storyViewerImage" src="${escapeHtml(d.imageBase64||"")}" alt="Story">`:`<div class="storyViewerText">${escapeHtml(d.text||"").replace(/\n/g,"<br>")}</div>`;
  storyProgressBar.style.width=`${((currentStoryIndex+1)/items.length)*100}%`; const mine=d.uid===auth.currentUser?.uid; deleteStoryBtn.classList.toggle("hidden",!mine); if(storyReplyBar) storyReplyBar.classList.toggle("hidden",mine); storyViewerViews.textContent="Views Loading views..."; window.currentViewedStory=item;
  try {
    const viewsRef=db.collection("stories").doc(item.id).collection("views");
    if(!mine && auth.currentUser) await viewsRef.doc(auth.currentUser.uid).set({uid:auth.currentUser.uid,viewedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});
    const views=await viewsRef.get();
    storyViewerViews.textContent=`Views ${views.size} ${views.size===1?"view":"views"}`;
  } catch(_) { storyViewerViews.textContent="Views Views"; }
  storyTimer=setTimeout(nextStory,5000);
}

async function openStoryViewers(){
  const item=window.currentViewedStory;
  if(!item || !storyViewersOverlay || !storyViewersList) return;
  storyViewersOverlay.classList.remove("hidden");
  storyViewersList.innerHTML=`<div class="storyViewersEmpty">Viewers load ho rahe hain...</div>`;
  try{
    const snap=await db.collection("stories").doc(item.id).collection("views").orderBy("viewedAt","desc").get();
    if(storyViewersCountLabel) storyViewersCountLabel.textContent=String(snap.size);
    if(snap.empty){ storyViewersList.innerHTML=`<div class="storyViewersEmpty">Abhi kisi ne story nahi dekhi.</div>`; return; }
    storyViewersList.innerHTML="";
    for(const viewDoc of snap.docs){
      const uid=viewDoc.id, vd=viewDoc.data()||{};
      let u={};
      try{ const us=await db.collection("users").doc(uid).get(); if(us.exists) u=us.data()||{}; }catch(_){}
      const name=u.name||vd.name||"RAAZ User", username=u.username||vd.username||"user";
      const row=document.createElement("button"); row.type="button"; row.className="storyViewerRow";
      const avatarStyle=u.photoBase64?`style="background-image:url(${escapeHtml(u.photoBase64)})"`:"";
      row.innerHTML=`<div class="storyViewerRowAvatar" ${avatarStyle}>${u.photoBase64?"":escapeHtml(name.charAt(0).toUpperCase())}</div><div class="storyViewerRowInfo"><strong>${escapeHtml(name)}</strong><small>@${escapeHtml(username)}  -  ${formatPostTime(vd.viewedAt)}</small></div><span class="storyViewerRowArrow">></span>`;
      row.addEventListener("click",async()=>{
        storyViewersOverlay.classList.add("hidden");
        try{ const fresh=await db.collection("users").doc(uid).get(); if(fresh.exists) openProfileView(uid,fresh.data()); }catch(e){showRaazToast?.(e.message||"Profile load nahi hui.","error");}
      });
      storyViewersList.appendChild(row);
    }
  }catch(e){
    storyViewersList.innerHTML=`<div class="storyViewersEmpty">${escapeHtml(e?.message||"Viewers load nahi hue.")}</div>`;
  }
}
closeStoryViewersBtn?.addEventListener("click",()=>storyViewersOverlay?.classList.add("hidden"));
storyViewersOverlay?.addEventListener("click",e=>{if(e.target===storyViewersOverlay)e.currentTarget.classList.add("hidden")});
storyViewerViews?.addEventListener("click",openStoryViewers);
function nextStory(){const items=window.currentStoryGroup||[]; if(currentStoryIndex<items.length-1){currentStoryIndex++;renderCurrentStory();}else closeStoryViewer();}
function prevStory(){if(currentStoryIndex>0){currentStoryIndex--;renderCurrentStory();}}
function closeStoryViewer(){stopStoryTimer();storyViewerOverlay.classList.add("hidden");storyReplyBar?.classList.add("hidden");if(storyReplyInput)storyReplyInput.value="";}
closeStoryViewerBtn?.addEventListener("click",closeStoryViewer); storyNextBtn?.addEventListener("click",nextStory); storyPrevBtn?.addEventListener("click",prevStory);
storyViewerOverlay?.addEventListener("click",e=>{if(e.target===storyViewerOverlay)closeStoryViewer();});
sendStoryReplyBtn?.addEventListener("click", async()=>{const item=window.currentViewedStory;const text=storyReplyInput?.value.trim();if(!item||!text||item.data.uid===auth.currentUser?.uid)return;try{await db.collection("users").doc(item.data.uid).collection("notifications").add({type:"story_reply",fromUid:auth.currentUser.uid,fromName:currentUserName,fromUsername:currentUsername,storyId:item.id,text,read:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()});storyReplyInput.value="";alert("Story reply bhej diya.");}catch(e){alert(e.message||"Reply send nahi hua.");}});
storyReplyInput?.addEventListener("keydown",e=>{if(e.key==="Enter")sendStoryReplyBtn.click();});
deleteStoryBtn?.addEventListener("click",async()=>{const item=(window.currentStoryGroup||[])[currentStoryIndex];if(!item||item.data.uid!==auth.currentUser?.uid)return;if(!confirm("Is story ko delete karna hai?"))return;try{await db.collection("stories").doc(item.id).delete();closeStoryViewer();}catch(err){alert(err.message||"Delete nahi hui.");}});

// ================= MY PROFILE SCREEN =================
profileBtn.addEventListener("click", () => {
  const user = auth.currentUser;
  if (!user) return;

  renderProfileAvatar();
  profileName.textContent = currentUserName;
  profileUsername.textContent = "@" + currentUsername;
  profileEmail.textContent = user.email;
  bioDisplay.textContent = currentBio || "Bio nahi likha hai abhi";

  qrcodeBox.innerHTML = "";
  const appUrl = window.location.href.split("?")[0].split("#")[0];
  new QRCode(qrcodeBox, { text: appUrl, width: 180, height: 180, colorDark: "#1a0000", colorLight: "#ffffff" });

  attachFollowStats(user.uid, myFollowersCount, myFollowingCount, myStatsUnsub);

  showScreen(profileScreen);
});

profileBackBtn.addEventListener("click", () => {
  unattachStats(myStatsUnsub);
  raazGoHome("feed");
});

function renderProfileAvatar() {
  if (currentPhotoBase64) {
    profileAvatar.style.backgroundImage = `url(${currentPhotoBase64})`;
    profileAvatar.style.backgroundSize = "cover";
    profileAvatar.style.backgroundPosition = "center";
    profileAvatar.textContent = "";
  } else {
    profileAvatar.style.backgroundImage = "none";
    profileAvatar.textContent = currentUserName.charAt(0).toUpperCase();
  }
}

// ================= PHOTO UPLOAD =================
photoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  photoUploadError.textContent = "Photo taiyar ho rahi hai...";

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      const size = 200;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      const minSide = Math.min(img.width, img.height);
      const sx = (img.width - minSide) / 2;
      const sy = (img.height - minSide) / 2;
      ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
      const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);

      if (compressedBase64.length > 900000) {
        photoUploadError.textContent = "Ye photo bahut badi hai, chhoti photo try karo!";
        return;
      }

      try {
        await db.collection("users").doc(auth.currentUser.uid).set({ photoBase64: compressedBase64 }, { merge: true });
        currentPhotoBase64 = compressedBase64;
        renderProfileAvatar();
        renderComposerIdentity();
        photoUploadError.textContent = "";
      } catch (err) {
        photoUploadError.textContent = "Photo save nahi hui: " + err.message;
      }
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// ================= EDIT BIO =================
editBioBtn.addEventListener("click", () => {
  newBioInput.value = currentBio;
  editBioBox.classList.remove("hidden");
});
cancelBioBtn.addEventListener("click", () => editBioBox.classList.add("hidden"));

saveBioBtn.addEventListener("click", async () => {
  const newBio = newBioInput.value.trim();
  await db.collection("users").doc(auth.currentUser.uid).set({ bio: newBio }, { merge: true });
  currentBio = newBio;
  bioDisplay.textContent = currentBio || "Bio nahi likha hai abhi";
  editBioBox.classList.add("hidden");
});

// ================= EDIT USERNAME =================
editUsernameBtn.addEventListener("click", () => {
  newUsernameInput.value = currentUsername;
  usernameEditError.textContent = "";
  editUsernameBox.classList.remove("hidden");
});
cancelUsernameBtn.addEventListener("click", () => {
  editUsernameBox.classList.add("hidden");
  usernameEditError.textContent = "";
});

saveUsernameBtn.addEventListener("click", async () => {
  const newUsername = newUsernameInput.value.trim().toLowerCase();
  usernameEditError.textContent = "";

  if (!newUsername) { usernameEditError.textContent = "Username khali nahi ho sakta!"; return; }
  if (newUsername.includes(" ")) { usernameEditError.textContent = "Username me space nahi ho sakta!"; return; }
  if (newUsername === currentUsername) { editUsernameBox.classList.add("hidden"); return; }

  usernameEditError.textContent = "Check ho raha hai...";

  try {
    const existing = await db.collection("users").where("username", "==", newUsername).get();
    if (!existing.empty) {
      usernameEditError.textContent = "Ye username already liya gaya hai, doosra try karo!";
      return;
    }

    const myUid = auth.currentUser.uid;
    await db.collection("users").doc(myUid).set({
      username: newUsername, name: currentUserName, email: auth.currentUser.email
    }, { merge: true });

    currentUsername = newUsername;
    myUsernameDisplay.textContent = "@" + currentUsername;
    profileUsername.textContent = "@" + currentUsername;
    usernameEditError.textContent = "";
    editUsernameBox.classList.add("hidden");
  } catch (err) {
    usernameEditError.textContent = err.message;
  }
});

// ================= SEARCH USERS (shows profiles, not direct chat) =================
friendUsernameInput.addEventListener("input", () => {
  clearTimeout(searchDebounceTimer);
  const q = friendUsernameInput.value.trim().toLowerCase();

  if (!q) {
    searchResultsList.classList.add("hidden");
    chatListWrapper.classList.remove("hidden");
    updateChatListEmptyVisibility();
    return;
  }

  searchDebounceTimer = setTimeout(() => runSearch(q), 300);
});

findFriendBtn.addEventListener("click", () => {
  const q = friendUsernameInput.value.trim().toLowerCase();
  if (q) runSearch(q);
});

async function runSearch(q) {
  homeError.textContent = "";
  chatListWrapper.classList.add("hidden");
  chatListEmpty.classList.add("hidden");
  searchResultsList.classList.remove("hidden");
  searchResultsList.innerHTML = `<div class="chatListEmpty">Dhundh rahe hain...</div>`;

  const myUid = auth.currentUser.uid;

  try {
    const result = await db.collection("users")
      .where("username", ">=", q)
      .where("username", "<=", q + "\uf8ff")
      .limit(20)
      .get();

    const matches = result.docs.filter(d => d.id !== myUid);

    if (matches.length === 0) {
      searchResultsList.innerHTML = `<div class="chatListEmpty">Koi user nahi mila</div>`;
      return;
    }

    searchResultsList.innerHTML = "";
    matches.forEach((doc) => {
      const data = doc.data();
      const item = document.createElement("div");
      item.classList.add("chatListItem");
      item.innerHTML = `
        <div class="chatListAvatar" data-avatar-uid="${doc.id}" data-fallback-letter="${data.name}">${data.name.charAt(0).toUpperCase()}</div>
        <div class="chatListText">
          <div class="chatListName">${data.name}</div>
          <div class="chatListLastMsg">@${data.username}</div>
        </div>
      `;
      item.addEventListener("click", () => openProfileView(doc.id, data));
      searchResultsList.appendChild(item);
      watchFriendAvatar(doc.id);
    });
  } catch (err) {
    searchResultsList.innerHTML = `<div class="chatListEmpty">Search me dikkat hui</div>`;
  }
}

// ================= VIEW SOMEONE'S PROFILE =================
async function openProfileView(uid, data) {
  viewError.textContent = "";
  currentProfileViewUid = uid;
  currentProfileViewData = data;

  viewAvatar.setAttribute("data-avatar-uid", uid);
  viewAvatar.setAttribute("data-fallback-letter", data.name);
  viewAvatar.textContent = data.name.charAt(0).toUpperCase();
  viewAvatar.style.backgroundImage = data.photoBase64 ? `url(${data.photoBase64})` : "none";
  if (data.photoBase64) {
    viewAvatar.style.backgroundSize = "cover";
    viewAvatar.style.backgroundPosition = "center";
  }
  viewName.textContent = data.name;
  viewUsername.textContent = "@" + data.username;
  viewBio.textContent = data.bio || "Bio nahi likha hai abhi";
  viewActionArea.innerHTML = `<p class="error">Check ho raha hai...</p>`;

  watchFriendAvatar(uid);
  attachFollowStats(uid, viewFollowersCount, viewFollowingCount, viewStatsUnsub);
  renderFollowButton(uid, data);
  showScreen(profileViewScreen);

  await renderProfileViewActions(uid, data);
}

// ================= FOLLOW / UNFOLLOW SYSTEM =================
function attachFollowStats(uid, followersEl, followingEl, unsubStore) {
  unattachStats(unsubStore);
  unsubStore.followers = db.collection("users").doc(uid).collection("followers")
    .onSnapshot((snap) => { followersEl.textContent = snap.size; });
  unsubStore.following = db.collection("users").doc(uid).collection("following")
    .onSnapshot((snap) => { followingEl.textContent = snap.size; });
}

function unattachStats(unsubStore) {
  if (unsubStore.followers) unsubStore.followers();
  if (unsubStore.following) unsubStore.following();
  unsubStore.followers = null;
  unsubStore.following = null;
}

async function renderFollowButton(uid, data) {
  const myUid = auth.currentUser.uid;
  if (uid === myUid) {
    followBtnArea.innerHTML = "";
    return;
  }

  let isFollowing = false;
  try {
    const followDoc = await db.collection("users").doc(myUid).collection("following").doc(uid).get();
    isFollowing = followDoc.exists;
  } catch (e) {
    console.error("Follow state load", e);
  }

  // Instagram-style: Follow + Message are always visible together.
  followBtnArea.innerHTML = `
    <button id="followToggleBtn" class="followBtn ${isFollowing ? 'following' : ''}">${isFollowing ? 'OK Following' : '+ Follow'}</button>
    <button id="profileMessageBtn" class="followBtn profileMessageBtn">Message</button>
  `;

  document.getElementById("followToggleBtn")?.addEventListener("click", async () => {
    try {
      if (isFollowing) {
        await unfollowUser(uid);
      } else {
        await followUser(uid, data.name, data.username);
      }
      renderFollowButton(uid, data);
    } catch (e) {
      showRaazToast?.(e.message || "Follow action failed", "error");
    }
  });

  document.getElementById("profileMessageBtn")?.addEventListener("click", async () => {
    const btn = document.getElementById("profileMessageBtn");
    if (!btn) return;
    const oldText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Opening...";
    try {
      const chatId = getChatId(myUid, uid);
      const [chatDoc, sentDoc, receivedDoc] = await Promise.all([
        db.collection("users").doc(myUid).collection("chatsList").doc(chatId).get(),
        db.collection("users").doc(myUid).collection("requestsSent").doc(uid).get(),
        db.collection("users").doc(myUid).collection("requestsReceived").doc(uid).get()
      ]);

      if (chatDoc.exists) {
        openChat(uid, data.name, data.username);
        return;
      }

      if (receivedDoc.exists) {
        await acceptRequest(uid, data.name, data.username);
        openChat(uid, data.name, data.username);
        return;
      }

      if (sentDoc.exists) {
        showRaazToast?.("Message request already sent.", "info");
        return;
      }

      await sendMessageRequest(uid, data.name, data.username);
      showRaazToast?.("Message request sent.", "success");
    } catch (e) {
      console.error("Profile message", e);
      showRaazToast?.(e.message || "Message open nahi ho paaya.", "error");
    } finally {
      btn.disabled = false;
      btn.textContent = oldText;
    }
  });
}

async function followUser(targetUid, targetName, targetUsername) {
  const myUid = auth.currentUser.uid;
  const batch = db.batch();
  const now = firebase.firestore.FieldValue.serverTimestamp();
  batch.set(db.collection("users").doc(myUid).collection("following").doc(targetUid), {
    targetUid, targetName, targetUsername, followedAt: now
  });
  batch.set(db.collection("users").doc(targetUid).collection("followers").doc(myUid), {
    followerUid: myUid, followerName: currentUserName, followerUsername: currentUsername, followedAt: now
  });
  await batch.commit();
  await createNotification(targetUid, { type: "follow", fromUid: myUid, fromName: currentUserName, fromUsername: currentUsername });
  await refreshFollowingIds();
  renderFeedFromCache();
}

async function unfollowUser(targetUid) {
  const myUid = auth.currentUser.uid;
  const batch = db.batch();
  batch.delete(db.collection("users").doc(myUid).collection("following").doc(targetUid));
  batch.delete(db.collection("users").doc(targetUid).collection("followers").doc(myUid));
  await batch.commit();
  await refreshFollowingIds();
  renderFeedFromCache();
}

// ================= FOLLOWERS / FOLLOWING LIST =================
myFollowersStat.addEventListener("click", () => openPeopleList(auth.currentUser.uid, "followers"));
myFollowingStat.addEventListener("click", () => openPeopleList(auth.currentUser.uid, "following"));
viewFollowersStat.addEventListener("click", () => openPeopleList(currentProfileViewUid, "followers"));
viewFollowingStat.addEventListener("click", () => openPeopleList(currentProfileViewUid, "following"));

function openPeopleList(uid, type) {
  peopleListTitle.textContent = type === "followers" ? "Followers" : "Following";
  showScreen(peopleListScreen);
  loadPeopleList(uid, type);
}

async function loadPeopleList(uid, type) {
  peopleListContainer.innerHTML = `<div class="chatListEmpty">Load ho raha hai...</div>`;
  peopleListEmpty.classList.add("hidden");

  const snap = await db.collection("users").doc(uid).collection(type).orderBy("followedAt", "desc").get();
  peopleListEmpty.classList.toggle("hidden", !snap.empty);
  peopleListContainer.innerHTML = "";

  snap.forEach((doc) => {
    const d = doc.data();
    const personUid = type === "followers" ? d.followerUid : d.targetUid;
    const personName = type === "followers" ? d.followerName : d.targetName;
    const personUsername = type === "followers" ? d.followerUsername : d.targetUsername;

    const item = document.createElement("div");
    item.classList.add("chatListItem");
    item.innerHTML = `
      <div class="chatListAvatar" data-avatar-uid="${personUid}" data-fallback-letter="${personName}">${personName.charAt(0).toUpperCase()}</div>
      <div class="chatListText">
        <div class="chatListName">${personName}</div>
        <div class="chatListLastMsg">@${personUsername}</div>
      </div>
    `;
    item.addEventListener("click", async () => {
      const freshDoc = await db.collection("users").doc(personUid).get();
      if (freshDoc.exists) openProfileView(personUid, freshDoc.data());
    });
    peopleListContainer.appendChild(item);
    watchFriendAvatar(personUid);
  });
}

peopleListBackBtn.addEventListener("click", () => {
  if (currentProfileViewUid && currentProfileViewData) {
    openProfileView(currentProfileViewUid, currentProfileViewData);
  } else {
    showScreen(homeScreen);
  }
});

async function renderProfileViewActions(uid, data) {
  try {
    const myUid = auth.currentUser.uid;
    if (uid === myUid) { viewActionArea.innerHTML = ""; return; }
    const chatId = getChatId(myUid, uid);
    const blockedDoc = await db.collection("users").doc(myUid).collection("blocked").doc(uid).get();
    if (blockedDoc.exists) {
      viewActionArea.innerHTML = `<button id="unblockActionBtn" class="viewActionBtn danger">Unblock</button>`;
      document.getElementById("unblockActionBtn").addEventListener("click", async () => { await unblockUser(uid); renderProfileViewActions(uid, data); });
      return;
    }
    const [chatDoc, sentDoc, receivedDoc] = await Promise.all([
      db.collection("users").doc(myUid).collection("chatsList").doc(chatId).get(),
      db.collection("users").doc(myUid).collection("requestsSent").doc(uid).get(),
      db.collection("users").doc(myUid).collection("requestsReceived").doc(uid).get()
    ]);
    const messageLabel = chatDoc.exists ? "Message" : receivedDoc.exists ? "Accept & Message" : sentDoc.exists ? "Request Sent" : "Message";
    const disabled = sentDoc.exists && !chatDoc.exists;
    viewActionArea.innerHTML = `<button id="messageActionBtn" class="viewActionBtn ${disabled ? 'disabled' : ''}" ${disabled ? 'disabled' : ''}>${messageLabel}</button>`;
    const messageBtn=document.getElementById("messageActionBtn");
    messageBtn.addEventListener("click", async()=>{
      try {
        if(chatDoc.exists){ openChat(uid,data.name,data.username); return; }
        if(receivedDoc.exists){ await acceptRequest(uid,data.name,data.username); openChat(uid,data.name,data.username); return; }
        if(sentDoc.exists){ showRaazToast?.("Message request already sent.","info"); return; }
        await sendMessageRequest(uid,data.name,data.username);
        renderProfileViewActions(uid,data);
        showRaazToast?.("Message request sent.","success");
      } catch(e){ showRaazToast?.(e.message||"Message action failed","error"); }
    });
    if(sentDoc.exists && !chatDoc.exists){
      const cancel=document.createElement("button"); cancel.id="cancelReqBtn"; cancel.className="linkBtn"; cancel.type="button"; cancel.textContent="Cancel request";
      viewActionArea.appendChild(cancel);
      cancel.addEventListener("click",async()=>{ try{const b=db.batch();b.delete(db.collection("users").doc(myUid).collection("requestsSent").doc(uid));b.delete(db.collection("users").doc(uid).collection("requestsReceived").doc(myUid));await b.commit();renderProfileViewActions(uid,data);}catch(e){showRaazToast?.(e.message||"Request cancel failed","error");}});
    }
    if(receivedDoc.exists){
      const decline=document.createElement("button"); decline.id="declineActionBtn"; decline.className="linkBtn"; decline.type="button"; decline.textContent="Decline request"; viewActionArea.appendChild(decline);
      decline.addEventListener("click",async()=>{try{await declineRequest(uid);renderProfileViewActions(uid,data);}catch(e){showRaazToast?.(e.message||"Request decline failed","error");}});
    }
  } catch(err) {
    console.error("Profile action load", err);
    viewActionArea.innerHTML = `<p class="error">${escapeHtml(err?.message || "Action load nahi hui.")}</p>`;
  }
}

async function sendMessageRequest(toUid, toName, toUsername) {
  const myUid = auth.currentUser.uid;
  const batch = db.batch();
  const now = firebase.firestore.FieldValue.serverTimestamp();
  batch.set(db.collection("users").doc(myUid).collection("requestsSent").doc(toUid), {
    toUid, toName, toUsername, createdAt: now
  });
  batch.set(db.collection("users").doc(toUid).collection("requestsReceived").doc(myUid), {
    fromUid: myUid, fromName: currentUserName, fromUsername: currentUsername, createdAt: now
  });
  await batch.commit();
}

async function acceptRequest(fromUid, fromName, fromUsername) {
  const myUid = auth.currentUser.uid;
  const chatId = getChatId(myUid, fromUid);
  const batch = db.batch();
  const now = firebase.firestore.FieldValue.serverTimestamp();
  // V23: chatsList is the private connection record. The shared chat parent
  // is optional metadata and must never be part of request acceptance, because
  // its rules cannot safely depend on documents being created in the same batch.
  batch.delete(db.collection("users").doc(myUid).collection("requestsReceived").doc(fromUid));
  batch.delete(db.collection("users").doc(fromUid).collection("requestsSent").doc(myUid));
  batch.set(db.collection("users").doc(myUid).collection("chatsList").doc(chatId), {
    friendUid: fromUid, friendName: fromName, friendUsername: fromUsername,
    lastMessage: "", lastMessageTime: now, lastSenderUid: null, category: "primary", unreadCount: 0, myLastRead: now
  }, { merge: true });
  batch.set(db.collection("users").doc(fromUid).collection("chatsList").doc(chatId), {
    friendUid: myUid, friendName: currentUserName, friendUsername: currentUsername,
    lastMessage: "", lastMessageTime: now, lastSenderUid: null, category: "primary"
  }, { merge: true });
  await batch.commit();
}

async function declineRequest(fromUid) {
  const myUid = auth.currentUser.uid;
  const batch = db.batch();
  batch.delete(db.collection("users").doc(myUid).collection("requestsReceived").doc(fromUid));
  batch.delete(db.collection("users").doc(fromUid).collection("requestsSent").doc(myUid));
  await batch.commit();
}

profileViewBackBtn.addEventListener("click", () => {
  unattachStats(viewStatsUnsub);
  raazGoHome("feed");
});
// ================= REQUESTS SCREEN =================
requestsBtn.addEventListener("click", () => {
  loadRequestsScreen();
  showScreen(requestsScreen);
});
requestsBackBtn.addEventListener("click", () => raazGoHome("feed"));

function loadRequestsScreen() {
  const myUid = auth.currentUser.uid;
  db.collection("users").doc(myUid).collection("requestsReceived")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      requestsList.innerHTML = "";
      requestsEmpty.classList.toggle("hidden", !snapshot.empty);

      snapshot.forEach((doc) => {
        const data = doc.data();
        const item = document.createElement("div");
        item.classList.add("chatListItem");
        item.innerHTML = `
          <div class="chatListAvatar" data-avatar-uid="${data.fromUid}" data-fallback-letter="${data.fromName}">${data.fromName.charAt(0).toUpperCase()}</div>
          <div class="chatListText">
            <div class="chatListName">${data.fromName}</div>
            <div class="chatListLastMsg">@${data.fromUsername}</div>
          </div>
          <div class="requestBtns">
            <button class="reqAcceptBtn">OK</button>
            <button class="reqDeclineBtn">X</button>
          </div>
        `;
        item.querySelector(".reqAcceptBtn").addEventListener("click", async (e) => {
          e.stopPropagation();
          await acceptRequest(data.fromUid, data.fromName, data.fromUsername);
        });
        item.querySelector(".reqDeclineBtn").addEventListener("click", async (e) => {
          e.stopPropagation();
          await declineRequest(data.fromUid);
        });
        requestsList.appendChild(item);
        watchFriendAvatar(data.fromUid);
      });
    });
}

function listenForRequestsBadge() {
  const myUid = auth.currentUser.uid;
  if (unsubscribeRequestsBadge) unsubscribeRequestsBadge();

  unsubscribeRequestsBadge = db.collection("users").doc(myUid).collection("requestsReceived")
    .onSnapshot((snapshot) => {
      if (snapshot.size > 0) {
        requestsBadge.textContent = snapshot.size;
        requestsBadge.classList.remove("hidden");
      } else {
        requestsBadge.classList.add("hidden");
      }
    });
}

// ================= BLOCK / UNBLOCK =================
async function blockUser(uid, name, username) {
  const myUid = auth.currentUser.uid;
  const chatId = getChatId(myUid, uid);

  await db.collection("users").doc(myUid).collection("blocked").doc(uid).set({
    name, username, blockedAt: firebase.firestore.FieldValue.serverTimestamp()
  });

  // Security rules allow the caller to change only their own private collections.
  // The other user's chat/request documents are intentionally left to their own client/backend.
  const batch=db.batch();
  batch.delete(db.collection("users").doc(myUid).collection("chatsList").doc(chatId));
  batch.delete(db.collection("users").doc(myUid).collection("requestsSent").doc(uid));
  batch.delete(db.collection("users").doc(myUid).collection("requestsReceived").doc(uid));
  await batch.commit();
}

async function unblockUser(uid) {
  const myUid = auth.currentUser.uid;
  await db.collection("users").doc(myUid).collection("blocked").doc(uid).delete();
}

blockedListBtn?.addEventListener("click", () => {
  loadBlockedScreen();
  showScreen(blockedScreen);
});
blockedBackBtn.addEventListener("click", () => { showScreen(profileScreen); document.querySelectorAll(".raazNav").forEach(b=>b.classList.toggle("active",b.dataset.raazNav==="profile")); });

function loadBlockedScreen() {
  const myUid = auth.currentUser.uid;
  db.collection("users").doc(myUid).collection("blocked").onSnapshot((snapshot) => {
    blockedList.innerHTML = "";
    blockedEmpty.classList.toggle("hidden", !snapshot.empty);

    snapshot.forEach((doc) => {
      const data = doc.data();
      const item = document.createElement("div");
      item.classList.add("chatListItem");
      item.innerHTML = `
        <div class="chatListAvatar" data-avatar-uid="${doc.id}" data-fallback-letter="${data.name}">${data.name.charAt(0).toUpperCase()}</div>
        <div class="chatListText">
          <div class="chatListName">${data.name}</div>
          <div class="chatListLastMsg">@${data.username}</div>
        </div>
        <button class="unblockBtn">Unblock</button>
      `;
      item.querySelector(".unblockBtn").addEventListener("click", () => unblockUser(doc.id));
      blockedList.appendChild(item);
      watchFriendAvatar(doc.id);
    });
  });
}

// ================= CHAT LIST (Primary / Secondary) =================
function listenForChatList() {
  const myUid = auth.currentUser.uid;
  if (unsubscribeChatList) unsubscribeChatList();

  unsubscribeChatList = db.collection("users").doc(myUid).collection("chatsList")
    .orderBy("lastMessageTime", "desc")
    .onSnapshot((snapshot) => {
      chatListPrimary.innerHTML = "";
      chatListSecondary.innerHTML = "";

      let primaryCount = 0;
      let secondaryCount = 0;
      let totalUnreadChats = 0;
      let totalUnreadMessages = 0;

      snapshot.forEach((doc) => {
        const data = doc.data();
        const category = data.category === "secondary" ? "secondary" : "primary";

        const fallbackUnread = data.lastSenderUid && data.lastSenderUid !== myUid && data.lastMessageTime && (!data.myLastRead || data.lastMessageTime.toMillis() > data.myLastRead.toMillis()) ? 1 : 0;
        const unreadCount = Math.max(Number(data.unreadCount || 0), fallbackUnread);
        const isUnread = unreadCount > 0;
        if(isUnread){ totalUnreadChats++; totalUnreadMessages += unreadCount; }

        const item = document.createElement("div");
        item.classList.add("chatListItem");
        if (isUnread) item.classList.add("unreadItem");
        item.innerHTML = `
          <div class="chatListAvatar" data-avatar-uid="${escapeHtml(data.friendUid||"")}" data-fallback-letter="${escapeHtml(data.friendName||"User")}">${escapeHtml((data.friendName||"User").charAt(0).toUpperCase())}</div>
          <div class="chatListText">
            <div class="chatListName">${escapeHtml(data.friendName || "User")}</div>
            <div class="chatListLastMsg ${isUnread ? "unreadPreview" : ""}">${escapeHtml(data.lastMessage || "Naya connection - message bhejo!")}</div>
          </div>
          ${isUnread ? `<div class="unreadCount">${unreadCount > 99 ? "99+" : unreadCount}</div>` : ''}
          <button class="chatItemMenuBtn" type="button" aria-label="Chat options">...</button>
        `;
        item.addEventListener("click", () => openChat(data.friendUid, data.friendName, data.friendUsername));
        item.querySelector(".chatItemMenuBtn").addEventListener("click", (e) => {
          e.stopPropagation();
          openChatItemMenu(doc.id, data.friendUid, data.friendName, data.friendUsername, category);
        });

        if (category === "secondary") {
          chatListSecondary.appendChild(item);
          secondaryCount++;
        } else {
          chatListPrimary.appendChild(item);
          primaryCount++;
        }
        watchFriendAvatar(data.friendUid);
      });

      secondarySectionLabel.classList.toggle("hidden", secondaryCount === 0);
      primarySectionLabel.classList.toggle("hidden", primaryCount === 0);

      updateChatListEmptyVisibility(primaryCount + secondaryCount === 0);
      if(chatNavBadge){ chatNavBadge.textContent = totalUnreadMessages > 99 ? "99+" : String(totalUnreadMessages); chatNavBadge.classList.toggle("hidden", totalUnreadMessages === 0); }
    }, err => {
      console.error("Chat list listener", err);
      if(chatNavBadge) chatNavBadge.classList.add("hidden");
    });
}

function updateChatListEmptyVisibility(forceEmpty) {
  const isSearching = !searchResultsList.classList.contains("hidden");
  if (isSearching) {
    chatListEmpty.classList.add("hidden");
    return;
  }
  const isEmpty = forceEmpty !== undefined ? forceEmpty :
    (chatListPrimary.children.length === 0 && chatListSecondary.children.length === 0);
  chatListEmpty.classList.toggle("hidden", !isEmpty);
}

// ================= CHAT ITEM MENU (Primary/Secondary, Block, Delete) =================
function openChatItemMenu(chatId, friendUid, friendName, friendUsername, category) {
  menuTargetChatId = chatId;
  menuTargetFriendUid = friendUid;
  menuTargetFriendName = friendName;
  menuTargetFriendUsername = friendUsername;
  menuTargetCategory = category;

  moveCategoryBtn.textContent = category === "secondary" ? "Move to Primary" : "Move to Secondary";
  chatItemMenuOverlay.classList.remove("hidden");
}

closeMenuBtn.addEventListener("click", () => chatItemMenuOverlay.classList.add("hidden"));
chatItemMenuOverlay.addEventListener("click", (e) => {
  if (e.target === chatItemMenuOverlay) chatItemMenuOverlay.classList.add("hidden");
});

moveCategoryBtn.addEventListener("click", async () => {
  const myUid = auth.currentUser.uid;
  const newCategory = menuTargetCategory === "secondary" ? "primary" : "secondary";
  await db.collection("users").doc(myUid).collection("chatsList").doc(menuTargetChatId).set({
    category: newCategory
  }, { merge: true });
  chatItemMenuOverlay.classList.add("hidden");
});

blockFromMenuBtn.addEventListener("click", async () => {
  await blockUser(menuTargetFriendUid, menuTargetFriendName, menuTargetFriendUsername);
  chatItemMenuOverlay.classList.add("hidden");
});

deleteChatBtn.addEventListener("click", async () => {
  const myUid = auth.currentUser.uid;
  await db.collection("users").doc(myUid).collection("chatsList").doc(menuTargetChatId).delete();
  chatItemMenuOverlay.classList.add("hidden");
});

// ================= OPEN A CHAT =================
async function openChat(friendUid, friendName, friendUsername) {
  if (!auth.currentUser || !friendUid || friendUid === auth.currentUser.uid) return;

  // Stop previous chat listeners before switching conversations.
  try { unsubscribeMessages?.(); unsubscribeFriendStatus?.(); unsubscribeChatDoc?.(); } catch (_) {}
  if (statusRefreshInterval) clearInterval(statusRefreshInterval);
  clearTimeout(typingTimeout);
  if (typeof window.raazCloseReactionPicker === 'function') window.raazCloseReactionPicker();

  currentChatId = getChatId(auth.currentUser.uid, friendUid);
  currentFriendUid = friendUid;
  friendNameDisplay.textContent = `${friendName || 'User'} (@${friendUsername || 'user'})`;

  chatHeaderAvatar.setAttribute('data-avatar-uid', friendUid);
  chatHeaderAvatar.setAttribute('data-fallback-letter', friendName || 'User');
  chatHeaderAvatar.textContent = (friendName || 'U').charAt(0).toUpperCase();
  chatHeaderAvatar.style.backgroundImage = 'none';
  watchFriendAvatar(friendUid);

  cachedMessages = [];
  chatDocData = {};
  messagesDiv.innerHTML = '<div class="chatListEmpty chatLoadingState">Chat load ho rahi hai...</div>';
  showScreen(chatScreen);

  const myUid = auth.currentUser.uid;

  try {
    // A chat is valid only when it is present in the caller's private chat list.
    // This also repairs older chats that never received the parent document.
    const chatListRef = db.collection('users').doc(myUid).collection('chatsList').doc(currentChatId);
    const chatListSnap = await chatListRef.get();
    if (!chatListSnap.exists) {
      throw new Error('Ye chat ab available nahi hai. Pehle message request accept hone dein.');
    }

    // V23: never make the shared chat document a prerequisite for opening a chat.
    // Private chatsList membership is the authorization anchor for this UI.
    await markCurrentChatRead(true).catch(()=>{});
    listenForMessages();
    listenForFriendStatus(friendUid);
  } catch (err) {
    console.error('RAAZ chat setup', err);
    try { unsubscribeMessages?.(); unsubscribeFriendStatus?.(); unsubscribeChatDoc?.(); } catch (_) {}
    const code = err?.code || '';
    const message = code === 'permission-denied'
      ? 'Is chat ke liye access nahi mila. Firebase Rules publish karke page refresh karo.'
      : (err?.message || 'Firebase access error');
    messagesDiv.innerHTML = `<div class="chatListEmpty chatErrorState">Chat load nahi ho pa rahi.<br><small>${escapeHtml(message)}</small><button type="button" class="chatRetryBtn" id="chatRetryBtn">Try again</button></div>`;
    document.getElementById('chatRetryBtn')?.addEventListener('click', () => openChat(friendUid, friendName, friendUsername), { once: true });
    showRaazToast?.(message, 'error');
  }
}

// ================= SEEN TICKS + TYPING (chat-level doc) =================
async function markCurrentChatRead(markNotifications=false){
  if(!auth.currentUser || !currentChatId || !currentFriendUid || readMarkInFlight) return;
  readMarkInFlight=true;
  const myUid=auth.currentUser.uid, now=firebase.firestore.FieldValue.serverTimestamp();
  try{
    // Read receipts are non-critical metadata. Never write the shared chat
    // parent here; messages must remain independent of metadata permissions.
    await db.collection("users").doc(myUid).collection("chatsList").doc(currentChatId).set({myLastRead:now,unreadCount:0},{merge:true});
    if(markNotifications){
      try{
        const snap=await db.collection("users").doc(myUid).collection("notifications").where("read","==",false).limit(100).get();
        const b2=db.batch(); let count=0;
        snap.forEach(d=>{const x=d.data()||{};if(x.type==="chat_message"&&x.chatId===currentChatId){b2.set(d.ref,{read:true},{merge:true});count++;}});
        if(count) await b2.commit();
      }catch(_){}
    }
  }catch(err){ console.warn("markCurrentChatRead",err); }
  finally{ readMarkInFlight=false; }
}

function listenForChatDoc() {
  if (unsubscribeChatDoc) unsubscribeChatDoc();

  unsubscribeChatDoc = db.collection("chats").doc(currentChatId).onSnapshot((doc) => {
    chatDocData = doc.data() || {};
    renderMessagesList();
    updateTypingDisplay();
  }, (err) => { console.warn("Chat metadata listener skipped", err); });
}

function updateTypingDisplay() {
  const typingField = chatDocData[`typing_${currentFriendUid}`];
  isFriendTyping = typingField === true;

  if (isFriendTyping) {
    friendStatus.textContent = "Typing Type kar raha hai...";
    friendStatus.className = "statusText typing";
  } else {
    updateStatusText();
  }
}

// Chat header ke "..." se seedha Block/Delete kar sako
chatMenuBtn.addEventListener("click", () => {
  if (!currentChatId || !currentFriendUid) return;
  const friendName = friendNameDisplay.textContent.split(" (@")[0];
  const friendUsername = friendNameDisplay.textContent.split("(@")[1]?.replace(")", "") || "";
  const myUid = auth.currentUser?.uid;
  if (!myUid) return;
  db.collection("users").doc(myUid).collection("chatsList").doc(currentChatId).get()
    .then(snap => openChatItemMenu(currentChatId, currentFriendUid, friendName, friendUsername, snap.data()?.category === "secondary" ? "secondary" : "primary"))
    .catch(() => openChatItemMenu(currentChatId, currentFriendUid, friendName, friendUsername, "primary"));
});

// ================= ONLINE STATUS =================
function listenForFriendStatus(friendUid) {
  if (unsubscribeFriendStatus) unsubscribeFriendStatus();
  if (statusRefreshInterval) clearInterval(statusRefreshInterval);

  unsubscribeFriendStatus = db.collection("users").doc(friendUid).onSnapshot((doc) => {
    if (!doc.exists) return;
    const data = doc.data();
    lastKnownFriendSeen = data.lastSeen ? data.lastSeen.toDate() : null;
    window.friendActivityStatusEnabled = data.activityStatus !== false;
    updateStatusText();
  });

  statusRefreshInterval = setInterval(updateStatusText, 5000);
}

function updateStatusText() {
  if (isFriendTyping) return;
  if (window.friendActivityStatusEnabled === false) { friendStatus.textContent = "Activity status off"; friendStatus.className = "statusText offline"; return; }
  if (!lastKnownFriendSeen) { friendStatus.textContent = ""; return; }
  const secondsAgo = Math.max(0,Math.floor((Date.now() - lastKnownFriendSeen.getTime()) / 1000));
  if (secondsAgo < 35) {
    friendStatus.textContent = "Online";
    friendStatus.className = "statusText online";
    return;
  }
  const minsAgo = Math.floor(secondsAgo / 60);
  if (minsAgo < 1) friendStatus.textContent = "Active just now";
  else if (minsAgo < 60) friendStatus.textContent = `Active ${minsAgo}m ago`;
  else if (minsAgo < 1440) friendStatus.textContent = `Active ${Math.floor(minsAgo/60)}h ago`;
  else friendStatus.textContent = `Active ${Math.floor(minsAgo/1440)}d ago`;
  friendStatus.className = "statusText offline";
}

// ================= BACK TO HOME =================
backBtn.addEventListener("click", () => {
  if (unsubscribeMessages) unsubscribeMessages();
  if (unsubscribeFriendStatus) unsubscribeFriendStatus();
  if (unsubscribeChatDoc) unsubscribeChatDoc();
  if (statusRefreshInterval) clearInterval(statusRefreshInterval);
  if (typingTimeout) clearTimeout(typingTimeout);
  clearTypingStatus();
  currentChatId = null;
  currentFriendUid = null;
  chatDocData = {}; isFriendTyping=false; lastKnownFriendSeen=null;
  raazGoHome(lastHomeTab);
});

// ================= TYPING INDICATOR =================
function clearTypingStatus() {
  if (!currentChatId || !auth.currentUser) return Promise.resolve();
  const myUid = auth.currentUser.uid;
  return db.collection("chats").doc(currentChatId).set({[`typing_${myUid}`]:false},{merge:true}).catch(()=>{});
}

let typingWritePending = false;
msgInput.addEventListener("input", () => {
  if (!currentChatId || !auth.currentUser) return;
  const myUid = auth.currentUser.uid;
  if(!typingWritePending){
    typingWritePending=true;
    db.collection("chats").doc(currentChatId).set({[`typing_${myUid}`]:true},{merge:true})
      .catch(()=>{})
      .finally(()=>{typingWritePending=false;});
  }
  clearTimeout(typingTimeout);
  typingTimeout=setTimeout(clearTypingStatus,2200);
});
msgInput.addEventListener("blur",()=>{clearTimeout(typingTimeout);typingTimeout=setTimeout(clearTypingStatus,600);});

// ================= SEND MESSAGE =================
async function sendMessage() {
  const text = msgInput.value.trim();
  if (!text || !currentChatId || !currentFriendUid || !auth.currentUser) return;
  const myUid = auth.currentUser.uid;
  clearTimeout(typingTimeout);
  await clearTypingStatus();
  sendBtn.disabled = true;
  const reply = window.raazReplyTarget ? {
    messageId: window.raazReplyTarget.id,
    uid: window.raazReplyTarget.uid || "",
    sender: window.raazReplyTarget.sender || "User",
    text: window.raazReplyTarget.text || (window.raazReplyTarget.imageBase64 ? "Photo Photo" : "Message")
  } : null;
  try {
    await db.collection("chats").doc(currentChatId).collection("messages").add({
      text, sender: currentUserName, uid: myUid, replyTo: reply,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    await updateChatListPreview(text);
    msgInput.value = "";
    if (window.raazClearReplyComposer) window.raazClearReplyComposer();
  } catch (err) {
    showRaazToast?.(err?.message || "Message send nahi hua.", "error");
  } finally { sendBtn.disabled = false; }
}

// ================= SEND PHOTO MESSAGE =================
chatPhotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file || !currentChatId || !currentFriendUid) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      const maxWidth = 480;
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const compressedBase64 = canvas.toDataURL("image/jpeg", 0.6);

      if (compressedBase64.length > 900000) {
        alert("Ye photo bahut badi hai, chhoti photo try karo!");
        return;
      }

      const myUid = auth.currentUser.uid;
      Promise.resolve().then(async()=>{
        const reply = window.raazReplyTarget ? {
          messageId: window.raazReplyTarget.id,
          uid: window.raazReplyTarget.uid || "",
          sender: window.raazReplyTarget.sender || "User",
          text: window.raazReplyTarget.text || (window.raazReplyTarget.imageBase64 ? "Photo Photo" : "Message")
        } : null;
        await db.collection("chats").doc(currentChatId).collection("messages").add({
          imageBase64: compressedBase64, sender: currentUserName, uid: myUid, replyTo: reply,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        await updateChatListPreview("Photo Photo");
        if (window.raazClearReplyComposer) window.raazClearReplyComposer();
      }).catch(err=>showRaazToast?.(err?.message || "Photo send nahi hui.", "error"));
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
  chatPhotoInput.value = "";
});

async function updateChatListPreview(previewText) {
  const myUid = auth.currentUser.uid;
  const friendNameText = friendNameDisplay.textContent.split(" (@")[0];
  const friendUsernameText = friendNameDisplay.textContent.split("(@")[1]?.replace(")", "") || "";
  const now = firebase.firestore.FieldValue.serverTimestamp();
  const batch = db.batch();
  batch.set(db.collection("users").doc(myUid).collection("chatsList").doc(currentChatId), {
    friendUid: currentFriendUid, friendName: friendNameText, friendUsername: friendUsernameText,
    lastMessage: previewText, lastMessageTime: now, lastSenderUid: myUid, myLastRead: now
  }, { merge: true });
  batch.set(db.collection("users").doc(currentFriendUid).collection("chatsList").doc(currentChatId), {
    friendUid: myUid, friendName: currentUserName, friendUsername: currentUsername,
    lastMessage: previewText, lastMessageTime: now, lastSenderUid: myUid,
    unreadCount: firebase.firestore.FieldValue.increment(1)
  }, { merge: true });
  await batch.commit();
  if(currentFriendUid && currentFriendUid !== myUid){
    await createNotification(currentFriendUid,{type:"chat_message",fromUid:myUid,fromName:currentUserName,fromUsername:currentUsername,chatId:currentChatId,read:false});
  }
}

sendBtn.addEventListener("click", sendMessage);
msgInput.addEventListener("keypress", (e) => { if (e.key === "Enter") sendMessage(); });

// ================= LISTEN FOR MESSAGES =================
function listenForMessages() {
  if (unsubscribeMessages) unsubscribeMessages();

  unsubscribeMessages = db.collection("chats").doc(currentChatId).collection("messages")
    .orderBy("createdAt", "asc")
    .limitToLast(200)
    .onSnapshot((snapshot) => {
      cachedMessages = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
      renderMessagesList();
      const hasIncoming=cachedMessages.some(m=>m.uid!==auth.currentUser?.uid);
      if(hasIncoming){ markCurrentChatRead(true); setTimeout(()=>markCurrentChatRead(true),700); }
    },err=>{
      console.error("Messages listener",err);
      messagesDiv.innerHTML=`<div class="chatListEmpty">Messages load nahi hue.<br>${escapeHtml(err?.message||"Firebase error")}</div>`;
    });
}

function formatMsgTime(timestamp) {
  if (!timestamp) return "";
  const d = timestamp.toDate();
  let hours = d.getHours();
  const mins = d.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours}:${mins} ${ampm}`;
}

function renderMessagesList() {
  if(!auth.currentUser || !messagesDiv) return;
  const myUid = auth.currentUser.uid;
  const friendLastRead = chatDocData[`lastRead_${currentFriendUid}`];
  const previousScrollTop=messagesDiv.scrollTop, previousScrollHeight=messagesDiv.scrollHeight, clientHeight=messagesDiv.clientHeight;
  const wasNearBottom=(previousScrollHeight-previousScrollTop-clientHeight)<90;

  messagesDiv.innerHTML = "";

  cachedMessages.forEach((msg) => {
    const isMine = msg.uid === myUid;
    const msgEl = document.createElement("div");
    msgEl.classList.add("msg", isMine ? "mine" : "theirs");

    let contentHtml = "";
    if (msg.imageBase64) {
      contentHtml = `<img src="${escapeHtml(msg.imageBase64)}" class="msgImage" alt="Photo">`;
    } else {
      contentHtml = escapeHtml(msg.text || "").replace(/\n/g, "<br>");
    }

    let tickHtml = "";
    if (isMine) {
      const seen = friendLastRead && msg.createdAt && friendLastRead.toMillis() >= msg.createdAt.toMillis();
      tickHtml = `<span class="msgTick ${seen ? 'seen' : ''}">${seen ? 'OKOK' : 'OK'}</span>`;
    }

    msgEl.innerHTML = `
      ${!isMine ? `<span class="sender">${escapeHtml(msg.sender || "User")}</span>` : ""}
      ${contentHtml}
      <div class="msgMeta">${formatMsgTime(msg.createdAt)} ${tickHtml}</div>
    `;

    messagesDiv.appendChild(msgEl);
  });

  requestAnimationFrame(()=>{
    const nextHeight=messagesDiv.scrollHeight;
    if(wasNearBottom) messagesDiv.scrollTop=nextHeight;
    else messagesDiv.scrollTop=previousScrollTop;
  });
}

// ================= RAAZ V12 FEATURE SYSTEM =================
const raazBottomNav = document.getElementById("raazBottomNav");
const exploreScreen = document.getElementById("exploreScreen");
const reelsScreen = document.getElementById("reelsScreen");
const groupsScreen = document.getElementById("groupsScreen");
const notesScreen = document.getElementById("notesScreen");
const settingsScreen = document.getElementById("settingsScreen");
const exploreResults = document.getElementById("exploreResults");
const exploreSearchInput = document.getElementById("exploreSearchInput");
const reelsList = document.getElementById("reelsList");
const groupsList = document.getElementById("groupsList");
const notesList = document.getElementById("notesList");
const privateAccountToggle = document.getElementById("privateAccountToggle");
const activityStatusToggle = document.getElementById("activityStatusToggle");
const messageRequestsToggle = document.getElementById("messageRequestsToggle");
const reduceMotionToggle = document.getElementById("reduceMotionToggle");
const compactUiToggle = document.getElementById("compactUiToggle");
const autoplayReelsToggle = document.getElementById("autoplayReelsToggle");
const raazThemeSelect = document.getElementById("raazThemeSelect");
const bottomProfileAvatar = document.getElementById("bottomProfileAvatar");
const raazToast = document.getElementById("raazToast");
const raazOfflineBar = document.getElementById("raazOfflineBar");
let activeExploreFilter = "all";
let unsubscribeReels = null, unsubscribeGroups = null, unsubscribeNotes = null;

function showRaazBottomNav(show){ raazBottomNav?.classList.toggle("hidden", !show); }
function hideFeatureScreens(){ [exploreScreen,reelsScreen,groupsScreen,notesScreen,settingsScreen,gamesScreen].forEach(x=>x?.classList.add("hidden")); }
function raazGoHome(tab="feed"){
  window.raazProfileOnly = false;
  hideFeatureScreens(); showRaazBottomNav(true); showScreen(homeScreen);
  showHomeTab(tab === "chats" ? "chats" : "feed");
  document.querySelectorAll(".raazNav").forEach(b=>b.classList.toggle("active", b.dataset.raazNav===tab));
}
function raazGoFeature(screen, nav){ showScreen(screen); showRaazBottomNav(true); document.querySelectorAll(".raazNav").forEach(b=>b.classList.toggle("active", b.dataset.raazNav===nav)); }

function setActiveRaazNav(name){
  document.querySelectorAll(".raazNav").forEach(b=>b.classList.toggle("active", b.dataset.raazNav===name));
}

function raazNavigate(name){
  if (!auth.currentUser) return;
  try {
    if(name === "feed") return raazGoHome("feed");
    if(name === "chats") return raazGoHome("chats");
    if(name === "create") return openRaazCreateSheet();
    if(name === "explore"){ raazGoFeature(exploreScreen,"explore"); setActiveRaazNav("explore"); renderExplore(""); return; }
    if(name === "reels"){ raazGoFeature(reelsScreen,"reels"); setActiveRaazNav("reels"); listenForReels(); return; }
    if(name === "games"){ return openGames(); }
    if(name === "profile"){ hideFeatureScreens(); profileBtn?.click(); setActiveRaazNav("profile"); return; }
  } catch(err) {
    console.error("RAAZ navigation error", name, err);
    showRaazToast?.("Screen open nahi ho paayi. Dobara try karo.", "error");
  }
}

document.querySelectorAll(".raazNav").forEach(btn=>btn.addEventListener("click", (event)=>{
  event.preventDefault();
  raazNavigate(btn.dataset.raazNav);
}, {passive:false}));

document.getElementById("exploreBackBtn")?.addEventListener("click",()=>raazGoHome("feed"));
document.getElementById("reelsBackBtn")?.addEventListener("click",()=>raazGoHome("feed"));
document.getElementById("groupsBackBtn")?.addEventListener("click",()=>raazGoHome("feed"));
document.getElementById("notesBackBtn")?.addEventListener("click",()=>raazGoHome("feed"));
document.getElementById("settingsBackBtn")?.addEventListener("click",()=>raazGoHome("feed"));

async function renderExplore(term){
  const q=(term||exploreSearchInput?.value||"").trim().toLowerCase();
  if(!exploreResults)return;
  exploreResults.innerHTML="<div class='featureEmpty'>Searching...</div>";
  try{
    let html="";
    if(activeExploreFilter!=="posts" && activeExploreFilter!=="hashtags"){
      let snap;
      try { snap=await db.collection("users").orderBy("username").limit(100).get(); }
      catch(_) { snap=await db.collection("users").limit(100).get(); }
      const users=snap.docs.map(d=>({uid:d.id,...d.data()})).sort((a,b)=>String(a.username||"").localeCompare(String(b.username||""))).filter(u=>!q || (u.username||"").toLowerCase().includes(q)||(u.name||"").toLowerCase().includes(q));
      users.slice(0,30).forEach(u=>{ const av=u.photoBase64?`style="background-image:url(${u.photoBase64})"`:""; html+=`<div class="exploreUser"><div class="exploreAvatar" ${av}>${u.photoBase64?"":escapeHtml((u.name||"R")[0])}</div><div class="exploreUserInfo"><strong>${escapeHtml(u.name||"User")}</strong><small>@${escapeHtml(u.username||"user")}</small></div><button class="exploreOpen" data-uid="${u.uid}">Open</button></div>`; });
    }
    if(activeExploreFilter!=="people"){
      let postSnap;
      try { postSnap=await db.collection("posts").orderBy("createdAt","desc").limit(50).get(); }
      catch(_) { postSnap=await db.collection("posts").limit(50).get(); }
      const posts=postSnap.docs.map(d=>({id:d.id,data:d.data()||{}})).sort((a,b)=>(b.data.createdAt?.toMillis?.()||0)-(a.data.createdAt?.toMillis?.()||0));
      const matching=posts.filter(p=>{const d=p.data;return !q || (d.caption||"").toLowerCase().includes(q) || (d.username||"").toLowerCase().includes(q);});
      matching.slice(0,20).forEach(p=>{html+=`<button class="groupCard explorePostJump" data-post-id="${p.id}"><div class="groupIcon">Posts</div><div><strong>@${escapeHtml(p.data.username||"user")}</strong><small>${escapeHtml((p.data.caption||"Post").slice(0,100))}</small></div><span>></span></button>`;});
      if(activeExploreFilter==="hashtags" || q.startsWith("#")){
        const tags=new Set(); posts.forEach(p=>{(p.data.caption||"").match(/#[\p{L}\p{N}_]+/gu)?.forEach(t=>tags.add(t.toLowerCase()));});
        html += [...tags].filter(t=>!q||t.includes(q.replace(/^#/,""))).slice(0,30).map(t=>`<button class="groupCard hashtagJump"><div class="groupIcon">#</div><div><strong>${escapeHtml(t)}</strong><small>Explore hashtag</small></div><span>></span></button>`).join("");
      }
    }
    exploreResults.innerHTML=html||`<div class="featureEmpty"><div>Search</div><h3>Kuch nahi mila</h3><p>Search term change karke try karo.</p></div>`;
    exploreResults.querySelectorAll(".exploreOpen").forEach(b=>b.addEventListener("click",async()=>{const d=await db.collection("users").doc(b.dataset.uid).get();if(d.exists)openProfileView(b.dataset.uid,d.data());}));
    exploreResults.querySelectorAll(".explorePostJump").forEach(b=>b.addEventListener("click",()=>{raazGoHome("feed"); setTimeout(()=>document.querySelector(`[data-post-id="${b.dataset.postId}"]`)?.scrollIntoView({behavior:"smooth",block:"center"}),150);}));
    exploreResults.querySelectorAll(".hashtagJump").forEach(b=>b.addEventListener("click",()=>{const tag=b.querySelector("strong")?.textContent||"";activeExploreFilter="posts";if(exploreSearchInput)exploreSearchInput.value=tag;document.querySelectorAll(".exploreChip").forEach(x=>x.classList.toggle("active",x.dataset.exploreFilter==="posts"));renderExplore(tag);}));
  }catch(e){exploreResults.innerHTML=`<div class="featureEmpty"><h3>Explore ready</h3><p>${escapeHtml(e.code||e.message||"Search unavailable")}</p></div>`;}
}
document.getElementById("exploreSearchBtn")?.addEventListener("click",()=>renderExplore());
exploreSearchInput?.addEventListener("keydown",e=>{if(e.key==="Enter")renderExplore();});
document.querySelectorAll(".exploreChip").forEach(b=>b.addEventListener("click",()=>{activeExploreFilter=b.dataset.exploreFilter;document.querySelectorAll(".exploreChip").forEach(x=>x.classList.toggle("active",x===b));renderExplore();}));

function listenForReels(){
  if(unsubscribeReels) unsubscribeReels();
  if(!reelsList) return;
  reelsList.innerHTML="<div class='featureEmpty'>Reels load ho rahi hain...</div>";
  const renderSnap = async (snap) => {
    reelsList.innerHTML="";
    document.getElementById("reelsEmpty")?.classList.add("hidden");
    for(const doc of snap.docs){
      const d=doc.data();
      const c=document.createElement("article");
      c.className="reelCard";
      c.dataset.reelId=doc.id;
      const media=d.videoUrl||d.videoBase64||"";
      c.innerHTML=`
        <video src="${escapeHtml(media)}" class="reelVideo" playsinline controls loop muted preload="metadata"></video>
        <div class="reelOverlay"><strong>@${escapeHtml(d.username||"user")}</strong><small>${escapeHtml(d.caption||"")}</small></div>
        <div class="reelActions">
          <button class="reelLike" type="button">Like <span>${Number(d.likeCount||0)}</span></button>
          <button class="reelComment" type="button">Chat <span>${Number(d.commentCount||0)}</span></button>
          <button class="reelShare" type="button">Share</button>
        </div>`;
      c.querySelector(".reelLike").onclick=()=>toggleReelLike(doc.id,d,c);
      c.querySelector(".reelComment").onclick=()=>openReelComments(doc.id,d);
      c.querySelector(".reelShare").onclick=()=>sharePost(doc.id,d);
      reelsList.appendChild(c);
      hydrateReelCounts(doc.id,c);
    }
    setupReelAutoplay();
  };
  try {
    unsubscribeReels=db.collection("reels").limit(50).onSnapshot(snap=>{
      const docs=snap.docs.slice().sort((a,b)=>{const ta=a.data().createdAt?.toMillis?.()||0,tb=b.data().createdAt?.toMillis?.()||0;return tb-ta;});
      renderSnap({empty:docs.length===0,docs});
    },e=>{
      console.error("RAAZ reels listener",e);
      reelsList.innerHTML=`<div class="featureEmpty"><h3>Reels unavailable</h3><p>${escapeHtml(e.code||e.message||"Reels load nahi hui")}</p><button type="button" class="primaryAction" id="retryReelsV23">Try again</button></div>`;
      document.getElementById("retryReelsV23")?.addEventListener("click",()=>listenForReels(),{once:true});
    });
  } catch(e) {
    reelsList.innerHTML=`<div class="featureEmpty"><h3>Reels unavailable</h3><p>${escapeHtml(e.code||e.message||"Reels load nahi hui")}</p></div>`;
  }
}

async function hydrateReelCounts(id,c){
  if(!auth.currentUser||!c) return;
  try{
    const [mine,allLikes,allComments]=await Promise.all([
      db.collection("reels").doc(id).collection("likes").doc(auth.currentUser.uid).get(),
      db.collection("reels").doc(id).collection("likes").get(),
      db.collection("reels").doc(id).collection("comments").get()
    ]);
    c.querySelector(".reelLike")?.classList.toggle("liked",mine.exists);
    const likeCount=c.querySelector(".reelLike span"), commentCount=c.querySelector(".reelComment span");
    if(likeCount) likeCount.textContent=String(allLikes.size);
    if(commentCount) commentCount.textContent=String(allComments.size);
  }catch(e){}
}

async function toggleReelLike(id,d,c){
  const uid=auth.currentUser?.uid; if(!uid||!c)return;
  const likeRef=db.collection("reels").doc(id).collection("likes").doc(uid);
  try{
    const snap=await likeRef.get();
    if(snap.exists) await likeRef.delete();
    else await likeRef.set({uid,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    const [mine,allLikes]=await Promise.all([likeRef.get(),db.collection("reels").doc(id).collection("likes").get()]);
    c.querySelector(".reelLike")?.classList.toggle("liked",mine.exists);
    const countEl=c.querySelector(".reelLike span"); if(countEl) countEl.textContent=String(allLikes.size);
    if(!snap.exists && d.uid && d.uid!==uid) await createNotification(d.uid,{type:"reel_like",fromUid:uid,fromName:currentUserName,fromUsername:currentUsername,reelId:id,read:false});
  }catch(e){ showRaazToast?.(e.message||"Reel like failed","error"); }
}

function openReelComments(id,d){
  const overlay=document.getElementById("reelCommentsOverlay");
  const list=document.getElementById("reelCommentsList");
  const input=document.getElementById("reelCommentInput");
  const postId=document.getElementById("reelCommentPostId");
  if(!overlay||!list||!postId)return;
  postId.textContent=id;
  postId.dataset.id=id;
  postId.dataset.owner=d.uid||"";
  overlay.classList.remove("hidden");
  list.innerHTML="<div class='featureEmpty'>Comments load ho rahe hain...</div>";
  db.collection("reels").doc(id).collection("comments").orderBy("createdAt","asc").limit(100).get().then(snap=>{
    list.innerHTML="";
    if(snap.empty){list.innerHTML="<div class='featureEmpty'>Abhi koi comment nahi hai.</div>";return;}
    snap.forEach(doc=>{
      const c=doc.data();
      const row=document.createElement("div");
      row.className="reelCommentRow";
      row.innerHTML=`<strong>@${escapeHtml(c.username||"user")}</strong><p>${escapeHtml(c.text||"")}</p><small>${formatRelativeTime(c.createdAt)}</small>`;
      list.appendChild(row);
    });
    list.scrollTop=list.scrollHeight;
  }).catch(e=>{list.innerHTML=`<div class='featureEmpty'>${escapeHtml(e.code||e.message||"Comments unavailable")}</div>`;});
  input?.focus();
}

document.getElementById("closeReelCommentsBtn")?.addEventListener("click",()=>document.getElementById("reelCommentsOverlay")?.classList.add("hidden"));
document.getElementById("sendReelCommentBtn")?.addEventListener("click",sendReelComment);
document.getElementById("reelCommentInput")?.addEventListener("keydown",e=>{if(e.key==="Enter")sendReelComment();});

async function sendReelComment(){
  const input=document.getElementById("reelCommentInput");
  const holder=document.getElementById("reelCommentPostId");
  const id=holder?.dataset.id;
  const text=input?.value.trim();
  if(!id||!text||!auth.currentUser)return;
  const reelRef=db.collection("reels").doc(id);
  try{
    await reelRef.collection("comments").add({uid:auth.currentUser.uid,name:currentUserName,username:currentUsername,text,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    if(holder.dataset.owner && holder.dataset.owner!==auth.currentUser.uid){
      await db.collection("users").doc(holder.dataset.owner).collection("notifications").add({type:"reel_comment",fromUid:auth.currentUser.uid,fromName:currentUserName,fromUsername:currentUsername,reelId:id,text,read:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    }
    input.value="";
    const d=(await reelRef.get()).data()||{};
    const card=document.querySelector(`#reelsList .reelCard[data-reel-id="${CSS.escape(id)}"]`);
    if(card){ const count=await reelRef.collection("comments").get(); const el=card.querySelector(".reelComment span"); if(el)el.textContent=String(count.size); }
    openReelComments(id,d);
  }catch(e){alert(e.message||"Comment failed");}
}

document.getElementById("createReelBtn")?.addEventListener("click",()=>document.getElementById("createReelOverlay")?.classList.remove("hidden"));
document.getElementById("closeCreateReelBtn")?.addEventListener("click",()=>document.getElementById("createReelOverlay")?.classList.add("hidden"));
document.getElementById("reelVideoInput")?.addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;const url=URL.createObjectURL(f);const box=document.getElementById("reelVideoPreview");box.innerHTML=`<video src="${url}" controls playsinline style="width:100%;max-height:360px;border-radius:14px"></video>`;box.classList.remove("hidden");});
async function compressReelForFirestore(file, progressEl){
  const MAX_BYTES = 650 * 1024; // Firestore 1 MiB document limit; leave room for metadata.
  if(file.size <= MAX_BYTES) return await fileToDataUrl(file);
  if(!window.MediaRecorder) throw new Error("Is browser me video compression supported nahi hai. Chhota video select karo.");
  const src = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.muted = true; video.playsInline = true; video.src = src;
  await new Promise((resolve,reject)=>{ video.onloadedmetadata=resolve; video.onerror=()=>reject(new Error("Video read nahi ho payi.")); });
  if(!isFinite(video.duration) || video.duration <= 0){ URL.revokeObjectURL(src); throw new Error("Video duration read nahi ho payi."); }
  if(video.duration > 20){ URL.revokeObjectURL(src); throw new Error("Demo Reel maximum 20 seconds rakho."); }
  const scale = Math.min(1, 480 / Math.max(video.videoWidth||480, video.videoHeight||480));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(240, Math.round((video.videoWidth||480)*scale));
  canvas.height = Math.max(240, Math.round((video.videoHeight||480)*scale));
  const ctx = canvas.getContext("2d");
  const stream = canvas.captureStream(24);
  let recorder;
  try { recorder = new MediaRecorder(stream,{mimeType:"video/webm;codecs=vp8",videoBitsPerSecond:240000}); }
  catch(e){ recorder = new MediaRecorder(stream,{videoBitsPerSecond:220000}); }
  const chunks=[];
  recorder.ondataavailable=e=>{if(e.data&&e.data.size)chunks.push(e.data);};
  const stopped = new Promise((resolve,reject)=>{recorder.onstop=resolve;recorder.onerror=()=>reject(new Error("Video compression fail ho gayi."));});
  recorder.start(250);
  const started=performance.now();
  video.currentTime=0;
  await video.play();
  await new Promise(resolve=>{
    const draw=()=>{
      if(video.paused || video.ended || video.currentTime>=video.duration){resolve();return;}
      ctx.drawImage(video,0,0,canvas.width,canvas.height);
      if(progressEl) progressEl.textContent=`Video compress ho raha hai... ${Math.min(99,Math.round((video.currentTime/video.duration)*100))}%`;
      requestAnimationFrame(draw);
    }; draw();
  });
  try{video.pause();}catch{}
  if(recorder.state!=="inactive") recorder.stop();
  await stopped;
  URL.revokeObjectURL(src);
  const blob=new Blob(chunks,{type:"video/webm"});
  if(blob.size>MAX_BYTES) throw new Error("Video abhi bhi bada hai. 15-20 sec ka short video select karo.");
  return await fileToDataUrl(blob);
}
function fileToDataUrl(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(new Error("Video read nahi ho payi."));r.readAsDataURL(file);});}

document.getElementById("publishReelBtn")?.addEventListener("click",async()=>{
  const f=document.getElementById("reelVideoInput")?.files[0],cap=document.getElementById("reelCaptionInput")?.value.trim(),err=document.getElementById("reelError"),btn=document.getElementById("publishReelBtn");
  if(!f){err.textContent="Video select karo.";return;}
  if(f.size>8*1024*1024){err.textContent="Original video 8MB se kam rakho.";return;}
  btn.disabled=true; err.textContent="Video prepare ho rahi hai...";
  try{
    const videoData=await compressReelForFirestore(f,err);
    await db.collection("reels").add({uid:auth.currentUser.uid,name:currentUserName,username:currentUsername,caption:cap,videoBase64:videoData,likeCount:0,commentCount:0,viewCount:0,shareCount:0,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    document.getElementById("createReelOverlay").classList.add("hidden");
    document.getElementById("reelVideoInput").value="";
    document.getElementById("reelVideoPreview").innerHTML="";
    err.textContent="";
    listenForReels();
    showRaazToast?.("Reel publish ho gayi.","success");
  }catch(e){err.textContent=e?.message||"Reel publish nahi hui.";}
  finally{btn.disabled=false;}
});

async function listenForGroups(){
  if(unsubscribeGroups)unsubscribeGroups();
  unsubscribeGroups=db.collection("groups").orderBy("createdAt","desc").limit(50).onSnapshot(s=>{
    groupsList.innerHTML="";
    document.getElementById("groupsEmpty")?.classList.toggle("hidden",!s.empty);
    s.forEach(doc=>{const d=doc.data(),c=document.createElement("div");c.className="groupCard";c.innerHTML=`<div class="groupIcon">${d.type==="channel"?"Channel":"Group"}</div><div><strong>${escapeHtml(d.name||"Community")}</strong><small>${escapeHtml(d.bio||"")}</small></div><button class="exploreOpen">${d.type==="channel"?"View":"Join"}</button>`;c.querySelector("button").onclick=()=>joinGroup(doc.id,d);groupsList.appendChild(c);});
  },err=>{
    console.error("Communities listener",err);
    if(groupsList)groupsList.innerHTML=`<div class="featureEmpty"><h3>Communities load nahi hui</h3><p>${escapeHtml(v15Message(err,"Firebase error"))}</p></div>`;
  });
}
async function joinGroup(id,d){try{await db.collection("groups").doc(id).collection("members").doc(auth.currentUser.uid).set({uid:auth.currentUser.uid,name:currentUserName,username:currentUsername,joinedAt:firebase.firestore.FieldValue.serverTimestamp()},{merge:true});alert(`${d.name||"Community"} me join ho gaye.`);}catch(e){alert(e.message||"Join failed");}}
document.getElementById("createGroupBtn")?.addEventListener("click",()=>document.getElementById("createGroupOverlay")?.classList.remove("hidden"));
document.getElementById("closeCreateGroupBtn")?.addEventListener("click",()=>document.getElementById("createGroupOverlay")?.classList.add("hidden"));
document.getElementById("publishGroupBtn")?.addEventListener("click",async()=>{const name=document.getElementById("groupNameInput").value.trim(),bio=document.getElementById("groupBioInput").value.trim(),type=document.getElementById("groupTypeChannel").classList.contains("active")?"channel":"group",err=document.getElementById("groupError");if(!name){err.textContent="Name likho.";return;}try{const ref=db.collection("groups").doc();const now=firebase.firestore.FieldValue.serverTimestamp();const batch=db.batch();batch.set(ref,{name,bio,type,ownerUid:auth.currentUser.uid,ownerName:currentUserName,createdAt:now});batch.set(ref.collection("members").doc(auth.currentUser.uid),{uid:auth.currentUser.uid,role:"owner",joinedAt:now});await batch.commit();document.getElementById("createGroupOverlay").classList.add("hidden");document.getElementById("groupNameInput").value="";document.getElementById("groupBioInput").value="";err.textContent="";listenForGroups();showRaazToast?.("Community create ho gayi.","success");}catch(e){err.textContent=e.message||"Create nahi hua.";}});
document.getElementById("groupTypeGroup")?.addEventListener("click",()=>{document.getElementById("groupTypeGroup").classList.add("active");document.getElementById("groupTypeChannel").classList.remove("active")});document.getElementById("groupTypeChannel")?.addEventListener("click",()=>{document.getElementById("groupTypeChannel").classList.add("active");document.getElementById("groupTypeGroup").classList.remove("active")});

async function listenForNotes(){
  if(unsubscribeNotes)unsubscribeNotes();
  unsubscribeNotes=db.collection("notes").orderBy("createdAt","desc").limit(50).onSnapshot(s=>{
    notesList.innerHTML="";
    s.forEach(doc=>{const d=doc.data(),c=document.createElement("div");c.className="noteCard";c.innerHTML=`<strong>${escapeHtml(d.name||"User")} <small>@${escapeHtml(d.username||"user")}</small></strong><div>${escapeHtml(d.text||"")}</div><small>${formatPostTime(d.createdAt)}</small>`;notesList.appendChild(c);});
  },err=>{
    console.error("Notes listener",err);
    if(notesList)notesList.innerHTML=`<div class="featureEmpty"><h3>Notes load nahi hui</h3><p>${escapeHtml(v15Message(err,"Firebase error"))}</p></div>`;
  });
}
document.getElementById("publishNoteBtn")?.addEventListener("click",async()=>{const text=document.getElementById("noteInput").value.trim();if(!text)return;try{await db.collection("notes").add({uid:auth.currentUser.uid,name:currentUserName,username:currentUsername,text,createdAt:firebase.firestore.FieldValue.serverTimestamp(),expiresAt:firebase.firestore.Timestamp.fromDate(new Date(Date.now()+86400000))});document.getElementById("noteInput").value="";}catch(e){alert(e.message||"Note share nahi hui.");}});

function loadRaazSettings(){
  const p=localStorage.getItem("raaz.privateAccount")==="1",a=localStorage.getItem("raaz.activity")!=="0",m=localStorage.getItem("raaz.requests")!=="0",r=localStorage.getItem("raaz.reduceMotion")==="1",c=localStorage.getItem("raaz.compactUi")==="1",ap=localStorage.getItem("raaz.autoplayReels")!=="0",theme=localStorage.getItem("raaz.theme")||"midnight";
  if(privateAccountToggle)privateAccountToggle.checked=p;if(activityStatusToggle)activityStatusToggle.checked=a;if(messageRequestsToggle)messageRequestsToggle.checked=m;if(reduceMotionToggle)reduceMotionToggle.checked=r;if(compactUiToggle)compactUiToggle.checked=c;if(autoplayReelsToggle)autoplayReelsToggle.checked=ap;if(raazThemeSelect)raazThemeSelect.value=theme;
  document.documentElement.classList.toggle("reduceMotion",r);document.documentElement.classList.toggle("compactUi",c);document.documentElement.dataset.raazTheme=theme;
}
[[privateAccountToggle,"raaz.privateAccount"],[activityStatusToggle,"raaz.activity"],[messageRequestsToggle,"raaz.requests"],[reduceMotionToggle,"raaz.reduceMotion"],[compactUiToggle,"raaz.compactUi"],[autoplayReelsToggle,"raaz.autoplayReels"]].forEach(([el,key])=>el?.addEventListener("change",async()=>{
  localStorage.setItem(key,el.checked?"1":"0");
  if(key==="raaz.reduceMotion")document.documentElement.classList.toggle("reduceMotion",el.checked);
  if(key==="raaz.compactUi")document.documentElement.classList.toggle("compactUi",el.checked);
  if(key==="raaz.autoplayReels")setupReelAutoplay();
  if(key==="raaz.activity" && auth.currentUser){
    try{await db.collection("users").doc(auth.currentUser.uid).set({activityStatus:el.checked},{merge:true});}catch(_){}
    if(el.checked) startHeartbeat(); else stopHeartbeat();
  }
  showRaazToast?.("Setting save ho gayi.","success");
}));
loadRaazSettings();
function renderSettingsQr(){
  const box=document.getElementById('settingsQrBox');
  if(!box) return;
  box.innerHTML='';
  const uid=auth.currentUser?.uid;
  if(!uid){box.textContent='Login required';return;}
  const url=`${location.href.split('#')[0]}#profile-${uid}`;
  if(typeof QRCode==='function') new QRCode(box,{text:url,width:180,height:180,colorDark:'#111111',colorLight:'#ffffff'});
  else box.textContent='QR unavailable';
}
document.getElementById('openSettingsQrBtn')?.addEventListener('click',renderSettingsQr);
raazThemeSelect?.addEventListener("change",()=>{const v=raazThemeSelect.value||"midnight";localStorage.setItem("raaz.theme",v);document.documentElement.dataset.raazTheme=v;showRaazToast("Theme updated","success");});
document.getElementById("openMyProfileFromSettings")?.addEventListener("click",()=>profileBtn?.click());
document.getElementById("openBlockedFromSettings")?.addEventListener("click",()=>{ loadBlockedScreen(); showScreen(blockedScreen); document.querySelectorAll(".raazNav").forEach(b=>b.classList.toggle("active",b.dataset.raazNav==="profile")); });
document.getElementById("clearSearchHistoryBtn")?.addEventListener("click",()=>{localStorage.removeItem("raaz.searchHistory");alert("Search history clear ho gayi.");});

// ================= RAAZ V13 PROFESSIONAL UX SYSTEM =================
// One source of truth for creation actions; prevents duplicate/competing entry points.
const createActionOverlay = document.getElementById("createActionOverlay");
const createActionPost = document.getElementById("createActionPost");
const createActionStory = document.getElementById("createActionStory");
const createActionReel = document.getElementById("createActionReel");
const createActionNote = document.getElementById("createActionNote");
const closeCreateActionBtn = document.getElementById("closeCreateActionBtn");
function openRaazCreateSheet(){
  createActionOverlay?.classList.remove("hidden");
}
function closeRaazCreateSheet(){
  createActionOverlay?.classList.add("hidden");
}
function openCreatePostProfessional(){ closeRaazCreateSheet(); openCreatePostBtn?.click(); }
function openCreateStoryProfessional(){ closeRaazCreateSheet(); openCreateStoryBtn?.click(); }
function openCreateReelProfessional(){ closeRaazCreateSheet(); document.getElementById("createReelOverlay")?.classList.remove("hidden"); }
function openCreateNoteProfessional(){ closeRaazCreateSheet(); raazGoFeature(notesScreen,"create"); document.getElementById("noteInput")?.focus(); }

createActionPost?.addEventListener("click", openCreatePostProfessional);
createActionStory?.addEventListener("click", openCreateStoryProfessional);
createActionReel?.addEventListener("click", openCreateReelProfessional);
createActionNote?.addEventListener("click", openCreateNoteProfessional);
closeCreateActionBtn?.addEventListener("click", closeRaazCreateSheet);
createActionOverlay?.addEventListener("click", e=>{ if(e.target===createActionOverlay) closeRaazCreateSheet(); });

// Keep the old hidden compatibility buttons functional, but never show them as duplicate UI.
profileBtn?.classList.add("hidden");
logoutBtnHome?.classList.add("hidden");


// Profile shortcut: only My Posts / Saved / Edit Profile. Communities, Notes and Settings live elsewhere.
document.getElementById("profileSavedBtn")?.addEventListener("click",()=>{
  window.raazProfileOnly=false;
  raazGoHome("feed");
  setTimeout(()=>document.querySelector('.feedFilter[data-feed-filter="saved"]')?.click(),50);
});

// Avoid scroll bleed when any modal/sheet is open.
function updateBodyOverlayLock(){
  const open=[createActionOverlay,createPostOverlay,createStoryOverlay,storyViewerOverlay,storyViewersOverlay,notificationsOverlay,document.getElementById("createReelOverlay"),document.getElementById("createGroupOverlay"),document.getElementById("reelCommentsOverlay"),document.getElementById("raazMoreOverlay"),chatItemMenuOverlay].some(el=>el&&!el.classList.contains("hidden"));
  document.body.classList.toggle("overlayOpen",open);
}
new MutationObserver(updateBodyOverlayLock).observe(document.body,{subtree:true,attributes:true,attributeFilter:["class"]});
updateBodyOverlayLock();

// Quick access to community/settings without changing existing chat architecture.
window.openRaazGroups=()=>{raazGoFeature(groupsScreen,"more");listenForGroups();};
window.openRaazNotes=()=>{raazGoFeature(notesScreen,"more");listenForNotes();};
window.openRaazSettings=()=>{raazGoFeature(settingsScreen,"more");loadRaazSettings();};
document.getElementById("createReelOverlay")?.addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.classList.add("hidden")});
document.getElementById("createGroupOverlay")?.addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.classList.add("hidden")});
document.getElementById("reelCommentsOverlay")?.addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.classList.add("hidden")});
document.getElementById("raazMoreOverlay")?.addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.classList.add("hidden")});
document.getElementById("openMoreBtn")?.addEventListener("click",()=>document.getElementById("raazMoreOverlay")?.classList.remove("hidden"));
document.getElementById("moreLogoutBtn")?.addEventListener("click",()=>{document.getElementById("raazMoreOverlay")?.classList.add("hidden");doLogout();});
document.getElementById("settingsLogoutBtn")?.addEventListener("click",()=>{if(confirm("RAAZ se logout karna hai?"))doLogout();});
document.getElementById("openGroupsBtn")?.addEventListener("click",()=>{document.getElementById("raazMoreOverlay").classList.add("hidden");openRaazGroups();});document.getElementById("openNotesBtn")?.addEventListener("click",()=>{document.getElementById("raazMoreOverlay").classList.add("hidden");openRaazNotes();});document.getElementById("openSettingsBtn")?.addEventListener("click",()=>{document.getElementById("raazMoreOverlay").classList.add("hidden");openRaazSettings();});document.getElementById("closeMoreBtn")?.addEventListener("click",()=>document.getElementById("raazMoreOverlay").classList.add("hidden"));

// Repost support on current post cards.
async function repostPost(postId,data){
  const uid=auth.currentUser?.uid;
  if(!uid)return;
  if(data.uid===uid){showRaazToast?.("Apni post ko repost karne ki zarurat nahi hai.","error");return;}
  const ref=db.collection("reposts").doc(`${uid}_${postId}`);
  try{
    const existing=await ref.get();
    if(existing.exists){showRaazToast?.("Ye post pehle se repost hai.","error");return;}
    await ref.set({uid,postId,originalUid:data.uid,originalUsername:data.username||"user",createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    await db.collection("users").doc(data.uid).collection("notifications").add({type:"repost",fromUid:uid,fromName:currentUserName,fromUsername:currentUsername,postId,read:false,createdAt:firebase.firestore.FieldValue.serverTimestamp()});
    showRaazToast?.("Post repost ho gayi.","success");
  }catch(e){showRaazToast?.(e.message||"Repost failed","error");}
}
window.repostPost=repostPost;


document.getElementById("profileEditActionBtn")?.addEventListener("click",()=>{
  document.getElementById("editUsernameBox")?.classList.remove("hidden");
  document.getElementById("editBioBox")?.classList.remove("hidden");
  document.getElementById("newUsernameInput")?.focus();
});
document.getElementById("profilePostsBtn")?.addEventListener("click",async()=>{
  if(!auth.currentUser)return;
  raazGoHome("feed");
  window.raazProfileOnly=true;
  activeFeedFilter="all";
  feedFilters.forEach(b=>b.classList.toggle("active",b.dataset.feedFilter==="all"));
  feedList.innerHTML='<div class="feedLoading">Tumhari posts load ho rahi hain...</div>';
  try{
    const snap=await db.collection("posts").where("uid","==",auth.currentUser.uid).limit(100).get();
    profilePostCache=snap.docs.map(doc=>({id:doc.id,data:doc.data()})).sort((a,b)=>{
      const at=a.data.createdAt?.toMillis?.()||0, bt=b.data.createdAt?.toMillis?.()||0; return bt-at;
    });
    renderFeedFromCache();
  }catch(err){
    feedList.innerHTML=`<div class="feedEmpty feedErrorState"><div class="feedEmptyIcon">Retry</div><h3>My Posts load nahi hui</h3><p>${escapeHtml(err?.message||"Firebase error")}</p><button class="primaryAction myPostsRetry">Try again</button></div>`;
    feedList.querySelector('.myPostsRetry')?.addEventListener('click',()=>document.getElementById('profilePostsBtn')?.click());
  }
});


// ================= RAAZ V13 PROFESSIONAL UX HELPERS =================
let raazToastTimer = null;
function showRaazToast(message, type="") {
  if (!raazToast) return;
  raazToast.textContent = message || "Done";
  raazToast.className = `raazToast show ${type}`.trim();
  clearTimeout(raazToastTimer);
  raazToastTimer = setTimeout(() => raazToast.className = "raazToast", 2400);
}
window.showRaazToast = showRaazToast;

function syncBottomProfileAvatar() {
  if (!bottomProfileAvatar) return;
  if (currentPhotoBase64) {
    bottomProfileAvatar.style.backgroundImage = `url(${currentPhotoBase64})`;
    bottomProfileAvatar.textContent = "";
  } else {
    bottomProfileAvatar.style.backgroundImage = "none";
    bottomProfileAvatar.textContent = (currentUserName || "R").charAt(0).toUpperCase();
  }
}

window.addEventListener("online", () => { raazOfflineBar?.classList.add("hidden"); showRaazToast("Internet connected", "success"); });
window.addEventListener("offline", () => { raazOfflineBar?.classList.remove("hidden"); showRaazToast("You are offline", "error"); });
if (!navigator.onLine) raazOfflineBar?.classList.remove("hidden");

function setupReelAutoplay() {
  const videos = [...document.querySelectorAll("#reelsList .reelVideo")];
  if (!videos.length) return;
  videos.forEach(v => { v.muted = true; v.playsInline = true; });
  if (!("IntersectionObserver" in window)) return;
  if (window.raazReelObserver) window.raazReelObserver.disconnect();
  const enabled = localStorage.getItem("raaz.autoplayReels") !== "0";
  window.raazReelObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const v = entry.target;
      if (enabled && entry.isIntersecting && entry.intersectionRatio >= .72) {
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { threshold:[.25,.72,.9] });
  videos.forEach(v => window.raazReelObserver.observe(v));
}

// Keep the current user's avatar in the single Profile destination.
const _oldRenderComposerIdentity = window.renderComposerIdentity;
window.addEventListener("load", () => { setTimeout(syncBottomProfileAvatar, 400); });

// Patch the existing profile renderer without changing its data architecture.
if (typeof renderProfileAvatar === "function") {
  const _renderProfileAvatarV13 = renderProfileAvatar;
  window.renderProfileAvatar = function(){ _renderProfileAvatarV13(); syncBottomProfileAvatar(); };
}

// Improve navigation semantics: tapping Home always returns to the feed, not a stale profile-only view.
document.querySelector('[data-raaz-nav="feed"]')?.addEventListener("click",()=>{window.raazProfileOnly=false;});


// ================= RAAZ V14 INTERACTION / STABILITY LAYER =================
// Prevent one broken optional element from stopping the rest of the interface.
(function installRaazInteractionGuard(){
  document.querySelectorAll("button").forEach(btn => {
    if (!btn.getAttribute("type")) btn.setAttribute("type", "button");
    btn.style.touchAction = "manipulation";
  });

  window.addEventListener("error", (event) => {
    console.error("RAAZ runtime error:", event.error || event.message);
    if (typeof showRaazToast === "function") showRaazToast("Kuch issue hua. Screen refresh karke try karo.", "error");
  });

  window.addEventListener("unhandledrejection", (event) => {
    console.error("RAAZ async error:", event.reason);
    if (typeof showRaazToast === "function") showRaazToast("Action complete nahi ho paaya. Dobara try karo.", "error");
  });

  // Close sheets with Android back button when possible.
  /* legacy popstate router removed by V18 */
})();


// ================= RAAZ V15 - FINAL FUNCTIONAL STABILITY LAYER =================
// Goal: existing architecture ko preserve karte hue every user action ko resilient banana.
(function installRaazV15Stability(){
  const qs = (s) => document.querySelector(s);
  const byId = (id) => document.getElementById(id);

  function v15Message(err, fallback){
    const code = err?.code || "";
    if (code === "permission-denied") return "Firebase access permission abhi enable nahi hai.";
    if (code === "failed-precondition") return "Firebase configuration/index check karna hoga.";
    if (code === "unavailable") return "Internet/Firebase temporarily unavailable hai.";
    if (code === "unauthenticated") return "Session expire ho gaya. Dobara login karo.";
    return err?.message || fallback;
  }
  window.raazV15ErrorMessage = v15Message;

  async function safeAction(action, fallback="Action complete nahi hua.", success=""){
    if (!auth.currentUser){ showRaazToast?.("Pehle login karo.", "error"); return false; }
    try { await action(); if(success) showRaazToast?.(success,"success"); return true; }
    catch(err){ console.error("RAAZ V15 action:", err); showRaazToast?.(v15Message(err,fallback),"error"); return false; }
  }
  window.raazSafeAction = safeAction;

  // -------- Profile: direct navigation, hidden legacy button par dependency nahi --------
  function openMyProfileV15(){
    if (!auth.currentUser) return;
    // V24 canonical profile: use the professional realtime profile implementation.
    if (typeof window.raazOpenMine === "function") {
      return window.raazOpenMine();
    }
    try {
      renderProfileAvatar();
      profileName.textContent = currentUserName || "RAAZ User";
      profileUsername.textContent = "@" + (currentUsername || "user");
      profileEmail.textContent = auth.currentUser.email || "";
      bioDisplay.textContent = currentBio || "Bio nahi likha hai abhi";
      if (qrcodeBox) {
        qrcodeBox.innerHTML = "";
        if (typeof QRCode === "function") {
          const appUrl = window.location.href.split("?")[0].split("#")[0];
          new QRCode(qrcodeBox,{text:appUrl,width:180,height:180,colorDark:"#1a0000",colorLight:"#ffffff"});
        } else qrcodeBox.textContent = "QR unavailable";
      }
      attachFollowStats(auth.currentUser.uid,myFollowersCount,myFollowingCount,myStatsUnsub);
      showScreen(profileScreen);
      setActiveRaazNav?.("profile");
    } catch(err){ console.error(err); showRaazToast?.(v15Message(err,"Profile open nahi ho paayi."),"error"); }
  }
  window.openMyProfileV15 = openMyProfileV15;

  // Replace the old hidden-button dependency used by bottom Profile navigation.
  raazNavigate = function(name){
    if (!auth.currentUser) return;
    try {
      if(name && name !== "create") window.raazPushHistory?.(name);
      if(name === "feed") { window.raazProfileOnly=false; return raazGoHome("feed"); }
      if(name === "chats") return raazGoHome("chats");
      if(name === "create") return openRaazCreateSheet();
      if(name === "explore") { raazGoFeature(exploreScreen,"explore"); renderExplore(""); return; }
      if(name === "reels") { raazGoFeature(reelsScreen,"reels"); listenForReels(); return; }
      if(name === "games") { return openGames(); }
      if(name === "profile") { hideFeatureScreens(); openMyProfileV15(); return; }
    } catch(err){ console.error("V15 navigation",err); showRaazToast?.(v15Message(err,"Screen open nahi ho paayi."),"error"); }
  };

  // -------- Create entry points: one canonical path --------
  window.openCreateNoteProfessional = function(){
    closeRaazCreateSheet();
    raazGoFeature(notesScreen,"create");
    listenForNotes?.();
    byId("noteInput")?.focus();
  };

  // -------- Feed: never let one engagement read kill a post card --------
  const originalRenderPostCard = renderPostCard;
  renderPostCard = async function(postId,data){
    try { return await originalRenderPostCard(postId,data); }
    catch(err){
      console.error("Post card hydration failed",postId,err);
      const card = qs(`[data-post-id="${CSS.escape(postId)}"]`);
      if(card){
        const like=card.querySelector(".likeCount"), comment=card.querySelector(".commentCount");
        if(like && !like.textContent) like.textContent="0";
        if(comment && !comment.textContent) comment.textContent="0";
      }
      return null;
    }
  };

  // -------- Follow: prevent double taps + surface backend errors --------
  renderFollowButton = async function(uid,data){
    const area=followBtnArea; if(!area || !auth.currentUser) return;
    area.innerHTML='<p class="error">Check ho raha hai...</p>';
    try{
      const myUid=auth.currentUser.uid;
      const snap=await db.collection("users").doc(myUid).collection("following").doc(uid).get();
      const following=snap.exists;
      area.innerHTML=`<button id="followToggleBtn" class="followBtn ${following?'following':''}" type="button">${following?'Following':'+ Follow'}</button>`;
      const btn=byId("followToggleBtn");
      btn?.addEventListener("click",async()=>{
        if(btn.disabled)return;
        btn.disabled=true;
        const ok=await safeAction(async()=>{
          if(following) await unfollowUser(uid); else await followUser(uid,data.name,data.username);
        },"Follow action complete nahi hua.",following?"Unfollowed":"Following");
        if(ok) await renderFollowButton(uid,data);
        else btn.disabled=false;
      });
    }catch(err){ area.innerHTML=`<p class="error">${escapeHtml(v15Message(err,"Follow status load nahi hua."))}</p>`; }
  };

  // -------- Followers/following list: proper error state --------
  loadPeopleList = async function(uid,type){
    peopleListContainer.innerHTML='<div class="chatListEmpty">Load ho raha hai...</div>';
    peopleListEmpty.classList.add("hidden");
    try{
      const snap=await db.collection("users").doc(uid).collection(type).orderBy("followedAt","desc").get();
      peopleListEmpty.classList.toggle("hidden",!snap.empty);
      peopleListContainer.innerHTML="";
      snap.forEach(doc=>{
        const d=doc.data()||{};
        const personUid=type==="followers"?d.followerUid:d.targetUid;
        const personName=type==="followers"?d.followerName:d.targetName;
        const personUsername=type==="followers"?d.followerUsername:d.targetUsername;
        if(!personUid)return;
        const item=document.createElement("div"); item.className="chatListItem";
        item.innerHTML=`<div class="chatListAvatar" data-avatar-uid="${escapeHtml(personUid)}" data-fallback-letter="${escapeHtml(personName||"R")}">${escapeHtml((personName||"R").charAt(0).toUpperCase())}</div><div class="chatListText"><div class="chatListName">${escapeHtml(personName||"User")}</div><div class="chatListLastMsg">@${escapeHtml(personUsername||"user")}</div></div>`;
        item.addEventListener("click",()=>safeAction(async()=>{const fresh=await db.collection("users").doc(personUid).get();if(fresh.exists)openProfileView(personUid,fresh.data());},"Profile load nahi hua."));
        peopleListContainer.appendChild(item); watchFriendAvatar(personUid);
      });
    }catch(err){ peopleListContainer.innerHTML=`<div class="chatListEmpty">${escapeHtml(v15Message(err,"List load nahi hui."))}<br><button type="button" class="primaryAction v15RetryPeople">Retry</button></div>`; qs(".v15RetryPeople")?.addEventListener("click",()=>loadPeopleList(uid,type)); }
  };

  // -------- Blocked users: unsubscribe old listener before opening again --------
  let v15BlockedUnsub=null;
  loadBlockedScreen = function(){
    if(v15BlockedUnsub) v15BlockedUnsub();
    const myUid=auth.currentUser?.uid; if(!myUid)return;
    blockedList.innerHTML='<div class="chatListEmpty">Load ho raha hai...</div>';
    v15BlockedUnsub=db.collection("users").doc(myUid).collection("blocked").onSnapshot(snapshot=>{
      blockedList.innerHTML=""; blockedEmpty.classList.toggle("hidden",!snapshot.empty);
      snapshot.forEach(doc=>{
        const d=doc.data()||{}, name=d.name||"User", username=d.username||"user";
        const item=document.createElement("div"); item.className="chatListItem";
        item.innerHTML=`<div class="chatListAvatar" data-avatar-uid="${doc.id}" data-fallback-letter="${escapeHtml(name)}">${escapeHtml(name.charAt(0).toUpperCase())}</div><div class="chatListText"><div class="chatListName">${escapeHtml(name)}</div><div class="chatListLastMsg">@${escapeHtml(username)}</div></div><button class="unblockBtn" type="button">Unblock</button>`;
        item.querySelector(".unblockBtn")?.addEventListener("click",async()=>{
          await safeAction(()=>unblockUser(doc.id),"Unblock nahi hua.","User unblocked");
        });
        blockedList.appendChild(item); watchFriendAvatar(doc.id);
      });
    },err=>{ blockedList.innerHTML=`<div class="chatListEmpty">${escapeHtml(v15Message(err,"Blocked list load nahi hui."))}<br><button type="button" class="primaryAction v15RetryBlocked">Retry</button></div>`; qs(".v15RetryBlocked")?.addEventListener("click",loadBlockedScreen); });
  };

  // -------- Requests: single listener, clean error/retry --------
  let v15RequestsUnsub=null;
  loadRequestsScreen = function(){
    if(v15RequestsUnsub)v15RequestsUnsub();
    const myUid=auth.currentUser?.uid; if(!myUid)return;
    requestsList.innerHTML='<div class="chatListEmpty">Requests load ho rahi hain...</div>';
    v15RequestsUnsub=db.collection("users").doc(myUid).collection("requestsReceived").orderBy("createdAt","desc").onSnapshot(snapshot=>{
      requestsList.innerHTML=""; requestsEmpty.classList.toggle("hidden",!snapshot.empty);
      snapshot.forEach(doc=>{
        const d=doc.data()||{}, name=d.fromName||"User", username=d.fromUsername||"user";
        const item=document.createElement("div"); item.className="chatListItem";
        item.innerHTML=`<div class="chatListAvatar" data-avatar-uid="${doc.id}" data-fallback-letter="${escapeHtml(name)}">${escapeHtml(name.charAt(0).toUpperCase())}</div><div class="chatListText"><div class="chatListName">${escapeHtml(name)}</div><div class="chatListLastMsg">@${escapeHtml(username)}</div></div><div class="requestBtns"><button class="reqAcceptBtn" type="button">OK</button><button class="reqDeclineBtn" type="button">X</button></div>`;
        item.querySelector(".reqAcceptBtn")?.addEventListener("click",async e=>{e.stopPropagation();await safeAction(()=>acceptRequest(d.fromUid,d.fromName,d.fromUsername),"Request accept nahi hui.","Request accepted");});
        item.querySelector(".reqDeclineBtn")?.addEventListener("click",async e=>{e.stopPropagation();await safeAction(()=>declineRequest(d.fromUid),"Request decline nahi hui.","Request declined");});
        requestsList.appendChild(item); watchFriendAvatar(d.fromUid);
      });
    },err=>{ requestsList.innerHTML=`<div class="chatListEmpty">${escapeHtml(v15Message(err,"Requests load nahi hui."))}<br><button type="button" class="primaryAction v15RetryRequests">Retry</button></div>`; qs(".v15RetryRequests")?.addEventListener("click",loadRequestsScreen); });
  };

  // -------- Chat list: fix empty/error state without changing chat architecture --------
  const originalListenForChatList = listenForChatList;
  listenForChatList = function(){
    try { originalListenForChatList(); }
    catch(err){
      console.error(err);
      chatListPrimary.innerHTML=""; chatListSecondary.innerHTML="";
      chatListEmpty.classList.remove("hidden");
      chatListEmpty.innerHTML=`Chats load nahi hui.<br><button type="button" class="primaryAction v15RetryChats">Retry</button>`;
      qs(".v15RetryChats")?.addEventListener("click",()=>listenForChatList());
    }
  };

  // -------- Feature listeners should never fail silently --------
  const originalListenGroups=listenForGroups;
  listenForGroups=function(){
    try { return originalListenGroups(); } catch(err){ console.error(err); if(groupsList)groupsList.innerHTML=`<div class="featureEmpty"><h3>Communities unavailable</h3><p>${escapeHtml(v15Message(err,"Communities load nahi hui."))}</p></div>`; }
  };
  const originalListenNotes=listenForNotes;
  listenForNotes=function(){
    try { return originalListenNotes(); } catch(err){ console.error(err); if(notesList)notesList.innerHTML=`<div class="featureEmpty"><h3>Notes unavailable</h3><p>${escapeHtml(v15Message(err,"Notes load nahi hui."))}</p></div>`; }
  };

  // Make post image/media links safe and prevent accidental drag navigation.
  document.querySelectorAll("img,video").forEach(el=>{ el.draggable=false; });

  // Modal/sheet UX: Escape closes the topmost overlay.
  document.addEventListener("keydown",e=>{
    if(e.key!=="Escape")return;
    const ids=["storyViewersOverlay","storyViewerOverlay","reelCommentsOverlay","createPostOverlay","createStoryOverlay","createReelOverlay","createGroupOverlay","notificationsOverlay","postActionOverlay","chatItemMenuOverlay","createActionOverlay","raazMoreOverlay"];
    for(const id of ids){const el=byId(id);if(el&&!el.classList.contains("hidden")){el.classList.add("hidden");e.preventDefault();break;}}
  });

  // Ensure all visible nav buttons use button semantics.
  document.querySelectorAll(".raazNav").forEach(b=>{b.type="button";b.setAttribute("aria-label",b.querySelector("span:last-child")?.textContent||"RAAZ navigation");});

  // Settings should persist immediately and load on opening.
  window.openRaazSettingsV15=()=>{ hideFeatureScreens(); raazGoFeature(settingsScreen,"more"); loadRaazSettings(); };

  // Keep service-worker cache/session clean on sign-out.
  window.addEventListener("beforeunload",()=>{ if(v15BlockedUnsub)v15BlockedUnsub(); });

  // -------- Professional back navigation: Android/browser back + visible back buttons --------
  if(!history.state?.raazBase){ history.replaceState({raazBase:true,raazScreen:"home"},"",location.href); }
  window.raazPushHistory=(screen)=>{ try{ history.pushState({raazBase:true,raazScreen:screen},"",location.href.split("#")[0]+"#raaz-"+screen); }catch(_){} };
  window.raazGoBack=()=>{ if(history.state?.raazScreen && history.state.raazScreen!=="home") history.back(); else raazGoHome(lastHomeTab); };

  const _raazOpenChat=openChat;
  openChat=function(friendUid,friendName,friendUsername){ window.raazPushHistory("chat"); return _raazOpenChat(friendUid,friendName,friendUsername); };

  /* legacy popstate router removed by V18 */

  function _raazCloseChatScreen(){
    if(unsubscribeMessages)unsubscribeMessages(); if(unsubscribeFriendStatus)unsubscribeFriendStatus(); if(unsubscribeChatDoc)unsubscribeChatDoc();
    if(statusRefreshInterval)clearInterval(statusRefreshInterval); if(typingTimeout)clearTimeout(typingTimeout);
    clearTypingStatus(); currentChatId=null; currentFriendUid=null; chatDocData={}; isFriendTyping=false; lastKnownFriendSeen=null; raazGoHome(lastHomeTab);
  }

  // Back affordances should always be visible and labelled.
  const raazBackButtons=[backBtn,profileViewBackBtn,profileBackBtn,peopleListBackBtn,requestsBackBtn,blockedBackBtn,document.getElementById("exploreBackBtn"),document.getElementById("reelsBackBtn"),document.getElementById("groupsBackBtn"),document.getElementById("notesBackBtn"),document.getElementById("settingsBackBtn"),closeNotificationsBtn,closeStoryViewersBtn];
  raazBackButtons.forEach(btn=>{if(btn){btn.type="button";btn.setAttribute("aria-label","Back");btn.addEventListener("click",()=>{try{history.replaceState({raazBase:true,raazScreen:"home"},"",location.href.split("#")[0]);}catch(_){}},{capture:false});}});

  console.info("RAAZ V15.4 UX polish layer ready");
})();

/* ================= RAAZ V16 CHAT + GAME CENTER ================= */
(function(){
  const $ = id => document.getElementById(id);

  /* ---------- CHAT: reply + reactions + stable composer ---------- */
  let replyTarget = null;
  let reactionTargetId = null;
  let lastTapMessageId = null;
  let lastTapAt = 0;
  let swipeStart = null;

  function clearReplyComposer(){
    replyTarget = null;
    window.raazReplyTarget = null;
    const box=$('replyComposer');
    if(box) box.classList.add('hidden');
  }
  window.raazClearReplyComposer = clearReplyComposer;

  function setReplyTarget(msg){
    if(!msg || !msg.id) return;
    replyTarget = msg;
    window.raazReplyTarget = msg;
    const box=$('replyComposer');
    if(!box) return;
    $('replyComposerName').textContent = msg.sender || (msg.uid===auth.currentUser?.uid ? 'You' : 'User');
    $('replyComposerText').textContent = msg.text || (msg.imageBase64 ? 'Photo Photo' : 'Message');
    box.classList.remove('hidden');
    msgInput?.focus();
  }

  $('cancelReplyBtn')?.addEventListener('click', clearReplyComposer);

  const REACTION_EMOJI = {
    heart: String.fromCodePoint(0x2764,0xFE0F),
    laugh: String.fromCodePoint(0x1F602),
    wow: String.fromCodePoint(0x1F62E),
    sad: String.fromCodePoint(0x1F622),
    angry: String.fromCodePoint(0x1F621),
    like: String.fromCodePoint(0x1F44D)
  };
  const LEGACY_REACTION = {LOVE:REACTION_EMOJI.heart,LOL:REACTION_EMOJI.laugh,WOW:REACTION_EMOJI.wow,SAD:REACTION_EMOJI.sad,ANGRY:REACTION_EMOJI.angry,LIKE:REACTION_EMOJI.like};
  const normalizeReaction = value => LEGACY_REACTION[value] || value || '';

  function reactionSummaryHtml(reactions, myUid){
    const counts={};
    Object.values(reactions||{}).forEach(r=>{const emoji=normalizeReaction(r);if(emoji)counts[emoji]=(counts[emoji]||0)+1;});
    const entries=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,4);
    if(!entries.length) return '';
    const myReaction=normalizeReaction(myUid ? reactions?.[myUid] : '');
    return `<div class="messageReactions">${entries.map(([emoji,count])=>`<button type="button" class="reactionPill ${myReaction===emoji?'mine':''}" data-reaction-view="${escapeHtml(emoji)}" aria-label="Reaction ${escapeHtml(emoji)}">${emoji}<span>${count}</span></button>`).join('')}</div>`;
  }

  function replyQuoteHtml(reply){
    if(!reply) return '';
    const text=reply.text || 'Message';
    return `<button type="button" class="messageReplyQuote" data-reply-to="${escapeHtml(reply.messageId||'')}"><strong>${escapeHtml(reply.sender||'User')}</strong><span>${escapeHtml(text).slice(0,120)}</span></button>`;
  }

  function renderMessagesListV16(){
    if(!auth.currentUser || !messagesDiv) return;
    const myUid=auth.currentUser.uid;
    const friendLastRead=chatDocData[`lastRead_${currentFriendUid}`];
    const previousScrollTop=messagesDiv.scrollTop;
    const previousScrollHeight=messagesDiv.scrollHeight;
    const clientHeight=messagesDiv.clientHeight;
    const wasNearBottom=(previousScrollHeight-previousScrollTop-clientHeight)<100;
    messagesDiv.innerHTML='';

    cachedMessages.forEach(msg=>{
      const isMine=msg.uid===myUid;
      const el=document.createElement('div');
      el.className=`msg ${isMine?'mine':'theirs'} v16Message`;
      el.dataset.messageId=msg.id;
      const content=msg.imageBase64
        ? `<img src="${escapeHtml(msg.imageBase64)}" class="msgImage" alt="Photo">`
        : escapeHtml(msg.text||'').replace(/\n/g,'<br>');
      const seen=!!(isMine && friendLastRead && msg.createdAt && friendLastRead.toMillis()>=msg.createdAt.toMillis());
      const tick=isMine?`<span class="msgTick ${seen?'seen':''}">${seen?'OKOK':'OK'}</span>`:'';
      el.innerHTML=`${!isMine?`<span class="sender">${escapeHtml(msg.sender||'User')}</span>`:''}${replyQuoteHtml(msg.replyTo)}<div class="messageContent">${content}</div>${reactionSummaryHtml(msg.reactions,myUid)}<div class="msgMeta">${formatMsgTime(msg.createdAt)} ${tick}</div>`;

      let startX=0,startY=0,startTime=0;
      el.addEventListener('pointerdown',e=>{startX=e.clientX;startY=e.clientY;startTime=Date.now();swipeStart={el,msg,x:startX,y:startY};});
      el.addEventListener('pointerup',e=>{
        const dx=e.clientX-startX, dy=e.clientY-startY;
        if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.35){
          if(dx>0) setReplyTarget(msg);
          return;
        }
        if(Date.now()-startTime>700) return;
        const now=Date.now();
        if(lastTapMessageId===msg.id && now-lastTapAt<420){
          openReactionPicker(msg.id,el);
          lastTapMessageId=null;
        }else{
          lastTapMessageId=msg.id; lastTapAt=now;
        }
      });
      el.querySelector('.messageReplyQuote')?.addEventListener('click',e=>{
        e.stopPropagation();
        const targetId=e.currentTarget.dataset.replyTo;
        const target=messagesDiv.querySelector(`[data-message-id="${CSS.escape(targetId||'')}"]`);
        target?.scrollIntoView({behavior:'smooth',block:'center'});
        target?.classList.add('messageFlash');
        setTimeout(()=>target?.classList.remove('messageFlash'),900);
      });
      el.querySelectorAll('.reactionPill').forEach(btn=>btn.addEventListener('click',e=>{
        // Reaction picker is intentionally opened ONLY by double-tapping the message.
        e.stopPropagation();
      }));
      messagesDiv.appendChild(el);
    });

    requestAnimationFrame(()=>{
      const nextHeight=messagesDiv.scrollHeight;
      if(wasNearBottom) messagesDiv.scrollTop=nextHeight;
      else messagesDiv.scrollTop=previousScrollTop;
    });
  }

  // The existing renderer is intentionally replaced after the original app is loaded.
  renderMessagesList=renderMessagesListV16;

  let reactionPickerTimer=null;
  function closeReactionPicker(){
    const picker=$('messageReactionPicker');
    if(picker) picker.classList.add('hidden');
    reactionTargetId=null;
    if(reactionPickerTimer) clearTimeout(reactionPickerTimer);
    reactionPickerTimer=null;
  }
  window.raazCloseReactionPicker=closeReactionPicker;
  function openReactionPicker(messageId,el){
    const picker=$('messageReactionPicker');
    if(!picker || !messageId || !el) return;
    reactionTargetId=messageId;
    picker.classList.remove('hidden');
    const rect=el.getBoundingClientRect();
    const pickerWidth=Math.min(250,window.innerWidth-24);
    const maxLeft=Math.max(12,Math.min(window.innerWidth-pickerWidth-12,rect.left));
    const top=Math.max(12,Math.min(window.innerHeight-62,rect.top-54));
    picker.style.width=pickerWidth+'px';
    picker.style.left=maxLeft+'px';
    picker.style.top=top+'px';
    picker.style.bottom='auto';
    if(reactionPickerTimer) clearTimeout(reactionPickerTimer);
    reactionPickerTimer=setTimeout(closeReactionPicker,4500);
  }

  async function reactToMessage(key){
    if(!reactionTargetId || !currentChatId || !auth.currentUser) return;
    const emoji=REACTION_EMOJI[key]||key;
    const id=reactionTargetId, uid=auth.currentUser.uid;
    const ref=db.collection('chats').doc(currentChatId).collection('messages').doc(id);
    try{
      await db.runTransaction(async tx=>{
        const snap=await tx.get(ref);
        if(!snap.exists) throw new Error('Message mil nahi raha.');
        const data=snap.data()||{};
        const reactions={...(data.reactions||{})};
        const old=reactions[uid];
        if(old===emoji) delete reactions[uid];
        else reactions[uid]=emoji;
        tx.update(ref,{reactions});
      });
      closeReactionPicker();
    }catch(e){ closeReactionPicker(); showRaazToast?.(e?.message||'Reaction send nahi hua.','error'); }
  }
  const reactionPicker=$('messageReactionPicker');
  reactionPicker?.querySelectorAll('[data-reaction]').forEach(btn=>{
    const key=btn.dataset.reaction; btn.textContent=REACTION_EMOJI[key]||'';
    btn.addEventListener('click',()=>reactToMessage(key));
  });
  document.addEventListener('click',e=>{
    const picker=$('messageReactionPicker');
    if(picker&&!picker.classList.contains('hidden')&&!picker.contains(e.target)&&!e.target.closest('.v16Message')) closeReactionPicker();
  });

  // Make the send action include the current reply and avoid the old handler double-send.
  const v16SendBtn=$('sendBtn');
  if(v16SendBtn){
    v16SendBtn.addEventListener('click',e=>{
      e.stopImmediatePropagation();
      const text=msgInput.value.trim();
      if(!text||!currentChatId||!currentFriendUid||!auth.currentUser)return;
      const myUid=auth.currentUser.uid;
      clearTimeout(typingTimeout); clearTypingStatus(); v16SendBtn.disabled=true;
      const reply=replyTarget?{messageId:replyTarget.id,uid:replyTarget.uid||'',sender:replyTarget.sender||'User',text:replyTarget.text||(replyTarget.imageBase64?'Photo Photo':'Message')}:null;
      db.collection('chats').doc(currentChatId).collection('messages').add({text,sender:currentUserName,uid:myUid,replyTo:reply,createdAt:firebase.firestore.FieldValue.serverTimestamp()})
        .then(()=>updateChatListPreview(text)).then(()=>{msgInput.value='';clearReplyComposer();}).catch(err=>showRaazToast?.(err?.message||'Message send nahi hua.','error')).finally(()=>{v16SendBtn.disabled=false;});
    },true);
  }
  msgInput?.addEventListener('keypress',e=>{
    if(e.key==='Enter'&&!e.shiftKey){
      e.preventDefault();
      e.stopImmediatePropagation();
      v16SendBtn?.click();
    }
  },true);

  // Typing bubble inside the conversation, like modern messengers.
  const originalUpdateTypingDisplay=updateTypingDisplay;
  updateTypingDisplay=function(){
    originalUpdateTypingDisplay();
    $('chatTypingIndicator')?.classList.toggle('hidden',!isFriendTyping);
  };

  /* ---------- GAME CENTER ---------- */
  const gamesScreen=$('gamesScreen'), gamesBackBtn=$('gamesBackBtn');
  const ludoPanel=$('ludoPanel'), ludoLobby=$('ludoLobby'), ludoGame=$('ludoGame');
  const gameCards=$('gameCards'), game2048Panel=$('game2048Panel'), rushPanel=$('rushPanel');
  let activeGame='';
  let ludoState=null, ludoUnsub=null, ludoMode='bot';

  function openGames(){
    if(!auth.currentUser)return;
    raazGoFeature(gamesScreen,'more');
    activeGame='';
    [ludoPanel,game2048Panel,rushPanel].forEach(x=>x?.classList.add('hidden'));
    gameCards?.classList.remove('hidden');
  }
  $('openGamesBtn')?.addEventListener('click',()=>{ $('raazMoreOverlay')?.classList.add('hidden'); openGames(); });
  $('openGamesHomeBtn')?.addEventListener('click',openGames);
  $('openGamesHomeBtn')?.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openGames();}});
  gamesBackBtn?.addEventListener('click',()=>raazGoHome(lastHomeTab));

  document.querySelectorAll('[data-game-launch]').forEach(btn=>btn.addEventListener('click',()=>{
    const game=btn.dataset.gameLaunch; activeGame=game; gameCards?.classList.add('hidden');
    if(game==='ludo') openLudoPanel();
    if(game==='2048') open2048Panel();
    if(game==='stack') openStackPanel();
  }));
  document.querySelectorAll('.gamePanelBackBtn').forEach(btn=>btn.addEventListener('click',closeActiveGame));
  $('ludoPanelBackBtn')?.addEventListener('click',closeActiveGame);

  function closeActiveGame(){
    if(ludoUnsub){ludoUnsub();ludoUnsub=null;}
    [ludoPanel,game2048Panel,rushPanel].forEach(x=>x?.classList.add('hidden'));
    gameCards?.classList.remove('hidden'); activeGame='';
  }

  function openLudoPanel(){
    ludoPanel?.classList.remove('hidden'); game2048Panel?.classList.add('hidden'); rushPanel?.classList.add('hidden');
    ludoLobby?.classList.remove('hidden'); ludoGame?.classList.add('hidden');
    $('ludoModeStatus').textContent='Choose your mode'; $('ludoRoomBadge')?.classList.add('hidden');
  }
  $('ludoBotModeBtn')?.addEventListener('click',()=>{
    ludoMode='bot'; $('ludoBotModeBtn').classList.add('active'); $('ludoFriendModeBtn').classList.remove('active'); $('startBotLudoBtn').classList.remove('hidden'); $('friendLudoSetup').classList.add('hidden');
  });
  $('ludoFriendModeBtn')?.addEventListener('click',()=>{
    ludoMode='friend'; $('ludoFriendModeBtn').classList.add('active'); $('ludoBotModeBtn').classList.remove('active'); $('startBotLudoBtn').classList.add('hidden'); $('friendLudoSetup').classList.remove('hidden');
  });
  $('startBotLudoBtn')?.addEventListener('click',()=>startLudoBot());
  $('newLudoGameBtn')?.addEventListener('click',()=>{if(ludoMode==='bot')startLudoBot();else openLudoPanel();});

  // Standard 15x15 Ludo-style cross track (52 cells).
  const LUDO_PATH=[[6,1],[6,2],[6,3],[6,4],[6,5],[5,6],[4,6],[3,6],[2,6],[1,6],[0,6],[0,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,9],[6,10],[6,11],[6,12],[6,13],[6,14],[7,14],[8,14],[8,13],[8,12],[8,11],[8,10],[8,9],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[14,7],[14,6],[13,6],[12,6],[11,6],[10,6],[9,6],[8,5],[8,4],[8,3],[8,2],[8,1],[8,0],[7,0],[6,0]];
  const LUDO_START=[0,13];
  const HOME_POS=[[[1,1],[4,1],[1,4],[4,4]],[[10,1],[13,1],[10,4],[13,4]]];
  const FINISH_POS=[[[7,1],[7,2],[7,3],[7,4],[7,5]],[[13,7],[12,7],[11,7],[10,7],[9,7]]];
  const SAFE_PATH=new Set([0,8,13,21,26,34,39,47]);

  function freshLudoState(mode='bot',gameId=null){
    const me=auth.currentUser.uid;
    return {version:1,gameType:'ludo',mode,gameId,roomCode:gameId?gameId.slice(0,6).toUpperCase():null,hostUid:me,guestUid:mode==='bot'?'BOT':null,status:mode==='bot'?'playing':'waiting',turn:0,turnUid:me,players:[{uid:me,name:currentUserName,username:currentUsername},{uid:mode==='bot'?'BOT':null,name:mode==='bot'?'RAAZ Bot':'Waiting...',username:mode==='bot'?'bot':'friend'}],tokens:[[ -1,-1,-1,-1],[-1,-1,-1,-1]],dice:null,diceByPlayer:[null,null],rolled:false,winner:null,updatedAt:Date.now()};
  }
  function playerForState(state){
    const uid=auth.currentUser?.uid; return state.players.findIndex(p=>p.uid===uid);
  }
  function legalTokens(state,p,dice){
    if(dice==null)return[];
    const arr=state.tokens[p]||[]; const out=[];
    arr.forEach((pos,i)=>{
      if(pos===57)return;
      if(pos===-1){if(dice===6)out.push(i);return;}
      if(pos+dice<=57)out.push(i);
    });
    return out;
  }
  function absPath(player,progress){return (LUDO_START[player]+progress)%52;}
  function tokenCoord(player,index,progress){
    if(progress===-1)return HOME_POS[player][index];
    if(progress>=52&&progress<57)return FINISH_POS[player][progress-52]||FINISH_POS[player][4];
    if(progress===57)return [7,7];
    return LUDO_PATH[absPath(player,progress)];
  }
  function renderLudoBoard(state){
    const board=$('ludoBoard'); if(!board)return;
    board.innerHTML='';
    const cellMap={};
    for(let i=0;i<225;i++){
      const y=Math.floor(i/15),x=i%15,cell=document.createElement('div'); cell.className='ludoCell';
      const pathIndex=LUDO_PATH.findIndex(c=>c[0]===x&&c[1]===y);
      if(pathIndex>=0){cell.classList.add('ludoPath'); if(SAFE_PATH.has(pathIndex))cell.classList.add('ludoSafe');}
      if(x<=5&&y<=5)cell.classList.add('ludoBaseRed');
      else if(x>=9&&y<=5)cell.classList.add('ludoBaseGreen');
      else if(x>=9&&y>=9)cell.classList.add('ludoBaseYellow');
      else if(x<=5&&y>=9)cell.classList.add('ludoBaseBlue');
      if(x>=6&&x<=8&&y>=6&&y<=8)cell.classList.add('ludoCenter');
      if((x>=6&&x<=8)||(y>=6&&y<=8))cell.classList.add('ludoCross');
      board.appendChild(cell); if(pathIndex>=0)cellMap[pathIndex]=cell;
    }
    const buckets={};
    state.tokens.forEach((tokens,p)=>tokens.forEach((prog,i)=>{
      const [x,y]=tokenCoord(p,i,prog); const key=`${x}-${y}`; (buckets[key]||(buckets[key]=[])).push({p,i,prog});
    }));
    Object.entries(buckets).forEach(([key,tokens])=>{
      const [x,y]=key.split('-').map(Number); const idx=y*15+x; const cell=board.children[idx]; if(!cell)return;
      tokens.forEach((t,n)=>{
        const b=document.createElement('button'); b.type='button'; b.className=`ludoToken player${t.p}`; b.textContent=String(t.i+1); b.title=`Pawn ${t.i+1}`;
        const myP=playerForState(state), legal=state.turn===myP&&state.rolled&&legalTokens(state,myP,state.dice).includes(t.i);
        if(legal&&t.p===myP){b.classList.add('selectable');b.addEventListener('click',()=>moveLudoToken(t.i));}
        if(tokens.length>1){b.style.setProperty('--stack',String(n));}
        cell.appendChild(b);
      });
    });
    const me=playerForState(state);
    $('ludoTurnLabel').textContent=state.status==='waiting'?'Waiting for friend...':state.winner!==null?`${state.players[state.winner]?.name||'Player'} wins!`:state.turn===me?'Your turn':`${state.players[state.turn]?.name||'Opponent'}'s turn`;
    $('ludoPlayerLabel').textContent=state.mode==='bot'?'You vs RAAZ Bot':`${state.players[0]?.name||'Player'} vs ${state.players[1]?.name||'Friend'}`;
    const youHome=(state.tokens?.[me]||[]).filter(v=>v===57).length; const op=me===0?1:0; const opHome=(state.tokens?.[op]||[]).filter(v=>v===57).length;
    if($('ludoYouScore')) $('ludoYouScore').textContent=`${youHome} / 4 Home`; if($('ludoOpponentScore')) $('ludoOpponentScore').textContent=`${opHome} / 4 Home`;
    if($('ludoOpponentName')) $('ludoOpponentName').textContent=state.players?.[op]?.name || (state.mode==='bot'?'RAAZ Bot':'Friend');
    const turnPill=$('ludoTurnPill'); if(turnPill){turnPill.textContent=state.status==='waiting'?'WAITING':state.winner!==null?'WINNER':state.turn===me?'YOUR TURN':'THEIR TURN';turnPill.classList.toggle('yourTurn',state.turn===me&&state.winner===null);}
    const diceMine=state.diceByPlayer?.[me]; const diceOpp=state.diceByPlayer?.[op];
    $('ludoDiceValue').textContent=diceMine==null?'ROLL':String(diceMine);
    if($('ludoOpponentDice')) $('ludoOpponentDice').textContent=diceOpp==null?'--':String(diceOpp);
    $('ludoDiceBtn').disabled=state.status!=='playing'||state.turn!==me||state.rolled||state.winner!==null;
    $('ludoTip').textContent=state.winner!==null?'WIN Game over - New Game dabao.':state.turn!==me?'Opponent ki turn hai...':state.rolled?(legalTokens(state,me,state.dice).length?'Pawn choose karo.':'Is roll par legal move nahi hai.'):'ROLL Roll the dice';
  }
  function commitLudoState(next){
    ludoState=next; next.updatedAt=Date.now(); renderLudoBoard(next);
    if(next.mode==='friend'&&next.gameId) db.collection('games').doc(next.gameId).set(next,{merge:true}).catch(e=>showRaazToast?.(e.message||'Game sync nahi hua.','error'));
  }
  function setLudoDice(state,p,value){
    const next={...state,dice:value}; next.diceByPlayer=[...(state.diceByPlayer||[null,null])]; next.diceByPlayer[p]=value; return next;
  }
  function moveLudoTokenForPlayer(index,p){
    if(!ludoState||ludoState.status!=='playing'||ludoState.turn!==p||!ludoState.rolled)return;
    const dice=ludoState.dice, legal=legalTokens(ludoState,p,dice); if(!legal.includes(index))return;
    const tokens=ludoState.tokens.map(a=>a.slice()); let next=tokens[p][index]; next=next===-1?0:next+dice; tokens[p][index]=next;
    if(next<52){
      const land=absPath(p,next),op=1-p;
      tokens[op]=tokens[op].map(pos=>{if(pos>=0&&pos<52&&absPath(op,pos)===land&&!SAFE_PATH.has(land))return -1;return pos;});
    }
    const won=tokens[p].every(v=>v===57);
    const nextTurn=dice===6&&!won?p:1-p;
    const diceByPlayer=[...(ludoState.diceByPlayer||[null,null])]; diceByPlayer[p]=dice;
    const nextState={...ludoState,tokens,dice:null,diceByPlayer,rolled:false,winner:won?p:null,turn:won?p:nextTurn,turnUid:ludoState.players[won?p:nextTurn]?.uid||''};
    commitLudoState(nextState);
    if(nextState.mode==='bot'&&nextState.winner===null&&nextState.turn===1)setTimeout(botLudoTurn,700);
  }
  function rollLudoDice(){
    if(!ludoState||ludoState.status!=='playing'||ludoState.winner!==null)return;
    const me=playerForState(ludoState); if(ludoState.turn!==me||ludoState.rolled)return;
    const dice=Math.floor(Math.random()*6)+1; const diceBtn=$('ludoDiceBtn'); diceBtn?.classList.remove('rolling'); void diceBtn?.offsetWidth; diceBtn?.classList.add('rolling');
    ludoState=setLudoDice({...ludoState,dice:null,rolled:true},me,dice);
    if(!legalTokens(ludoState,me,dice).length){
      ludoState={...ludoState,rolled:false};
      if(dice!==6)ludoState.turn=1-me;
      ludoState.turnUid=ludoState.players[ludoState.turn]?.uid||'';
    }
    commitLudoState(ludoState);
    if(ludoState.mode==='bot'&&ludoState.turn===1)setTimeout(botLudoTurn,650);
  }
  $('ludoDiceBtn')?.addEventListener('click',rollLudoDice);
  function moveLudoToken(index){
    const p=playerForState(ludoState); if(p<0)return; moveLudoTokenForPlayer(index,p);
  }
  function botLudoTurn(){
    if(!ludoState||ludoState.mode!=='bot'||ludoState.turn!==1||ludoState.winner!==null||ludoState.rolled)return;
    const dice=Math.floor(Math.random()*6)+1;
    let botState=setLudoDice({...ludoState,dice:null,rolled:true},1,dice);
    const legal=legalTokens(botState,1,dice);
    if(!legal.length){
      botState.rolled=false;
      if(dice!==6)botState.turn=0;
      botState.turnUid=botState.players[botState.turn]?.uid||'';
      commitLudoState(botState);
      if(dice===6)setTimeout(botLudoTurn,700);
      return;
    }
    // Smart bot: finish, capture, then advance the furthest legal pawn.
    let best=legal[0],bestScore=-1e9;
    legal.forEach(i=>{const pos=botState.tokens[1][i],np=pos===-1?0:pos+dice;let score=np*2;if(np===57)score+=1000;const land=np<52?absPath(1,np):-1;if(land>=0&&botState.tokens[0].some(x=>x>=0&&x<52&&absPath(0,x)===land&&!SAFE_PATH.has(land)))score+=250;if(pos===-1)score+=40;if(score>bestScore){bestScore=score;best=i;}});
    ludoState=botState; renderLudoBoard(botState);
    setTimeout(()=>moveLudoTokenForPlayer(best,1),520);
  }
  function startLudoBot(){
    if(ludoUnsub){ludoUnsub();ludoUnsub=null;}
    ludoMode='bot'; ludoState=freshLudoState('bot'); ludoState.diceByPlayer=[null,null]; ludoLobby?.classList.add('hidden'); ludoGame?.classList.remove('hidden'); $('ludoModeStatus').textContent='Solo  -  RAAZ Bot'; renderLudoBoard(ludoState);
  }

  async function createLudoRoom(){
    try{
      let code='',ref=null;
      for(let i=0;i<5;i++){
        const candidate=Array.from(crypto.getRandomValues(new Uint32Array(6)),n=>'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n%26]).join('');
        const r=db.collection('games').doc(candidate); const existing=await r.get();
        if(!existing.exists){code=candidate;ref=r;break;}
      }
      if(!ref) throw new Error('Room code generate nahi hua. Dobara try karo.');
      const state=freshLudoState('friend',ref.id); state.status='waiting'; state.guestUid=null; state.roomCode=code; state.players[1]={uid:null,name:'Waiting...',username:'friend'};
      await ref.set(state);
      $('ludoRoomCodeInput').value=code;
      $('ludoLobbyMessage').innerHTML=`Room ready: <strong>${code}</strong>  -  code friend ko RAAZ chat me bhejo.`;
      try{await navigator.clipboard?.writeText(`${location.href.split('#')[0]}#ludo-${code}`);}catch(_){}
      showRaazToast?.('Ludo room link copy ho gaya.','success');
      listenLudoRoom(code,true);
    }catch(e){$('ludoLobbyMessage').textContent=e.message||'Room create nahi hua.';}
  }
  $('createLudoRoomBtn')?.addEventListener('click',createLudoRoom);
  async function joinLudoRoom(){
    const code=($('ludoRoomCodeInput')?.value||'').trim().toUpperCase(); if(!/^[A-Z0-9]{6}$/.test(code)){ $('ludoLobbyMessage').textContent='6-character room code daalo.'; return; }
    let gameId=code;
    try{
      let ref=db.collection('games').doc(code),snap=await ref.get();
      if(!snap.exists)throw new Error('Room nahi mila.');
      const d=snap.data()||{}; if(d.gameType!=='ludo'||d.status!=='waiting')throw new Error('Ye room ab available nahi hai.'); if(d.hostUid===auth.currentUser.uid)throw new Error('Ye tumhara apna room hai.');
      await ref.update({guestUid:auth.currentUser.uid,players:[d.players[0],{uid:auth.currentUser.uid,name:currentUserName,username:currentUsername}],status:'playing',turn:0,turnUid:d.players[0]?.uid||d.hostUid,updatedAt:Date.now(),dice:null,diceByPlayer:[null,null],rolled:false});
      listenLudoRoom(gameId,false);
    }catch(e){$('ludoLobbyMessage').textContent=e.message||'Room join nahi hua.';}
  }
  $('joinLudoRoomBtn')?.addEventListener('click',joinLudoRoom);
  function listenLudoRoom(gameId,isHost){
    if(ludoUnsub)ludoUnsub();
    ludoMode='friend'; $('ludoModeStatus').textContent='Friend match'; ludoLobby?.classList.add('hidden'); ludoGame?.classList.remove('hidden');
    ludoUnsub=db.collection('games').doc(gameId).onSnapshot(snap=>{
      if(!snap.exists){showRaazToast?.('Game room close ho gaya.','error');closeActiveGame();return;}
      ludoState=snap.data(); ludoState.gameId=gameId; $('ludoRoomBadge')?.classList.remove('hidden'); $('ludoRoomBadge').textContent=gameId.slice(0,6).toUpperCase(); renderLudoBoard(ludoState);
    },err=>showRaazToast?.(err.message||'Game sync error','error'));
  }
  function openLudoInviteFromHash(){
    const m=location.hash.match(/^#ludo-(.+)$/); if(!m||!auth.currentUser)return;
    openGames(); openLudoPanel(); $('ludoFriendModeBtn')?.click(); $('ludoRoomCodeInput').value=m[1]; joinLudoRoom(); history.replaceState({raazBase:true,raazScreen:'games'},'',location.href.split('#')[0]+'#raaz-games');
  }
  setTimeout(openLudoInviteFromHash,700);

  /* ---------- 2048 ---------- */
  let board2048=[],score2048=0,best2048=Number(localStorage.getItem('raaz.2048.best')||0),touch2048=null;
  function open2048Panel(){ludoPanel?.classList.add('hidden');rushPanel?.classList.add('hidden');game2048Panel?.classList.remove('hidden');$('best2048').textContent=best2048;new2048();}
  function new2048(){board2048=Array(16).fill(0);score2048=0;add2048Tile();add2048Tile();render2048();}
  function add2048Tile(){const empty=board2048.map((v,i)=>v?null:i).filter(v=>v!==null);if(!empty.length)return;board2048[empty[Math.floor(Math.random()*empty.length)]]=Math.random()<.9?2:4;}
  function render2048(){const b=$('board2048');if(!b)return;b.innerHTML='';board2048.forEach(v=>{const c=document.createElement('div');c.className='tile2048 '+(v?'tile'+v:'');c.textContent=v||'';b.appendChild(c);});$('score2048').textContent=score2048;$('score2048Big').textContent=score2048;$('best2048').textContent=best2048;}
  function move2048(dir){
    const old=board2048.join(','); const lines=[];
    for(let r=0;r<4;r++)lines.push(board2048.slice(r*4,r*4+4));
    let changed=false;
    function merge(a){let x=a.filter(Boolean),out=[];for(let i=0;i<x.length;i++){if(x[i]===x[i+1]){const n=x[i]*2;out.push(n);score2048+=n;i++;}else out.push(x[i]);}while(out.length<4)out.push(0);return out;}
    if(dir==='left')for(let r=0;r<4;r++)lines[r]=merge(lines[r]);
    if(dir==='right')for(let r=0;r<4;r++)lines[r]=merge(lines[r].reverse()).reverse();
    if(dir==='up'||dir==='down')for(let c=0;c<4;c++){let col=lines.map(r=>r[c]);if(dir==='down')col.reverse();col=merge(col);if(dir==='down')col.reverse();col.forEach((v,r)=>lines[r][c]=v);}
    board2048=lines.flat();changed=old!==board2048.join(',');
    if(changed){add2048Tile();if(score2048>best2048){best2048=score2048;localStorage.setItem('raaz.2048.best',best2048);}render2048();}
  }
  $('new2048Btn')?.addEventListener('click',new2048);
  $('board2048')?.addEventListener('keydown',e=>{const m={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'}[e.key];if(m){e.preventDefault();move2048(m);}});
  $('board2048')?.addEventListener('touchstart',e=>{const t=e.changedTouches[0];touch2048={x:t.clientX,y:t.clientY};},{passive:true});
  $('board2048')?.addEventListener('touchend',e=>{if(!touch2048)return;const t=e.changedTouches[0],dx=t.clientX-touch2048.x,dy=t.clientY-touch2048.y;if(Math.max(Math.abs(dx),Math.abs(dy))<35)return;move2048(Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up'));touch2048=null;},{passive:true});
  window.addEventListener('keydown',e=>{if(game2048Panel?.classList.contains('hidden'))return;const m={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'}[e.key];if(m){e.preventDefault();move2048(m);}});

  /* ---------- Stack Tower (replaces Neon Rush) ---------- */
  let stackTimer=null,stackRunning=false,stackScore=0,stackCombo=1,stackLevel=1;
  let stackBlocks=[],stackCurrent={x:0,w:0,dir:1,speed:1.5};
  const stackColors=['#ff4b12','#ff7a32','#ffb12b','#ff5a5f','#8d5cff','#2dd4bf'];
  function openStackPanel(){ludoPanel?.classList.add('hidden');game2048Panel?.classList.add('hidden');rushPanel?.classList.remove('hidden');resetStack();}
  function resetStack(){
    clearInterval(stackTimer); stackRunning=false; stackScore=0; stackCombo=1; stackLevel=1; stackBlocks=[];
    $('rushScore').textContent='0'; $('rushTime').textContent='LEVEL 1'; $('rushCombo').textContent='Combo x1';
    const skyline=$('stackSkyline'); if(skyline)skyline.innerHTML='';
    const target=$('rushTarget'); if(target){target.style.width='72%';target.style.left='14%';target.style.bottom='22px';target.style.top='auto';target.style.background=stackColors[0];target.textContent='';}
    $('rushStartOverlay')?.classList.remove('hidden');
  }
  function renderStackBlocks(){
    const skyline=$('stackSkyline'); if(!skyline)return; skyline.innerHTML='';
    stackBlocks.forEach((b,i)=>{
      const el=document.createElement('div'); el.className='stackPlacedBlock';
      el.style.width=b.w+'%'; el.style.left=b.x+'%'; el.style.bottom=(22+i*24)+'px'; el.style.background=stackColors[i%stackColors.length]; el.style.boxShadow=`0 8px 22px ${stackColors[i%stackColors.length]}55`;
      skyline.appendChild(el);
    });
  }
  function startStack(){
    if(stackRunning)return; stackRunning=true; $('rushStartOverlay')?.classList.add('hidden');
    stackBlocks=[]; stackScore=0; stackCombo=1; stackLevel=1;
    const first={x:14,w:72}; stackBlocks.push(first); renderStackBlocks();
    spawnStackBlock();
    clearInterval(stackTimer); stackTimer=setInterval(()=>{
      if(!stackRunning)return;
      const speed=1.2+Math.min(4.5,stackLevel*.12);
      stackCurrent.x += stackCurrent.dir*speed;
      if(stackCurrent.x<=3){stackCurrent.x=3;stackCurrent.dir=1;}
      if(stackCurrent.x+stackCurrent.w>=97){stackCurrent.x=97-stackCurrent.w;stackCurrent.dir=-1;}
      const t=$('rushTarget'); if(t){t.style.left=stackCurrent.x+'%';}
    },30);
  }
  function spawnStackBlock(){
    const last=stackBlocks[stackBlocks.length-1]||{x:14,w:72};
    stackCurrent={x:3,w:last.w,dir:1,speed:1.5};
    if(Math.random()<.5)stackCurrent.dir=-1;
    const t=$('rushTarget'); if(t){t.style.width=stackCurrent.w+'%';t.style.left=stackCurrent.x+'%';t.style.bottom=(22+stackBlocks.length*24)+'px';t.style.top='auto';t.style.background=stackColors[stackBlocks.length%stackColors.length];}
    $('rushTime').textContent='LEVEL '+stackLevel;
  }
  function dropStackBlock(){
    if(!stackRunning)return;
    const last=stackBlocks[stackBlocks.length-1]||{x:14,w:72};
    const a=stackCurrent.x,b=last.x, left=Math.max(a,b), right=Math.min(a+stackCurrent.w,b+last.w), overlap=right-left;
    if(overlap<=3){
      stackRunning=false; clearInterval(stackTimer);
      const best=Math.max(stackScore,Number(localStorage.getItem('raaz.stack.best')||0));
      if(stackScore>Number(localStorage.getItem('raaz.stack.best')||0))localStorage.setItem('raaz.stack.best',stackScore);
      $('rushStartOverlay').innerHTML=`<strong>Tower over</strong><span>Score ${stackScore}  -  Best ${best}</span><button id="restartRushBtn" class="primaryAction">Play again</button>`;
      $('rushStartOverlay').classList.remove('hidden'); $('restartRushBtn').onclick=resetStack; return;
    }
    const perfect=Math.abs((a+stackCurrent.w/2)-(b+last.w/2))<3.5;
    const nx=left,nw=overlap;
    stackBlocks.push({x:nx,w:nw}); stackScore+=perfect?2*stackCombo:stackCombo; stackCombo=perfect?Math.min(12,stackCombo+1):1; stackLevel=stackBlocks.length;
    $('rushScore').textContent=stackScore; $('rushCombo').textContent='Combo x'+stackCombo; renderStackBlocks(); spawnStackBlock();
  }
  $('startRushBtn')?.addEventListener('click',startStack);
  $('rushTarget')?.addEventListener('click',dropStackBlock);
  $('rushArena')?.addEventListener('pointerdown',e=>{if(stackRunning&&e.target!==$('rushTarget')){dropStackBlock();}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&stackRunning){clearInterval(stackTimer);stackRunning=false;$('rushStartOverlay')?.classList.remove('hidden');}});

  // History support for Game Center.
  /* legacy popstate router removed by V18 */
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&stackRunning){clearInterval(stackTimer);stackRunning=false;$('rushStartOverlay')?.classList.remove('hidden');}});

  // Cleanup game listener on logout.
  const oldLogout=window.doLogout;
  if(typeof oldLogout==='function'){
    window.doLogout=async function(){if(ludoUnsub){ludoUnsub();ludoUnsub=null;}clearInterval(stackTimer);return oldLogout.apply(this,arguments);};
  }

  console.info('RAAZ V16 chat reactions + Game Center + Stack Tower ready');
})();


/* ================= RAAZ V16.3 - UNIVERSAL BACK NAVIGATION ================= */
(function installRaazUniversalBack(){
  const byId = id => document.getElementById(id);
  const visible = el => !!el && !el.classList.contains('hidden');

  function closeOverlayFirst(){
    const ids=['storyViewersOverlay','storyViewerOverlay','reelCommentsOverlay','createPostOverlay','createStoryOverlay','createReelOverlay','createGroupOverlay','notificationsOverlay','postActionOverlay','chatItemMenuOverlay','createActionOverlay','raazMoreOverlay'];
    for(const id of ids){ const el=byId(id); if(visible(el)){ el.classList.add('hidden'); return true; } }
    return false;
  }

  function goBack(){
    if(closeOverlayFirst()) return;
    try{
      if(visible(byId('gamesScreen'))){
        if(visible(byId('ludoPanel'))){ byId('ludoPanelBackBtn')?.click(); return; }
        if(visible(byId('game2048Panel')) || visible(byId('rushPanel'))){ byId('game2048Panel')?.classList.contains('hidden') ? byId('rushPanel')?.querySelector('.gamePanelBackBtn')?.click() : byId('game2048Panel')?.querySelector('.gamePanelBackBtn')?.click(); return; }
        raazGoHome(lastHomeTab || 'feed'); return;
      }
      if(visible(chatScreen)){ if(typeof window.raazCloseChatForBack==='function') return window.raazCloseChatForBack(); return raazGoHome(lastHomeTab || 'feed'); }
      if(visible(peopleListScreen)){ peopleListBackBtn?.click(); return; }
      if(visible(requestsScreen)){ requestsBackBtn?.click(); return; }
      if(visible(blockedScreen)){ blockedBackBtn?.click(); return; }
      if(visible(profileViewScreen)){ profileViewBackBtn?.click(); return; }
      if(visible(exploreScreen)||visible(reelsScreen)||visible(groupsScreen)||visible(notesScreen)||visible(settingsScreen)){
        raazGoHome(lastHomeTab || 'feed'); return;
      }
      if(visible(profileScreen)){ raazGoHome(lastHomeTab || 'feed'); return; }
      if(visible(homeScreen)) return;
    }catch(err){ console.error('RAAZ back navigation',err); raazGoHome(lastHomeTab || 'feed'); }
  }
  window.raazUniversalBack=goBack;

  const pageBackIds=['backBtn','profileViewBackBtn','profileBackBtn','requestsBackBtn','blockedBackBtn','peopleListBackBtn','exploreBackBtn','reelsBackBtn','groupsBackBtn','notesBackBtn','settingsBackBtn','gamesBackBtn'];
  pageBackIds.forEach(id=>{
    const btn=byId(id); if(!btn) return;
    btn.type='button'; btn.setAttribute('aria-label','Back'); btn.title='Back';
    btn.addEventListener('click',e=>{ e.preventDefault(); e.stopImmediatePropagation(); goBack(); },true);
  });

  // Android/browser back: overlays close first, then app pages.
  /* legacy popstate router removed by V18 */

  // Hardware/browser back can arrive without a useful app history state in file previews.
  if(!history.state?.raazV163Base){
    try{ history.replaceState({...(history.state||{}),raazV163Base:true,raazScreen:'home'},'',location.href); }catch(_){ }
  }
})();
/* ================= RAAZ V16.4 - UNIVERSAL NAVIGATION + BUG FIXES ================= */
(function installRaazV164(){
  const byId=id=>document.getElementById(id);
  const visible=el=>!!el&&!el.classList.contains('hidden');
  const overlays=['storyViewersOverlay','storyViewerOverlay','reelCommentsOverlay','createPostOverlay','createStoryOverlay','createReelOverlay','createGroupOverlay','notificationsOverlay','postActionOverlay','chatItemMenuOverlay','createActionOverlay','raazMoreOverlay','messageReactionPicker'];

  function closeOverlayFirst(){
    for(const id of overlays){const el=byId(id);if(visible(el)){el.classList.add('hidden');if(id==='messageReactionPicker')byId(id).style.left='-9999px';return true;}}
    return false;
  }
  function closeChatDirect(){
    try{if(unsubscribeMessages)unsubscribeMessages();if(unsubscribeFriendStatus)unsubscribeFriendStatus();if(unsubscribeChatDoc)unsubscribeChatDoc();if(statusRefreshInterval)clearInterval(statusRefreshInterval);if(typingTimeout)clearTimeout(typingTimeout);clearTypingStatus();}catch(_){ }
    currentChatId=null;currentFriendUid=null;chatDocData={};isFriendTyping=false;lastKnownFriendSeen=null;
    raazGoHome(lastHomeTab||'feed');
  }
  function closeGamePanelDirect(){
    try{if(ludoUnsub){ludoUnsub();ludoUnsub=null;}}catch(_){ }
    [byId('ludoPanel'),byId('game2048Panel'),byId('rushPanel')].forEach(x=>x?.classList.add('hidden'));
    byId('gameCards')?.classList.remove('hidden');
  }
  function goBack(){
    if(closeOverlayFirst())return;
    try{
      if(visible(byId('gamesScreen'))){
        if(visible(byId('ludoPanel'))||visible(byId('game2048Panel'))||visible(byId('rushPanel'))){closeGamePanelDirect();return;}
        raazGoHome(lastHomeTab||'feed');return;
      }
      if(visible(chatScreen)){closeChatDirect();return;}
      if(visible(peopleListScreen)){
        if(currentProfileViewUid&&currentProfileViewData){unattachStats(viewStatsUnsub);showScreen(profileViewScreen);setActiveRaazNav('profile');}
        else {showScreen(profileScreen);setActiveRaazNav('profile');}
        return;
      }
      if(visible(requestsScreen)){raazGoHome(lastHomeTab||'feed');return;}
      if(visible(blockedScreen)){showScreen(profileScreen);setActiveRaazNav('profile');return;}
      if(visible(profileViewScreen)){raazGoHome(lastHomeTab||'feed');return;}
      if(visible(profileScreen)){raazGoHome(lastHomeTab||'feed');return;}
      if(visible(exploreScreen)||visible(reelsScreen)||visible(groupsScreen)||visible(notesScreen)||visible(settingsScreen)){raazGoHome(lastHomeTab||'feed');return;}
    }catch(err){console.error('RAAZ V16.4 back',err);raazGoHome(lastHomeTab||'feed');}
  }
  window.raazUniversalBack=goBack;
  window.raazGoBack=goBack;

  // Visible back buttons use one direct handler. No recursive .click() calls.
  const backIds=['backBtn','profileViewBackBtn','profileBackBtn','peopleListBackBtn','requestsBackBtn','blockedBackBtn','exploreBackBtn','reelsBackBtn','groupsBackBtn','notesBackBtn','settingsBackBtn','gamesBackBtn','ludoPanelBackBtn'];
  backIds.forEach(id=>{
    const btn=byId(id);if(!btn)return;
    btn.type='button';btn.setAttribute('aria-label','Back');btn.title='Back';
    btn.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();goBack();},{capture:true});
  });
  document.querySelectorAll('.gamePanelBackBtn').forEach(btn=>{
    btn.type='button';btn.setAttribute('aria-label','Back');btn.title='Back';
    btn.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();closeGamePanelDirect();},{capture:true});
  });

  // Close buttons inside overlays should never navigate the page.
  ['closeNotificationsBtn','closeStoryViewersBtn','closeStoryViewerBtn','closeCreatePostBtn','closeCreateStoryBtn','closeCreateReelBtn','closeCreateGroupBtn','closeReelCommentsBtn','closePostActionBtn','closeCreateActionBtn','closeMoreBtn','cancelReplyBtn'].forEach(id=>{
    const btn=byId(id);if(btn){btn.type='button';}
  });

  // Build a small browser history trail for real pages. Hardware back can then follow it.
  function currentScreenName(){
    if(visible(chatScreen))return 'chat';
    if(visible(profileViewScreen))return 'profileView';
    if(visible(peopleListScreen))return 'people';
    if(visible(requestsScreen))return 'requests';
    if(visible(blockedScreen))return 'blocked';
    if(visible(profileScreen))return 'profile';
    if(visible(exploreScreen))return 'explore';
    if(visible(reelsScreen))return 'reels';
    if(visible(groupsScreen))return 'groups';
    if(visible(notesScreen))return 'notes';
    if(visible(settingsScreen))return 'settings';
    if(visible(gamesScreen))return 'games';
    if(visible(homeScreen))return 'home';
    return 'home';
  }
  function pushPage(name){
    try{
      if(history.state?.raazScreen===name)return;
      history.pushState({raazBase:true,raazScreen:name},'',location.href.split('#')[0]+'#raaz-'+name);
    }catch(_){ }
  }
  window.raazPushHistory=pushPage;

  // Bottom navigation: push only real page destinations.
  document.querySelectorAll('.raazNav').forEach(btn=>btn.addEventListener('click',()=>{
    const name=btn.dataset.raazNav;
    if(name&&name!=='create')setTimeout(()=>pushPage(name==='feed'||name==='chats'?'home':name),0);
  }));

  // Profile views and secondary screens opened from content/settings.
  const oldOpenProfileView=openProfileView;
  openProfileView=async function(uid,data){pushPage('profileView');return oldOpenProfileView(uid,data);};
  const oldOpenPeopleList=openPeopleList;
  openPeopleList=function(uid,type){pushPage('people');return oldOpenPeopleList(uid,type);};
  const oldOpenChat=openChat;
  openChat=function(friendUid,friendName,friendUsername){pushPage('chat');return oldOpenChat(friendUid,friendName,friendUsername);};

  // Existing more/settings/request entry points get a real history entry.
  ['openGroupsBtn','openNotesBtn','openSettingsBtn','openBlockedFromSettings','requestsBtn'].forEach(id=>{
    byId(id)?.addEventListener('click',()=>setTimeout(()=>{
      const n=currentScreenName();if(n!=='home')pushPage(n);
    },0));
  });
  byId('openGamesBtn')?.addEventListener('click',()=>setTimeout(()=>pushPage('games'),0));
  byId('openGamesHomeBtn')?.addEventListener('click',()=>setTimeout(()=>pushPage('games'),0));

  // Browser / Android back. We intentionally use the state we landed on, then render it directly.
  /* legacy popstate router removed by V18 */

  // Normalize old/misplaced profile labels and remove accidental duplicate wording.
  const textFixes={
    'EDIT Bio Edit Karo':'Edit Bio','EDIT Username Edit Karo':'Edit Username',
    'POSTS My Posts':'My Posts','SAVED Saved':'Saved','Saved Save':'Save','Repost Repost':'Repost','Share Share':'Share',
    'OK Following':'Following','OK Accept Karo':'Accept','Chat Message Karo':'Message'
  };
  document.querySelectorAll('button,label').forEach(el=>{let t=el.textContent;for(const[a,b]of Object.entries(textFixes))if(t.includes(a))t=t.replace(a,b);if(t!==el.textContent)el.textContent=t;});

  // Prevent accidental page navigation from dragging media.
  document.querySelectorAll('img,video').forEach(el=>el.draggable=false);
  console.info('RAAZ V16.4 universal navigation + chat/game polish ready');
})();

/* ================= RAAZ V17 - INSTAGRAM STYLE PROFILE / NAV HARDENING ================= */
(function installRaazV17(){
  const $=id=>document.getElementById(id), visible=el=>!!el&&!el.classList.contains('hidden');
  let profileUnsubs=[]; let profileContentTab='posts'; let profileUid=null; let profileIsMine=false; let profilePosts=[]; let profileReels=[];
  const stopProfileRealtime=()=>{profileUnsubs.forEach(fn=>{try{fn&&fn()}catch(_){}});profileUnsubs=[];};
  const fmt=n=>{n=Number(n||0);if(n<1000)return String(n);if(n<1e6)return (n/1000).toFixed(n>=10000?0:1).replace(/\.0$/,'')+'K';if(n<1e9)return (n/1e6).toFixed(n>=1e7?0:1).replace(/\.0$/,'')+'M';return (n/1e9).toFixed(1).replace(/\.0$/,'')+'B';};
  const mediaHtml=(d,reel=false)=>{const src=reel?(d.videoUrl||d.videoBase64||''):(d.imageBase64||'');return src?(reel?`<video src="${escapeHtml(src)}" muted playsinline preload="metadata"></video>`:`<img src="${escapeHtml(src)}" alt="Post" loading="lazy">`):`<div class="profileGridPlaceholder">${escapeHtml(d.caption||d.text||'Post')}</div>`;};

  function updateProfileStatsTotal(items){
    if(!profileIsMine)return;
    const totalViews=items.reduce((a,x)=>a+Number(x.data.viewCount||0),0);
    const totalShares=items.reduce((a,x)=>a+Number(x.data.shareCount||0),0);
    if($('analyticsReach'))$('analyticsReach').textContent=fmt(totalViews);
    if($('analyticsShares'))$('analyticsShares').textContent=fmt(totalShares);
  }

  async function refreshAnalytics(){
    if(!profileIsMine||!profileUid)return;
    try{
      const [ps,rs]=await Promise.all([
        db.collection('posts').where('uid','==',profileUid).limit(100).get(),
        db.collection('reels').where('uid','==',profileUid).limit(100).get()
      ]);
      let likes=0,comments=0,views=0,shares=0;
      const all=[...ps.docs,...rs.docs];
      await Promise.all(all.map(async doc=>{
        const c=doc.ref.collection;
        const [ls,cs]=await Promise.all([c('likes').get(),c('comments').get()]);
        likes+=ls.size;comments+=cs.size;views+=Number(doc.data().viewCount||0);shares+=Number(doc.data().shareCount||0);
      }));
      $('analyticsReach').textContent=fmt(views);$('analyticsLikes').textContent=fmt(likes);$('analyticsComments').textContent=fmt(comments);$('analyticsShares').textContent=fmt(shares);
      $('myPostsCount').textContent=String(ps.size+rs.size);
    }catch(e){showRaazToast?.(e.message||'Analytics load nahi hui','error');}
  }

  function attachContentStats(doc, card, type){
    const likes=doc.ref.collection('likes').onSnapshot(s=>{const el=card.querySelector('.gridLikes');if(el)el.textContent=`L ${fmt(s.size)}`; if(profileIsMine) refreshAnalytics();});
    const comments=doc.ref.collection('comments').onSnapshot(s=>{const el=card.querySelector('.gridComments');if(el)el.textContent=`C ${fmt(s.size)}`; if(profileIsMine) refreshAnalytics();});
    profileUnsubs.push(likes,comments);
  }

  function renderProfileGrid(){
    const grid=$('myProfileGrid')||$('viewProfileGrid'), empty=$('myProfileEmpty')||$('viewProfileEmpty');
    if(!grid||!empty)return;
    const items=profileContentTab==='reels'?profileReels:profilePosts;
    grid.innerHTML=''; empty.classList.toggle('hidden',items.length>0); empty.textContent=profileContentTab==='reels'?'No reels yet.':'No posts yet.';
    items.forEach((item)=>{
      const d=item.data, isReel=profileContentTab==='reels', c=document.createElement('button'); c.type='button'; c.className='profileGridItem'; c.dataset.contentId=item.id;
      c.innerHTML=`${mediaHtml(d,isReel)}<div class="profileGridMeta"><span class="gridLikes">L 0</span><span class="gridComments">C 0</span>${profileIsMine?`<span>Views ${fmt(d.viewCount||0)}</span>`:''}</div>`;
      c.addEventListener('click',()=>{
        if(isReel){raazGoFeature?.(reelsScreen,'reels');setTimeout(()=>document.querySelector(`[data-reel-id="${CSS.escape(item.id)}"]`)?.scrollIntoView({behavior:'smooth',block:'center'}),120);}
        else{raazGoHome?.('feed');setTimeout(()=>document.querySelector(`[data-post-id="${CSS.escape(item.id)}"]`)?.scrollIntoView({behavior:'smooth',block:'center'}),120);}
      });
      grid.appendChild(c); attachContentStats({ref:isReel?db.collection('reels').doc(item.id):db.collection('posts').doc(item.id)},c,isReel?'reel':'post');
    });
    if(profileIsMine)updateProfileStatsTotal(items);
  }

  async function loadProfileContent(uid){
    stopProfileRealtime();
    const postQ=db.collection('posts').where('uid','==',uid).limit(100);
    const reelQ=db.collection('reels').where('uid','==',uid).limit(100);
    let postInit=true,reelInit=true;
    const onData=(snap,isReel)=>{
      const arr=snap.docs.map(d=>({id:d.id,data:d.data()})).sort((a,b)=>(b.data.createdAt?.toMillis?.()||0)-(a.data.createdAt?.toMillis?.()||0));
      if(isReel)profileReels=arr;else profilePosts=arr;
      const postsCount=$('viewPostsCount'); if(postsCount)postsCount.textContent=String(profilePosts.length+profileReels.length);
      const myPosts=$('myPostsCount');if(myPosts)myPosts.textContent=String(profilePosts.length+profileReels.length);
      renderProfileGrid();
      if(profileIsMine && !isReel && postInit){ postInit=false; refreshAnalytics(); } if(profileIsMine && isReel && reelInit){ reelInit=false; refreshAnalytics(); }
    };
    profileUnsubs.push(postQ.onSnapshot(s=>onData(s,false),e=>showRaazToast?.(e.message||'Posts load nahi hui','error')));
    profileUnsubs.push(reelQ.onSnapshot(s=>onData(s,true),e=>showRaazToast?.(e.message||'Reels load nahi hui','error')));
  }

  function setTab(tab){profileContentTab=tab;document.querySelectorAll('.profileProTab').forEach(b=>b.classList.toggle('active',b.dataset.profileTab===tab));renderProfileGrid();}

  async function openMine(){
    const u=auth.currentUser;if(!u)return;
    profileUid=u.uid;profileIsMine=true;profileContentTab='posts';
    const snap=await db.collection('users').doc(u.uid).get(); const d=snap.exists?snap.data():{name:u.displayName||u.email?.split('@')[0]||'RAAZ',username:currentUsername};
    $('profileName').textContent=d.name||currentUserName||'RAAZ';$('profileUsername').textContent='@'+(d.username||currentUsername);$('bioDisplay').textContent=d.bio||'Bio nahi likha hai abhi';$('profileEmail').textContent=u.email||'';
    const a=$('profileAvatar');a.textContent=(d.name||'R').charAt(0).toUpperCase();a.style.backgroundImage=d.photoBase64?`url(${d.photoBase64})`:'none';
    attachFollowStats(u.uid,$('myFollowersCount'),$('myFollowingCount'),myStatsUnsub); await loadProfileContent(u.uid); refreshAnalytics(); showScreen(profileScreen); showRaazBottomNav(true);setActiveRaazNav('profile');
  }
  window.raazOpenMine = openMine;

  async function openOther(uid,data){
    if(!auth.currentUser)return;
    if(uid===auth.currentUser.uid){return openMine();}
    profileUid=uid;profileIsMine=false;profileContentTab='posts'; currentProfileViewUid=uid;currentProfileViewData=data;
    $('viewName').textContent=data.name||'RAAZ User';$('viewUsername').textContent='@'+(data.username||'user');$('viewBio').textContent=data.bio||'Bio nahi likha hai abhi';
    const a=$('viewAvatar');a.textContent=(data.name||'R').charAt(0).toUpperCase();a.style.backgroundImage=data.photoBase64?`url(${data.photoBase64})`:'none';
    $('followBtnArea').innerHTML=''; $('viewActionArea').innerHTML='';
    showScreen(profileViewScreen);showRaazBottomNav(false);setActiveRaazNav('profile');
    attachFollowStats(uid,$('viewFollowersCount'),$('viewFollowingCount'),viewStatsUnsub); await loadProfileContent(uid); await renderFollowButton(uid,data);
    $('viewPostsCount').textContent=String(profilePosts.length+profileReels.length);
  }

  // Replace the old profile renderer with the professional profile.
  profileBtn.addEventListener('click',()=>{openMine().catch(e=>showRaazToast?.(e.message||'Profile load nahi hui','error'));});
  openProfileView=async function(uid,data){ try{ const fresh=await db.collection('users').doc(uid).get(); return openOther(uid,fresh.exists?fresh.data():data||{}); }catch(e){ return openOther(uid,data||{}); } };
  window.openProfileView=openProfileView;

  document.querySelectorAll('.profileProTab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.profileTab||'posts')));
  $('myFollowersStat')?.addEventListener('click',()=>openPeopleList(auth.currentUser.uid,'followers'));
  $('myFollowingStat')?.addEventListener('click',()=>openPeopleList(auth.currentUser.uid,'following'));
  $('myPostsStat')?.addEventListener('click',()=>setTab('posts'));
  $('viewPostsStat')?.addEventListener('click',()=>setTab('posts'));
  $('profileRefreshAnalytics')?.addEventListener('click',refreshAnalytics);
  $('profileSettingsTopBtn')?.addEventListener('click',()=>openRaazSettings());
  $('profileEditActionBtn')?.addEventListener('click',()=>{const p=$('profileEditPanel');p?.classList.toggle('hidden');if(!p?.classList.contains('hidden')){$('newBioInput').value=currentBio||'';$('newUsernameInput').value=currentUsername||'';}});
  $('cancelBioBtn')?.addEventListener('click',()=>{$('profileEditPanel')?.classList.add('hidden');});
  $('profileShareBtn')?.addEventListener('click',async()=>{const u=profileUid||auth.currentUser?.uid;if(!u)return;const url=`${location.href.split('#')[0]}#profile-${u}`;try{if(navigator.share)await navigator.share({title:'RAAZ Profile',text:'RAAZ profile dekho',url});else await navigator.clipboard.writeText(url);showRaazToast?.('Profile link ready hai','success');}catch(e){if(e?.name!=='AbortError')showRaazToast?.(e.message||'Share fail','error');}});

  // Never allow self-follow, even when an old/cached UI is rendered.
  const originalFollow=followUser;
  followUser=async function(targetUid,targetName,targetUsername){if(!auth.currentUser||targetUid===auth.currentUser.uid){showRaazToast?.('Khud ko follow nahi kar sakte.','error');return false;}return originalFollow(targetUid,targetName,targetUsername);};
  window.followUser=followUser;
  const originalRenderFollow=renderFollowButton;
  renderFollowButton=async function(uid,data){if(uid===auth.currentUser?.uid){followBtnArea.innerHTML='';return;}return originalRenderFollow(uid,data);};

  // Add view/share counters without changing the existing feed UI.
  const viewed=new Set();
  function observeContentViews(){
    if(!window.IntersectionObserver)return;
    document.querySelectorAll('.postCard[data-post-id],.reelCard[data-reel-id]').forEach(el=>{
      if(el.dataset.raazViewedBound)return;el.dataset.raazViewedBound='1';
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting||e.intersectionRatio<.6)return;const id=el.dataset.postId||el.dataset.reelId;const key=(el.dataset.postId?'post:':'reel:')+id;if(viewed.has(key))return;viewed.add(key);const col=el.dataset.postId?'posts':'reels';db.collection(col).doc(id).update({viewCount:firebase.firestore.FieldValue.increment(1)}).catch(()=>{});io.unobserve(el);} ),{threshold:[.6]});io.observe(el);
    });
  }
  const oldRenderFeed=renderFeedFromCache;renderFeedFromCache=function(){const r=oldRenderFeed.apply(this,arguments);setTimeout(observeContentViews,250);return r;};window.renderFeedFromCache=renderFeedFromCache;
  window.sharePost=sharePost;
  setInterval(()=>{ if(document.querySelector('.reelCard[data-reel-id]')) observeContentViews(); },1200);

  // Make every person row/profile identity clickable; self remains a normal profile without follow.
  document.addEventListener('click',e=>{
    const row=e.target.closest('.chatListItem,.exploreUser,.postIdentity,.reelOverlay');
    if(!row || row.closest('#chatListPrimary,#chatListSecondary')) return;
    if(e.target.closest('button:not(.postIdentity)')) return;
    const uid=row.dataset.uid||row.querySelector('[data-avatar-uid]')?.dataset.avatarUid||row.closest('[data-uid]')?.dataset.uid;if(!uid)return;
    db.collection('users').doc(uid).get().then(s=>{if(s.exists)openProfileView(uid,s.data());}).catch(()=>{});
  },true);

  // Replace all legacy back-button handlers with one deterministic handler.
  const backIds=['backBtn','profileViewBackBtn','profileBackBtn','requestsBackBtn','blockedBackBtn','peopleListBackBtn','exploreBackBtn','reelsBackBtn','groupsBackBtn','notesBackBtn','settingsBackBtn','gamesBackBtn','ludoPanelBackBtn'];
  backIds.forEach(id=>{const old=$(id);if(!old)return;const b=old.cloneNode(true);old.replaceWith(b);b.type='button';b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();deterministicBack();});});
  function deterministicBack(){
    const overlays=['storyViewersOverlay','storyViewerOverlay','reelCommentsOverlay','createPostOverlay','createStoryOverlay','createReelOverlay','createGroupOverlay','notificationsOverlay','postActionOverlay','chatItemMenuOverlay','createActionOverlay','raazMoreOverlay'];
    for(const id of overlays){const x=$(id);if(visible(x)){x.classList.add('hidden');document.body.classList.remove('overlayOpen');return;}}
    if(visible(gamesScreen)){if(visible(ludoPanel)||visible(game2048Panel)||visible(rushPanel)){document.querySelector('.gamePanel:not(.hidden) .gamePanelBackBtn')?.click();return;}raazGoHome(lastHomeTab||'feed');return;}
    if(visible(chatScreen)){try{unsubscribeMessages?.();unsubscribeFriendStatus?.();unsubscribeChatDoc?.();}catch(_){}currentChatId=null;currentFriendUid=null;raazGoHome(lastHomeTab||'feed');return;}
    if(visible(peopleListScreen)){if(currentProfileViewUid){openProfileView(currentProfileViewUid,currentProfileViewData);return;}openMine();return;}
    if(visible(blockedScreen)){openMine();return;}
    if(visible(profileViewScreen)||visible(profileScreen)||visible(requestsScreen)||visible(exploreScreen)||visible(reelsScreen)||visible(groupsScreen)||visible(notesScreen)||visible(settingsScreen)){raazGoHome(lastHomeTab||'feed');return;}
  }
  window.raazGoBack=deterministicBack;window.raazUniversalBack=deterministicBack;
  /* legacy popstate router removed by V18 */
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();deterministicBack();}},true);

  // Initial profile hash support and PWA-safe cache bust.
  const link=document.querySelector('link[rel="stylesheet"]');if(link)link.href='style.css?v=19.0.0';
  console.info('RAAZ V18 profile + analytics + navigation hardening ready');
})();


/* ================= RAAZ V18 - SINGLE NAVIGATION ROUTER ================= */
(function(){
  const screens=[authScreen,homeScreen,chatScreen,profileScreen,profileViewScreen,requestsScreen,blockedScreen,peopleListScreen,document.getElementById('exploreScreen'),document.getElementById('reelsScreen'),document.getElementById('groupsScreen'),document.getElementById('notesScreen'),document.getElementById('settingsScreen'),document.getElementById('gamesScreen')].filter(Boolean);
  const names=['auth','home','chat','profile','profileView','requests','blocked','people','explore','reels','groups','notes','settings','games'];
  const keyFor=new Map(screens.map((e,i)=>[e,names[i]]));
  const elFor=Object.fromEntries(screens.map((e,i)=>[names[i],e]));
  const overlays=['storyViewersOverlay','storyViewerOverlay','reelCommentsOverlay','createPostOverlay','createStoryOverlay','createReelOverlay','createGroupOverlay','notificationsOverlay','postActionOverlay','chatItemMenuOverlay','createActionOverlay','raazMoreOverlay','messageReactionPicker'];
  const visible=e=>!!e&&!e.classList.contains('hidden');
  let restoring=false;
  const current=()=>{for(const e of screens)if(visible(e))return keyFor.get(e)||'home';return 'home'};
  const closeOverlay=()=>{for(const id of overlays){const e=document.getElementById(id);if(visible(e)){e.classList.add('hidden');document.body.classList.remove('overlayOpen');return true}}return false};
  const originalShow=showScreen;
  function show(e){restoring=true;try{originalShow(e)}finally{setTimeout(()=>restoring=false,0)}}
  showScreen=function(e){const k=keyFor.get(e)||'home';if(!restoring&&auth.currentUser&&k!=='auth'&&current()!==k){try{history.pushState({raazV171:true,raazScreen:k},'',location.href.split('#')[0]+'#raaz-'+k)}catch(_){}}originalShow(e)};
  window.raazPushHistory=()=>{};
  function renderKey(k){
    restoring=true;
    try{
      if(k==='home')return originalShow(homeScreen);
      if(k==='profile'){ if(typeof openMyProfileV15==='function')return openMyProfileV15(); }
      if(k==='profileView'){ if(currentProfileViewUid&&typeof openProfileView==='function')return openProfileView(currentProfileViewUid,currentProfileViewData||{}); return originalShow(homeScreen); }
      if(k==='people')return originalShow(peopleListScreen);
      if(k==='requests'){loadRequestsScreen?.();return originalShow(requestsScreen)}
      if(k==='blocked'){loadBlockedScreen?.();return originalShow(blockedScreen)}
      if(k==='explore'){raazGoFeature(exploreScreen,'explore');renderExplore?.('');return}
      if(k==='reels'){raazGoFeature(reelsScreen,'reels');listenForReels?.();return}
      if(k==='groups'){raazGoFeature(groupsScreen,'more');listenForGroups?.();return}
      if(k==='notes'){raazGoFeature(notesScreen,'more');listenForNotes?.();return}
      if(k==='settings'){raazGoFeature(settingsScreen,'more');loadRaazSettings?.();return}
      if(k==='games'){openGames?.();return}
    }finally{setTimeout(()=>restoring=false,0)}
  }
  if(!history.state?.raazV171){try{history.replaceState({raazV171:true,raazScreen:current()},'',location.href.split('#')[0]+'#raaz-'+current())}catch(_){}}
  function goBack(){
    if(closeOverlay())return;
    const lp=document.getElementById('ludoPanel'),p2=document.getElementById('game2048Panel'),st=document.getElementById('rushPanel'),g=document.getElementById('gamesScreen');
    if(visible(g)&&(visible(lp)||visible(p2)||visible(st))){lp?.classList.add('hidden');p2?.classList.add('hidden');st?.classList.add('hidden');document.getElementById('gameCards')?.classList.remove('hidden');return}
    if(history.state?.raazV171&&history.state.raazScreen!=='home'){try{history.back();return}catch(_){}}
    if(current()==='home')return;
    renderKey('home');
  }
  window.raazGoBack=goBack;window.raazUniversalBack=goBack;
  const ids=['backBtn','profileViewBackBtn','profileBackBtn','requestsBackBtn','blockedBackBtn','peopleListBackBtn','exploreBackBtn','reelsBackBtn','groupsBackBtn','notesBackBtn','settingsBackBtn','gamesBackBtn','ludoPanelBackBtn'];
  ids.forEach(id=>{const old=document.getElementById(id);if(!old)return;const b=old.cloneNode(true);old.replaceWith(b);b.type='button';b.setAttribute('aria-label','Back');b.title='Back';b.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();goBack()},{capture:true})});
  window.addEventListener('popstate',e=>{e.stopImmediatePropagation();if(closeOverlay())return;renderKey(e.state?.raazV171?e.state.raazScreen:'home')},{capture:true});
  // Every identifiable user surface can open its profile.
  document.addEventListener('click',e=>{const t=e.target.closest('[data-profile-uid]');if(!t)return;const uid=t.dataset.profileUid;if(!uid||t.closest('button:not([data-profile-uid])'))return;e.preventDefault();e.stopPropagation();db.collection('users').doc(uid).get().then(s=>{if(s.exists)openProfileView(uid,s.data())}).catch(err=>showRaazToast?.(err.message||'Profile load nahi hui','error'))},{capture:true});
  const oldFollow=followUser;followUser=async function(uid,name,username){if(!auth.currentUser||uid===auth.currentUser.uid){showRaazToast?.('Khud ko follow nahi kar sakte.','error');return false}return oldFollow(uid,name,username)};window.followUser=followUser;
  console.info('RAAZ V18 single navigation router ready');
})();

/* ================= RAAZ V18 - PROFILE MESSAGE SYSTEM REBUILD ================= */
(function installRaazV18MessageSystem(){
  const $ = id => document.getElementById(id);
  const toast = (msg, type='info') => { try { window.showRaazToast?.(msg, type); } catch(_) { alert(msg); } };
  const esc = s => (typeof escapeHtml === 'function' ? escapeHtml(String(s ?? '')) : String(s ?? '').replace(/[&<>\"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[c])));

  async function getMessageState(uid){
    const me = auth.currentUser?.uid;
    if(!me || !uid || me === uid) return {chat:false,sent:false,received:false};
    const chatId = getChatId(me, uid);
    const [chatDoc, sentDoc, receivedDoc] = await Promise.all([
      db.collection('users').doc(me).collection('chatsList').doc(chatId).get(),
      db.collection('users').doc(me).collection('requestsSent').doc(uid).get(),
      db.collection('users').doc(me).collection('requestsReceived').doc(uid).get()
    ]);
    return {chat:chatDoc.exists, sent:sentDoc.exists, received:receivedDoc.exists};
  }

  async function profileMessage(uid, data, btn){
    const me = auth.currentUser?.uid;
    if(!me || !uid || uid === me) return;
    const old = btn?.textContent || 'Message';
    if(btn){ btn.disabled = true; btn.textContent = 'Please wait...'; }
    try{
      const state = await getMessageState(uid);
      if(state.chat){
        openChat(uid, data.name || 'User', data.username || 'user');
        return;
      }
      if(state.received){
        await acceptRequest(uid, data.name || 'User', data.username || 'user');
        openChat(uid, data.name || 'User', data.username || 'user');
        return;
      }
      if(state.sent){
        toast('Message request already sent.', 'info');
        return;
      }
      await sendMessageRequest(uid, data.name || 'User', data.username || 'user');
      toast('Message request sent.', 'success');
      await renderFollowButton(uid, data);
      await renderProfileViewActions(uid, data);
    }catch(e){
      console.error('RAAZ V18 profile message:', e);
      toast(e?.message || 'Message action failed.', 'error');
    }finally{
      if(btn){ btn.disabled = false; btn.textContent = old; }
    }
  }

  async function v18RenderFollowButton(uid, data){
    const area = $('followBtnArea');
    if(!area) return;
    const me = auth.currentUser?.uid;
    if(!me || uid === me){ area.innerHTML = ''; return; }

    let following = false;
    try{
      following = (await db.collection('users').doc(me).collection('following').doc(uid).get()).exists;
    }catch(e){ console.warn('Follow state:', e); }

    area.innerHTML = `
      <button type="button" id="v18FollowBtn" class="followBtn ${following ? 'following' : ''}">${following ? 'Following' : '+ Follow'}</button>
      <button type="button" id="v18MessageBtn" class="followBtn profileMessageBtn">Message</button>
    `;

    $('v18FollowBtn')?.addEventListener('click', async () => {
      try{
        if(following) await unfollowUser(uid);
        else await followUser(uid, data.name || 'User', data.username || 'user');
        await v18RenderFollowButton(uid, data);
      }catch(e){ toast(e?.message || 'Follow action failed.', 'error'); }
    });
    $('v18MessageBtn')?.addEventListener('click', e => profileMessage(uid, data, e.currentTarget));
  }

  async function v18RenderProfileActions(uid, data){
    const area = $('viewActionArea');
    if(!area) return;
    const me = auth.currentUser?.uid;
    if(!me || uid === me){ area.innerHTML=''; return; }
    try{
      const state = await getMessageState(uid);
      if(state.chat){
        area.innerHTML = '<span class="v18ProfileState">Connected — open chat from Message</span>';
      }else if(state.received){
        area.innerHTML = `
          <button type="button" id="v18AcceptMessageBtn" class="viewActionBtn">Accept & Message</button>
          <button type="button" id="v18DeclineMessageBtn" class="linkBtn">Decline request</button>`;
        $('v18AcceptMessageBtn')?.addEventListener('click', async e => profileMessage(uid,data,e.currentTarget));
        $('v18DeclineMessageBtn')?.addEventListener('click', async () => {
          try{ await declineRequest(uid); await v18RenderProfileActions(uid,data); await v18RenderFollowButton(uid,data); }
          catch(e){ toast(e?.message || 'Request decline failed.', 'error'); }
        });
      }else if(state.sent){
        area.innerHTML = `
          <span class="v18ProfileState">Message request sent</span>
          <button type="button" id="v18CancelMessageBtn" class="linkBtn">Cancel request</button>`;
        $('v18CancelMessageBtn')?.addEventListener('click', async () => {
          try{
            const b = db.batch();
            b.delete(db.collection('users').doc(me).collection('requestsSent').doc(uid));
            b.delete(db.collection('users').doc(uid).collection('requestsReceived').doc(me));
            await b.commit();
            await v18RenderProfileActions(uid,data);
          }catch(e){ toast(e?.message || 'Request cancel failed.', 'error'); }
        });
      }else{
        area.innerHTML = '<span class="v18ProfileState">Message request bhejkar chat start karein.</span>';
      }
    }catch(e){
      console.error('RAAZ V18 profile actions:',e);
      area.innerHTML = `<span class="v18ProfileState">${esc(e?.message || 'Message status unavailable')}</span>`;
    }
  }

  // Replace the old profile action renderer so it never reads another user's private blocked document.
  window.renderProfileViewActions = v18RenderProfileActions;
  renderProfileViewActions = v18RenderProfileActions;
  window.renderFollowButton = v18RenderFollowButton;
  renderFollowButton = v18RenderFollowButton;

  // Ensure every profile open gets the same fresh, deterministic action UI.
  const originalOpenProfileViewV18 = openProfileView;
  openProfileView = async function(uid, data){
    try{
      const snap = await db.collection('users').doc(uid).get();
      const fresh = snap.exists ? snap.data() : (data || {});
      const result = await originalOpenProfileViewV18(uid, fresh);
      await v18RenderFollowButton(uid, fresh);
      await v18RenderProfileActions(uid, fresh);
      return result;
    }catch(e){
      console.error('RAAZ V18 profile open:',e);
      try { return originalOpenProfileViewV18(uid, data || {}); } catch(_) {}
    }
  };
  window.openProfileView = openProfileView;

  // Make the profile action row unmistakable on small screens.
  const style = document.createElement('style');
  style.textContent = `
    .profileProActions{display:grid!important;grid-template-columns:1fr 1fr!important;gap:10px!important;width:100%!important}
    .profileProActions .followBtn{min-height:44px!important;width:100%!important}
    .profileMessageBtn{background:#17191e!important;border:1px solid #444954!important;color:#fff!important}
    .v18ProfileState{display:block;width:100%;padding:9px 4px;color:#8f949e;font-size:12px;text-align:center}
    .profileProActionsSecondary{width:100%!important}
    .profileProActionsSecondary .viewActionBtn,.profileProActionsSecondary .linkBtn{max-width:100%;}
  `;
  document.head.appendChild(style);
  console.info('RAAZ V18 profile message system ready');
})();

/* RAAZ V20 final professional chat recovery + profile layout polish */


/* ================= RAAZ V24 - CLEAN CANONICAL NAVIGATION + PROFILE/CHAT RECOVERY ================= */
(function installRaazV24(){
  const $=id=>document.getElementById(id);
  const safeToast=(m,t='error')=>{try{window.showRaazToast?.(m,t);}catch(_){}};

  // Remove every previously attached direct nav handler by replacing each button once.
  document.querySelectorAll('#raazBottomNav .raazNav').forEach(oldBtn=>{
    const btn=oldBtn.cloneNode(true);
    oldBtn.replaceWith(btn);
    btn.type='button';
    btn.addEventListener('click',e=>{
      e.preventDefault();
      e.stopImmediatePropagation();
      const name=btn.dataset.raazNav;
      if(!auth.currentUser||!name)return;
      try{
        // Use the V18 router, which is now the only navigation router left.
        if(typeof raazNavigate==='function') raazNavigate(name);
      }catch(err){
        console.error('RAAZ V24 navigation',name,err);
        safeToast(err?.message||'Screen open nahi ho paayi.','error');
      }
    },false);
  });

  // Ensure the professional profile is always used, including history/back restoration.
  const oldProfileEntry=window.openMyProfileV15;
  window.openMyProfileV15=function(){
    if(typeof window.raazOpenMine==='function')return window.raazOpenMine();
    return oldProfileEntry?.();
  };

  // A chat never needs the optional shared parent metadata to display messages.
  // The user's private chatsList entry is the access anchor used by the Firestore rules.
  const oldOpenChat=window.openChat||openChat;
  window.openChat=async function(friendUid,friendName,friendUsername){
    if(!auth.currentUser||!friendUid||friendUid===auth.currentUser.uid)return;
    return oldOpenChat(friendUid,friendName,friendUsername);
  };

  console.info('RAAZ V24 clean canonical navigation + profile/chat recovery ready');
})();
