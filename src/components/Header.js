import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });

    //unssubscribe on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGPTSearchClick = () => {
    //Toggle GPT Search component visibility
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 flex justify-between z-50">
      <img
        src={LOGO}
        alt="Netflix Logo"
        className="w-36"
      />
      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 mx-4 mb-4 bg-purple-800 text-white font-bold rounded-lg" onClick={handleGPTSearchClick}>
            {showGPTSearch ? "HomePage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12"
            alt="userIcon"
            src={USER_ICON}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
