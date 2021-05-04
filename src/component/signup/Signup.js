import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router";
import { userContext } from "../../App";
import { createAccount, firebaseInit, handleFacebookLogin } from "../loginManager";
import "./Signup.css";

const Signup = () => {
  let history = useHistory();

  const [user, setUser] = useContext(userContext);

  firebaseInit();
  const warningLabel = document.getElementById("Warning-message");
  const signupHandle = () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const re_password = document.getElementById("re-password").value;

    let message = "";

    if (!(email && password && re_password && name && phone)) {
      message = "All field Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      message = "Enter a valid Email.";
    } else if (password.length < 6) {
      message = "Password should be at least 6 character";
    } else if (password !== re_password) {
      message = "Password didn't matched.";
    } else {
      createAccount(email, password, name, phone, setUser);
    }
  };
  if (user.displayName || user.email) {
    console.log("if ", user);
    history.replace("/");
  } else {
    console.log("else", user);

    warningLabel.innerText = "Error! Check internet connection, and make sure email not already used.";
  }

  return (
    <div className='container py-5'>
      <div className='mx-auto w-75 bg-light border-rounded text-center p-5'>
        <div>
          <h2 className='display-6 mb-4'>Sign Up</h2>
          <label id='Warning-message' className='label p-2 m-2 text-danger'></label>

          <div className='mb-3'>
            <input type='text' id='name' className='form-control' placeholder='Name' />
          </div>
          <div className='mb-3'>
            <input type='text' id='email' className='form-control' placeholder='Email' />
          </div>
          <div className='mb-3'>
            <input type='text' id='phone' className='form-control' placeholder='Phone No' />
          </div>
          <div className='mb-3'>
            <input type='password' id='password' className='form-control' placeholder='Password' />
          </div>
          <div className='mb-3'>
            <input type='password' id='re-password' className='form-control' placeholder='Re enter password' />
          </div>

          <div className='py-3'>
            <button className='btn btn-primary me-3' onClick={() => signupHandle(setUser)}>
              Sign up Now
            </button>
            <button
              className='btn btn-secondary me-3'
              onClick={() => {
                handleFacebookLogin(setUser);
              }}>
              {/* <FontAwesomeIcon icon={faFacebook} /> &nbsp; Facebook */}
              Facebook Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
