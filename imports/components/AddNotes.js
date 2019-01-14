import React from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Students } from "../api/Student";


const AddNotes = (props) => {
  return (
    <div>
      <form action="">
        <input type="text" />
        <input type="number" />
        <select name="" id="">
        {props.students.map(student => {
          return(
            <option value={student.data.name} key={student._id}>{student.data.firstname} {student.data.name}</option>
          )
        })}
        </select>
      </form>
    </div>
  );
};

export default withTracker(() => {
  return { students: Students.find({}).fetch() };
})(AddNotes);