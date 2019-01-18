import React from "react";
import { Link } from "react-router-dom";


let headerContent = (page , eventClick , logout) => {
  if(page === 'signIn'){
    return(
      <li className="header-login">
        <p>Vous n'avez pas de compte ?</p>
        <Link to="/signup" onClick={eventClick}>Inscrivez-vous</Link>
      </li>
    )
  } else if(page === 'signUp'){
    return(
      <li className="header-login">
        <p>Vous avez déjà un compte ?</p>
        <Link to="/" onClick={eventClick}>Connectez-vous</Link>
      </li>
    )
  } else {
    return(
      <li className="header-login">
        <Link to="/" onClick={logout}>Se déconnecter</Link>
      </li>
    )
  }
} 

const Header = ({ name = "Admin", logout, page, eventClick, isLogged }) => {
  return (
    <div className={"header" + " " + (page !== 'signIn' && page !== 'signUp' ? "header-dashboard" : "")}>
      <nav className="header-menu">  
      {page !== 'signIn' && page !== 'signUp' ?
        <Link to="/dashboard">
          <img src='assets/img/logo-user.svg' alt="logo meteor" className="header-img"/>
        </Link>

        :
        <Link to="/">
          <img src='assets/img/logo.svg' alt="logo meteor" className="header-img"/>
        </Link>
      }
        <ul>
        {headerContent(page , eventClick , logout)}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
