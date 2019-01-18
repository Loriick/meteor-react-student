import React from "react";
import { Students } from "../../../api/Student";
import { withTracker } from "meteor/react-meteor-data";
import Header from "../../components/Header";
import { Meteor } from "meteor/meteor";

const Student = props => {
  // const students = props.students;
  // if (!students) {
  //   return <div>loading</div>;
  // }
  console.log(props);
  return (
    <div>
      <h1>welcome in student</h1>
      {/* <h3>
        {students.data.name} {students.data.firstname}
      </h3>
      <a href={students.data.github} target="_blank">
        github link
      </a>
      <a href={`mailto:${students.data.email}`}>envoyez un mail</a>
      <ul>
        {students.exercice.map(student => {
          return (
            <li key={student._id}>
              {student.data.excercise}: {student.data.notes}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default withTracker(props => {
  return { students: Meteor.users.findOne(Meteor.userId) };
})(Student);
