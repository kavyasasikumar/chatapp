import React from "react";
import firebase from "firebase";
import { auth } from "../firebases";

export default function SingIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <button onClick={signInWithGoogle}>SingIn</button>
    </div>
  );
}
