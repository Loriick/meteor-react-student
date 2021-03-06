import React from "react";
import { Students } from "../api/Student";
import { withTracker } from "meteor/react-meteor-data";

const Student = props => {
  const students = props.students;
  if (!students) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h1>welcome in student</h1>
      <h3>
        {students.data.name} {students.data.firstname}
      </h3>
      <a href={students.data.github} target="_blank">
        github link
      </a>
    </div>
  );
};

export default withTracker(props => {
  return { students: Students.findOne(props.match.params.id) };
})(Student);
