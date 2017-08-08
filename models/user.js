const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  facebook_id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('user', userSchema);
