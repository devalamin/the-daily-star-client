// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm9WXAAVVvDNHV1duwSTfhRozROsTLF_s",
    authDomain: "the-daily-star-fc1bb.firebaseapp.com",
    projectId: "the-daily-star-fc1bb",
    storageBucket: "the-daily-star-fc1bb.appspot.com",
    messagingSenderId: "427895122880",
    appId: "1:427895122880:web:d32a3e274b20909febf625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;