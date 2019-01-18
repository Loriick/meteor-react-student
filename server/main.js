import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Students, Notes } from "../imports/api/Student";

Meteor.methods({
  insertStudents: data => {
    const { profile, email, github } = data;
    check(profile.name, String);
    check(profile.firstname, String);
    check(email, String);
    check(github, String);

    try {
      Students.insert({ data });
      let id = Accounts.createUser(data);
      Roles.addUsersToRoles(id, "student");
    } catch (err) {
      console.log("create student error", err);
    }
  },

  deleteStudents: id => {
    check(id, String);
    Students.remove(id);
  },

  registerTeacher: data => {
    const { profile, email, password } = data;

    check(profile.name, String);
    check(profile.firstname, String);
    check(email, String);
    check(password, String);

    try {
      let id = Accounts.createUser(data);
      Roles.addUsersToRoles(id, "teacher");
    } catch (err) {
      console.log("create teacher error", err);
    }
  }
});
