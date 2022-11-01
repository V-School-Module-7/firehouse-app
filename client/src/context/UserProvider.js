import React from 'react'
import withFirebaseAuth from "react-with-firebase-auth";
// import * as firebase from "firebase/app";
import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from "../firebaseConfig.js";

export const UserContext = React.createContext();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

export const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

function UserProvider(props) {
  
  const { user, signOut, signInWithGoogle } = props;
  
  function createUserDocument() {
    //grabbing current user id
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        //reference document
          db.collection("users").doc(user.uid).set({
            email: user.email,
            displayName: user.displayName
          })
          // console.log(user, "userObj")
        } else {
          // User not logged in or has just logged out.
          if(!user) return;
        }
    });
  }

    return (
      <UserContext.Provider
      value={{
        user,
        signOut,
        signInWithGoogle,
        createUserDocument,
        db
      }}
    >
      {props.children}
    </UserContext.Provider>
    )

}


export default withFirebaseAuth({ providers, firebaseAppAuth })(UserProvider)

