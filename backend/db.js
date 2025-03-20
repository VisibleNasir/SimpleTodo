import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/todo")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
})

const todo = mongoose.model('todo', todoSchema);

export default todo;