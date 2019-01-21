import React , {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import AddStudents from './AddStudents';

class Form extends Component {
    state = {
        data: {},
        isLogged: false,
    };
    
    handleChange = e => {
      const data = this.state.data;
      data[e.target.name] = e.target.value;
      this.setState({ data });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = this.state.data;

        if(this.props.signIn){
            try {
                Meteor.loginWithPassword(data.email, data.password, () => {
                  this.setState({ isLogged: true });
                });
            } catch (err) {
                console.error(`error login ${err}`);
            }
        } else {
            const user = {
              email: data.email,
              password: this.props.addStudents ? '' : data.password,
              profile: {
                firstname: data.firstname,
                name: data.name
              }
            };

            if(this.props.addStudents){
                Meteor.call("insertStudents", user , function(result){
                   console.log(result);
                });
            } else {
                this.setState({ isLogged: true });
                Meteor.call("registerTeacher", user);
            }
        }
    
      };

    render(){
        const {signIn} = this.props;
        const content  = signIn ? <Signin page="signin" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> : <Signup page="signup" handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

        if(this.state.isLogged){
            return(
                <Redirect to="/dashboard"/>
            )
        }

        return(
            <div className='App'>
            {!this.props.addStudents ? 
                <div>
                    {content}
                    <div className="App-img">
                      <img src="assets/img/illustration.png" alt="illustration"/>
                    </div>
                </div>                
                :
                <div>
                    <AddStudents 
                    onChange={this.handleChange} 
                    onSubmit={this.handleSubmit}
                    data={this.state.data}
                    />
                    <div className="App-img">
                      <img src="assets/img/illustration_2.png" alt="illustration"/>
                    </div>
                </div> 
                }
            </div>
        )
    }
}

export default Form;