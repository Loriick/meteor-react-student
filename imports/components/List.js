import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Students } from "../api/Student";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const List = props => {
  let filteredStudent = props.students.map(student => {
    if (student.data.profile.name.toLowerCase().indexOf(props.searchbar) !== -1) {
      const { _id, data } = student;
      return (
        <li key={_id}>
          <span>student:</span>
          <Link to={`/student/${_id}`}>
            {data.profile.name} {data.profile.firstname}
          </Link>
          <button onClick={() => props.deleteStudent(_id)}>delete</button>
        </li>
      );
    }
  });
  return (
    <div className="right-side">
      <h2>Students</h2>
      <input
        type="text"
        name="searchbar"
        value={props.searchbar}
        onChange={props.handleSearch}
      />
      <ul>{filteredStudent}</ul>
    </div>
  );
};

List.prototype = {
  deleteStudent: PropTypes.func
};

export default withTracker(() => {
  return { students: Students.find({}).fetch() };
})(List);
