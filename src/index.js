import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./resets.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDifmBufgqQ3KFXbt_IyX7vkYtdlS94KsA",
  authDomain: "chat-react-17616.firebaseapp.com",
  projectId: "chat-react-17616",
  storageBucket: "chat-react-17616.appspot.com",
  messagingSenderId: "838212354215",
  appId: "1:838212354215:web:4c1b7407483b6d7604db82",
});
export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();
console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{ firebase, auth, firestore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
