import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [person,setPerson] = useState('')
 

  const emailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPasswordSignUp = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserData = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // google
  const googleText = ()=>{
    return signInWithPopup(auth, provider)
  }

  // logout
  function logout() {
    return signOut(auth);
  }

  // onAuth
  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("on auth", user);
        setPerson(user)
      }
    });

    return () => {
      DeleteIt();
    };
  }, []);


  const info = {
    emailPassword,
    emailPasswordSignUp,
    logout,
    updateUserData,
    person,
    googleText,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
