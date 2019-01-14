import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isLogged, name = "Admin" }) => {
  return (
    <nav className="menu">
      <h3>
        <Link to="/">Home</Link>
      </h3>
      <ul>
        <li>
          {isLogged ? (
            <span>hello {name}</span>
          ) : (
            <Link to="/signin">Sign in</Link>
          )}
        </li>
        <li>
          {isLogged ? (
            <span to="/">Log out</span>
          ) : (
            <Link to="/signup">Sign up</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
