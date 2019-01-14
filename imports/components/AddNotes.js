import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Students, Notes } from "../api/Student";
import Header from "./Header";

class AddNotes extends Component {
  state = {
    data: {
      excercise: "",
      notes: "",
      student: ""
    }
  };

  handleChange = e => {
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.data);
    const data = this.state.data;
    Notes.insert({ data });

    this.setState({
      data: {
        excercise: "",
        notes: "",
        student: ""
      }
    });
  };
  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="excercise" onChange={this.handleChange} />
          <input type="number" name="notes" onChange={this.handleChange} />
          <select name="student" id="" onChange={this.handleChange}>
            <option value="---">---</option>
            {this.props.students.map(student => {
              return (
                <option value={student.data.name} key={student._id}>
                  {student.data.firstname} {student.data.name}
                </option>
              );
            })}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withTracker(() => {
  return { students: Students.find({}).fetch() };
})(AddNotes);
