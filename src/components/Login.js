import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://xboxwire.thesourcemediaassets.com/sites/2/2023/05/Background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.png" alt="Netflix Login" className="w-full" />

      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 rounded-lg text-white bg-opacity-80">  
        <h1 className="text-3xl font-bold mb-6 py-4 ">Sign In</h1>
        <input type="text" placeholder="Email address" className="p-4 my-4 rounded w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-4 my-4 rounded w-full bg-gray-700" />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
        <p className="py-4 my-4 text-gray-300" onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
