const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');

const textGamesResponsesSchema = new Schema({
  Objectid: {
    authorId: { type: Number },
    response: { type: String }
  }
});
