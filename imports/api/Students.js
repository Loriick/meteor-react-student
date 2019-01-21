import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";


export default Students = new Mongo.Collection('students' , {
   transform: function(doc){
    //    console.log(Meteor.users.find());
       doc.exercice  = Meteor.users.find({
           "emails.address" : doc.data.email
       }).fetch();
       return doc;
   }
});

if (Meteor.isServer) {
    Meteor.publish('allStudents', function () {
       return Students.find({});
    });
 }