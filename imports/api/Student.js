import { Mongo } from "meteor/mongo";

export const Students = new Mongo.Collection("students");
export const Notes = new Mongo.Collection("notes");
