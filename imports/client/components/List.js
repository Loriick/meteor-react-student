import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Students } from "../../api/Student";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const List = props => {
  let filteredStudent = props.users.map(student => {
    // if (
    //   student.data.profile.name.toLowerCase().indexOf(props.searchbar) !== -1
    // ) {
      const { _id, data } = student;
      return (
        <li key={_id} className="dashboard-students">
        <div className="dashboard-students_container">
          <img src="assets/img/student.svg" alt="student icon"/>
          <Link to={`/student/${_id}`}>
            {data.profile.firstname} {data.profile.name}
          </Link>
        </div>
        <img src="assets/img/close.svg"  alt="delete" className="dashboard-students_delete" onClick={() => props.deleteStudent(_id)}/>
        </li>
      );
    // }
  });
  return (
    <div className="dashboard-list">
      <div className="left-side">
        {/* <h2>Students</h2>
        <input
          type="text"
          name="searchbar"
          value={props.searchbar}
          onChange={props.handleSearch}
        /> */}
        <ul>{filteredStudent}</ul>
      </div>
    </div>
  );
};

List.prototype = {
  deleteStudent: PropTypes.func
};

export default withTracker(() => {
  return { users: Meteor.users.find({}).fetch() };
})(List);
