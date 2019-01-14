import { Mongo } from "meteor/mongo";

export const Students = new Mongo.Collection("students" , {
    transform: function(doc){
        doc.exercice  = Notes.find({
            'data.student' : doc._id
        }).fetch();
        return doc;
    }
});
export const Notes = new Mongo.Collection("notes");
