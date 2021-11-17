import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./resets.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAkKczJIAfVtoqZivi5AhzySS2CAuGQO7o",
    authDomain: "my-app-a6203.firebaseapp.com",
    projectId: "my-app-a6203",
    storageBucket: "my-app-a6203.appspot.com",
    messagingSenderId: "807454670876",
    appId: "1:807454670876:web:eb253eec447f82d7971fd9",
});
const auth = firebase.auth();
const firestore = firebase.firestore();
export const Context = createContext(null);

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{ firebase, auth, firestore }}>
            <App />
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
