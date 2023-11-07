import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPTMK2109hfrcJqc2HdokuYoIN_91707Y",
  authDomain: "voice-news-app-56321.firebaseapp.com",
  projectId: "voice-news-app-56321",
  storageBucket: "voice-news-app-56321.appspot.com",
  messagingSenderId: "295179824587",
  appId: "1:295179824587:web:56260535a7eea5cb5b1a4e",
  measurementId: "G-PVDR7GN8QF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;