import React from 'react';

const Signin = ({handleSubmit , handleChange}) => {
    return(
        <div className="form">
          <h1 className="form-title">
            Bienvenue sur <span>Meteor School</span>
          </h1>
          <h4 className="form-subtitle">Connectez-vous</h4>
          <form onSubmit={handleSubmit} className="form-container">
          <div className="form-shadow">
  
            <div className="form-input">
              <label>Adresse Email</label>
              <input type="text" name="email" onChange={handleChange} />
            </div>
            <div className="form-input">
              <label>Mot de passe</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-footer">
            <a href="#">Mot de passe oublié ?</a>
            <input
              type="submit"
              value="Se connecter"
              className="btn btn-blue"
            />
          </div>
          </form>
        </div>    
    )
}

export default Signin;
