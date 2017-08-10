const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');

const textGameSchema = new Schema({
  Objectid: {
    gameTitle: { type: String },
    question: { type: String },
    userIds: { type: Array },
    gameResponseIds: { type: Array }
  }
});
