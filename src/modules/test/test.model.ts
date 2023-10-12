import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  name: String,
  age: Number,
});
// Create the Mongoose model for the products collection
export const Test = models.Test || model("Test", testSchema);

