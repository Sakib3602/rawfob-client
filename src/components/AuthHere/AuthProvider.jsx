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
import useAxiosPublic from "../../useAxiosPublic";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [person,setPerson] = useState('')
  const [loading,setLoading] = useState(true)
  const axiosPublic = useAxiosPublic()
 

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

        const userInfo = {email : user.email}
        axiosPublic.post("/jwt", userInfo)
        .then((res)=>{
          if(res.data.token){
            localStorage.setItem('accessToken',res.data.token)
          }

        })
        setPerson(user)
      setLoading(false)
      }else{
        localStorage.removeItem('accessToken')
        setPerson('')
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
    loading,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
