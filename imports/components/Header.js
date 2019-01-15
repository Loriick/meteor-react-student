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
          <Link to="/addnotes">Add a note</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        {isLogged && (
        <li>
          <Link to="/logout">Log Out</Link>
        </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
