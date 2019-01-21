import React , {Component} from 'react';
import { withTracker } from "meteor/react-meteor-data";
// import AddStudents from './../../components/AddStudents';


import Students from './../../../api/Students';
import Header from '../../components/Header';
import List from '../../components/List';

class Dashboard extends Component {
    state = {
        searchbar : ''
    }

    logOut = () => {
        Meteor.logout();
        // this.setState({isLogged: false})
    };

    handleSearch = e => {
      this.setState({
        searchbar: e.target.value
      });
    };

    deleteStudent = id => {
        Meteor.call("deleteStudents", id);
            // Students.remove(id);
    };

    render(){
        if(!this.props.users){
            return <div>Loading...</div>
        }
        console.log(this.props.students)
        const {profile , emails } = this.props.users;
        return(
            <div className="dashboard">
                <Header logout={this.logOut} handleSearch={this.handleSearch}/>
                <div className="dashboard-container">
                    <List 
                    students={this.props.students} 
                    searchbar={this.state.searchbar}
                    deleteStudent={this.deleteStudent}
                    />
                    <div className="dashboard-content">
                        <h3>{profile.firstname} {profile.name}</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe("allStudents");
    return { users: Meteor.users.findOne(Meteor.userId), students : Students.find().fetch()};
  })(Dashboard);