const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');

const messagesSchema = new Schema({
  Objectid: {
    authorId: { type: Number },
    messageOriginationTime: { type: Date },
    messageContent: { type: String }
  }
});
