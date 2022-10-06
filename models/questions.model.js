const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  correctOption: String,
});

const QuestionModel = mongoose.model("questions_tbs", questionSchema);

module.exports = QuestionModel;
