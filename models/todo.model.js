var mongoose = require('mongoose');

var todoSchema = mongoose.Schema({
  task: String,
  date: String,
  category: String
});

var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
