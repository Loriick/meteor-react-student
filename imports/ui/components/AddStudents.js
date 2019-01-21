import React from 'react';

const AddStudents = ({onChange, onSubmit , data}) => {
    return(
        <div className="form-container">
        <h1>Add a new student</h1>
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <input
              onChange={onChange}
              type="text"
              name="name"
              id="name"
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
              required
            />
            <label htmlFor="email">email</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default AddStudents;