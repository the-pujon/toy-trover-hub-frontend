import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";

const useAuth = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //registration
  const registrationWithEmail = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login with email
  const loginWithEmail = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google
  const loginWithGoogle = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  //login with github
  const loginWithGithub = () => {
    setLoading(true);

    return signInWithPopup(auth, githubProvider);
  };

  //logout
  const logOut = () => {
    return signOut(auth);
  };

  //onState
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setLoggedUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });

    return () => {
      unSub();
    };
  }, []);

  return {
    registrationWithEmail,
    loginWithEmail,
    loginWithGoogle,
    loginWithGithub,
    logOut,
    loggedUser,
    loading,
  };
};

export default useAuth;
