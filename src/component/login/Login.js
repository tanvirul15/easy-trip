import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./Login.css";
import { firebaseInit, handleFacebookLogin, handleGoogleLogin, logInExistingUser } from "../loginManager";
import { userContext } from "../../App";
const Login = () => {
  firebaseInit();

  const [user, setUser] = useContext(userContext);
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  console.log(location);

  const handleLogIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const warningLabel = document.getElementById("Warning-message");

    let message = "";
    if (!(email && password)) {
      message = "Email/Password cann't be empty";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      message = "Enter a valid Email.";
    } else if (password.length < 6) {
      message = "Password should be at least 6 character";
    } else {
      logInExistingUser(email, password, setUser);
    }
    warningLabel.innerText = message;
  };

  if (user.email || user.displayName) history.replace("/");

  return (
    <div className='container py-5'>
      <div className='mx-auto w-75 bg-light border-rounded text-center p-5'>
        <div>
          <h1 className='display-4 mb-4'>Log In</h1>

          <label id='Warning-message' className='label p-2 m-2 text-danger'></label>
          <div className='mb-3'>
            <input type='text' id='email' className='form-control' placeholder='Email/Username' />
          </div>
          <div className='mb-3'>
            <input type='password' id='password' className='form-control' placeholder='Password' />
          </div>
          <div className='py-3'>
            <button className='btn btn-primary me-3' onClick={handleLogIn}>
              Log In
            </button>
            <button className='btn btn-secondary me-3' onClick={() => handleFacebookLogin(setUser)}>
              {/* <FontAwesomeIcon icon={faFacebook} /> &nbsp; Facebook */}
              Facebook
            </button>
          </div>
          <Link to='/signup'>Create New Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
