const firebaseConfig = {
  apiKey: "AIzaSyAARXMEJobScjWMcXQW7ev0yT1SnL_cRj4",
  authDomain: "raaz-chat-baedf.firebaseapp.com",
  projectId: "raaz-chat-baedf",
  storageBucket: "raaz-chat-baedf.firebasestorage.app",
  messagingSenderId: "1032992366982",
  appId: "1:1032992366982:web:5642b4001b5ec7bd06cc07"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
