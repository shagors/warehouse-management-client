// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzJA__jeHjnzr2uA0WJteR9ckR81GkpUk",
    authDomain: "warehouse-management-45071.firebaseapp.com",
    projectId: "warehouse-management-45071",
    storageBucket: "warehouse-management-45071.appspot.com",
    messagingSenderId: "536144584598",
    appId: "1:536144584598:web:553049b82a3768dac087b7"

    // apiKey:process.env.REACT_APP_apiKey,
    // authDomain:process.env.REACT_APP_authDomain,
    // projectId:process.env.REACT_APP_projectId,
    // storageBucket:process.env.REACT_APP_storageBucket,
    // messagingSenderId:process.env.REACT_APP_messagingSenderId,
    // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;