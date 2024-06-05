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
  const [loading,setLoading] = useState(true)
 

  const emailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailPasswordSignUp = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserData = (name, image) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // google
  const googleText = ()=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  // logout
  function logout() {
    setLoading(true)
    return signOut(auth);
  }

  // onAuth
  useEffect(() => {
    const DeleteIt = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        console.log("on auth", user);
        setPerson(user)
      }
      setLoading(false)
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
    loading,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
