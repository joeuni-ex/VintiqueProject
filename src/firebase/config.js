import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsbN7th-UUVhLGZtXpz3a9qQvhrC-XBlk",
  authDomain: "vintique-b9343.firebaseapp.com",
  projectId: "vintique-b9343",
  storageBucket: "vintique-b9343.appspot.com",
  messagingSenderId: "199826140725",
  appId: "1:199826140725:web:b3c9424e82468f88dd0b7c",
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGEING_SENDERID,
  // appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 파이어스토어 DB사용
const db = getFirestore(app);

// 스토리지 사용
const storage = getStorage(app);

export { db, storage };
