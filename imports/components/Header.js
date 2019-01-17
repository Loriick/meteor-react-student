import React from "react";
import { Link } from "react-router-dom";

const Header = ({name = "Admin" , logout , page , eventClick}) => {
  return (
    <div className="header">
      <nav className="header-menu">
        <Link to="/">
          <img src='assets/img/logo.svg' alt="logo meteor"/>
        </Link>
        <ul>
          {/* <li>
            <Link to="/addnotes">Add a note</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          {isLogged && (
          <li>
            <Link to="/logout">Log Out</Link>
          </li>
          )} */}
          {page === 'signIn' ?
            <li className="header-login">
              <p>Vous n'avez pas de compte ?</p>
              <Link to="/signup">Inscrivez-vous</Link>
            </li>
            :
            <li className="header-login">
              <p>Vous avez déjà un compte ?</p>
              <Link to="/" onClick={eventClick}>Connectez-vous</Link>
            </li>
          }
        </ul>
      </nav>
    </div>
  );
};

export default Header;
