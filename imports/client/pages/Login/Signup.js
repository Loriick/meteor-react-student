import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";

class Signup extends Component {
  state = {
    data: {},
    isLogged: false
  };

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = this.state.data;

    const user = {
      email: data.email,
      password: data.password,
      profile: {
        firstname: data.firstname,
        name: data.name
      }
    };
    this.setState({ isLogged: true });
    Meteor.call("registerTeacher", user);
  };

  render() {
    if(this.state.isLogged){
      return(
        <Redirect to="/dashboard"/>
      )
    }
    return (
      <div>
        <Header page="signUp" isLogged={this.state.isLogged} />
        <div className="App">
          <div className="form">
            <h1 className="form-title">
              Bienvenue sur <span>Meteor School</span>
            </h1>
            <h4 className="form-subtitle">Inscrivez-vous</h4>
            <form onSubmit={this.handleSubmit} className="form-container">
              <div className="form-shadow">
                <div className="form-input">
                  <label>Nom</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-input">
                  <label>Prénom</label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-input">
                  <label>Adresse Email</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-input">
                  <label>Mot de Passe</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-footer form-footer_right">
                <input type="submit" value="Créer votre compte" className="btn btn-blue"/>
              </div>
            </form>
          </div>
          <div className="App-img">
            <img src="assets/img/illustration.png" alt="illustration"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
