import React from "react";
import PropTypes from "prop-types";

const Form = ({ onChange, onSubmit, data }) => {
  return (
    <div className="left-side">
      <div className="form-container">
        <h1>Add a new student</h1>
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <input
              onChange={onChange}
              type="text"
              name="name"
              id="name"
              value={data.name}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-container">
            <input
              onChange={onChange}
              type="text"
              name="firstname"
              id="firstname"
              value={data.firsname}
              required
            />
            <label htmlFor="firstname">Firstname</label>
          </div>
          <div className="input-container">
            <input
              onChange={onChange}
              type="text"
              name="email"
              id="email"
              value={data.email}
              required
            />
            <label htmlFor="github">email</label>
          </div>
          <div className="input-container">
            <input
              onChange={onChange}
              type="text"
              name="github"
              id="github"
              value={data.github}
              required
            />
            <label htmlFor="github">Github link</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  onchange: PropTypes.func,
  onSubmit: PropTypes.func,
  data: PropTypes.object
};

export default Form;
