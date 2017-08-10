const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');

const messagesSchema = new Schema({
  authorId: Number,
  messageOriginationTime: Date,
  messageContent: String
});

module.exports = mongoose.model('Messages', messagesSchema);
