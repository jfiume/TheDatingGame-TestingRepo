import mongoose, { Schema } from 'mongoose';

// Define model schema
export const matchSchema = new Schema({
  users: Array,
  chat: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }]
});

const Match = mongoose.model('match', matchSchema);

module.exports = Match;
