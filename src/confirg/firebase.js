

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkB-HG95PgHwu80SiQwwgBMTc1mF1xHO8",
  authDomain: "admin-app-7ecb1.firebaseapp.com",
  projectId: "admin-app-7ecb1",
  storageBucket: "admin-app-7ecb1.appspot.com",
  messagingSenderId: "849440048422",
  appId: "1:849440048422:web:13e7df2fcb3756181b2de7",
  measurementId: "G-SQFNVBEHGM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export{auth,db};