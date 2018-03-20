const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema
const IdeaSchema = new Schema({
  title: {
    type:String,
    required: true
  },
  details: {
    type:String,
    required: true
  },
  date: {
    type:Date,
    default: Date.now
  }
});

// create the model
mongoose.model('ideas', IdeaSchema);
