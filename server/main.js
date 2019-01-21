import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Students from '../imports/api/Students';
import Notes from '../imports/api/Notes';

Meteor.methods({
  insertStudents: data => {
    const { profile, email , password } = data;
    check(profile.name, String);
    check(profile.firstname, String);
    check(email, String);
    check(password, String);

    try {
      let id = Accounts.createUser(data , function(error) {
          if(error){
              console.log(error) 
          } else {
              console.log('ok');
          }
      });
      Students.insert({ data });
      Roles.addUsersToRoles(id, "student");
    } catch (err) {
      console.log("create student error", err);
    }
  },

  deleteStudents: id => {
    console.log(Students.find().fetch());
    check(id, String);
    // Students.remove(id);
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


