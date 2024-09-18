import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyCdITy3yq0woxNDfIqrE1zCYI_TIoq3XP0",
authDomain: "ai-flashcards-f552a.firebaseapp.com",
projectId: "ai-flashcards-f552a",
storageBucket: "ai-flashcards-f552a.appspot.com",
messagingSenderId: "812209660988",
appId: "1:812209660988:web:b00a28bafe838bdcbb8f39",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;