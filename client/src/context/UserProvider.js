import React from 'react'
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebaseConfig.js";


export const UserContext = React.createContext();


const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};


function UserProvider(props) {

    const { user, signOut, signInWithGoogle } = props;

    return (
       <UserContext.Provider
      value={{
        user,
        signOut,
        signInWithGoogle
      }}
    >
      {props.children}
    </UserContext.Provider>
    )

}


export default withFirebaseAuth({ providers, firebaseAppAuth })(UserProvider)

