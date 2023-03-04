
import { getApps,getApp,initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_APP_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MESUREMENT_ID
  };

const app=getApps.length>0?getApp():initializeApp(firebaseConfig)
const firestore=getFirestore(app)
const Storage=getStorage(app)

export {app,firestore,Storage}