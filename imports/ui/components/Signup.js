import React from 'react';

const Signup = ({handleSubmit , handleChange}) => {
    return(
        <div className="form">
            <h1 className="form-title">
              Bienvenue sur <span>Meteor School</span>
            </h1>
            <h4 className="form-subtitle">Inscrivez-vous</h4>
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-shadow">
                <div className="form-input">
                  <label>Nom</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-input">
                  <label>Prénom</label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-input">
                  <label>Adresse Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-input">
                  <label>Mot de Passe</label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-footer form-footer_right">
                <input type="submit" value="Créer votre compte" className="btn btn-blue"/>
              </div>
            </form>
        </div>    )
}

export default Signup;
