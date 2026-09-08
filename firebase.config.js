import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBu6hyvkNzsAxhcXulVkAxseMBi62epcos",
  authDomain: "ecommerce-user-eb35a.firebaseapp.com",
  projectId: "ecommerce-user-eb35a",
  storageBucket: "ecommerce-user-eb35a.firebasestorage.app",
  messagingSenderId: "272874151947",
  appId: "1:272874151947:web:a3b32bb33c4e5d114ce70e"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getDatabase(app)

export {auth,db}