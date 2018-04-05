const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema
const UserSchema = new Schema({
  name: {
    type:String,
    required: true
  },
  email: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
  date: {
    type:Date,
    default: Date.now
  }
});

// create the model
mongoose.model('users', UserSchema);
