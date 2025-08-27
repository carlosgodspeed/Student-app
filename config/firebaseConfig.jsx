// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS4LVPQCBrQ0xvw1QhnytCnvNLdDCm-xA",
  authDomain: "projeto-estudante-4b75f.firebaseapp.com",
  projectId: "projeto-estudante-4b75f",
  storageBucket: "projeto-estudante-4b75f.firebasestorage.app",
  messagingSenderId: "211849176787",
  appId: "1:211849176787:web:2ff784ba9483dc064e5626",
  measurementId: "G-WPYFJKBRVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=initializeAuth(app,{
  persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
export const db = getFirestore(app);