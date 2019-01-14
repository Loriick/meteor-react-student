import { Mongo } from "meteor/mongo";

export const Notes = new Mongo.Collection("notes", {
  transform: function(doc) {
    doc.notesObj = Students.find({
      _id: doc.students
    });
    return doc;
  }
});

export const Students = new Mongo.Collection("students", {
  transform: function(doc) {
    doc.studentsObj = Notes.find({
      students: doc._id
    });
    return doc;
  }
});
