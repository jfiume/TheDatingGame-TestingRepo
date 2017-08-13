import mongoose, { Schema } from 'mongoose';

const textGamesResponsesSchema = new Schema({
  authorId: Number,
  response: String
});

const textGamesResponses = mongoose.model('textGamesResponses', textGamesResponsesSchema);

module.exports = textGamesResponses;
