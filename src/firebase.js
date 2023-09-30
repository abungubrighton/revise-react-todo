import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseApp = {
    apiKey: "AIzaSyBNGmfuCBHOyP82TgF9k5j26T2lpUM56mM",

    authDomain: "todoapp-f3828.firebaseapp.com",
  
    projectId: "todoapp-f3828",
  
    storageBucket: "todoapp-f3828.appspot.com",
  
    messagingSenderId: "383542627639",
  
    appId: "1:383542627639:web:4fcc54fc198faa786b9eb2",
  
    measurementId: "G-ED956N53T6"
  
};


export const app =   initializeApp (firebaseApp);
export const  db = getFirestore(app);