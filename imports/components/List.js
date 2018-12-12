import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Students } from "../api/Student";

const List = props => {
  return (
    <div className="right-side">
      <h2>Students</h2>
      {props.students.map(student => {
        const { _id, data } = student;
        return (
          <ul key={_id}>
            <li>
              <span>Name:</span> {data.name}
            </li>
            <li>
              <span>Firstname:</span> {data.firstname}
            </li>
            <li>
              <span>Github link:</span>
              <a href={student.data.github} target="_blank">
                click here
              </a>
            </li>
            <button onClick={() => props.deleteStudent(_id)}>delete</button>
          </ul>
        );
      })}
    </div>
  );
};

export default withTracker(() => {
  return { students: Students.find({}).fetch() };
})(List);
