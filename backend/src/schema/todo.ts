import mongoose, { Schema, Document } from "mongoose";

export interface TodoDocument extends Document {
  message: string;
}
const TodoSchema: Schema = new Schema({
  message: { type: String, required: true },
});

export default mongoose.model<TodoDocument>("Todo", TodoSchema);
