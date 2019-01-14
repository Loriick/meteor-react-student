import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Students } from "../api/Student";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const List = props => {
  return (
    <div className="right-side">
      <h2>Students</h2>
      <ul>
        {props.students.map(student => {
          const { _id, data } = student;
          return (
            <li key={_id}>
              <span>student:</span>
              <Link to={`/student/${_id}`}>
                {data.name} {data.firstname}
              </Link>
              <button onClick={() => props.deleteStudent(_id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

List.prototype = {
  deleteStudent: PropTypes.func
};

export default withTracker(() => {
  return { students: Students.find({}).fetch() };
})(List);
