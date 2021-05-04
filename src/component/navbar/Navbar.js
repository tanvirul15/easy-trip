import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useContext(userContext);
  let destinationPath = user.displayName || user.email ? "/" : "/login";
  return (
    <div>
      <div className='container'>
        <div className='nav-bar'>
          <Link to='/'>
            <h2 className='brand'>Easy Trip</h2>
          </Link>

          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to={destinationPath}>
              <li>Destination</li>
            </Link>
            <li>Blog</li>
            <li>Contact</li>
            {user.displayName ? (
              <h6 className='mx-3 border p-2'>{user.displayName}</h6>
            ) : (
              <Link to='/login'>
                <button className='btn btn-warning'>Log In</button>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
