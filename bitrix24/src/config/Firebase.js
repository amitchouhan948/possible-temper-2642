// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbFpCF7GWKUVatYYUMsHLcuWBZKZKSYWo",
  authDomain: "dipakbitrix24authentication.firebaseapp.com",
  projectId: "dipakbitrix24authentication",
  storageBucket: "dipakbitrix24authentication.appspot.com",
  messagingSenderId: "905170066650",
  appId: "1:905170066650:web:be587e0378fa7aedfd99e3",
  measurementId: "G-N7W9LSFX1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth(app)
export const provider =new GoogleAuthProvider()
export const provider1 = new GithubAuthProvider();