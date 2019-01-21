import React , {Component} from 'react';
import Form from '../../components/Form';
import Header from '../../components/Header';

class Home extends Component {
    state ={
        signIn: this.props.signIn,
    }

    clickHeader = () => {
        if(this.state.signIn){
            this.setState({
                signIn: false,
            })
        } else {
            this.setState({
                signIn: true,
            })
        }
    }
    render(){
        const {signIn} = this.props;
        console.log(Meteor.userId());
        return(
            <div className="Home">
              <Header 
                page={signIn ? 'signIn' : 'signUp'}
                eventClick={this.clickHeader}
              />
              <Form
                  signIn = {signIn}
              />
            </div>
        )
    }
}

export default Home;