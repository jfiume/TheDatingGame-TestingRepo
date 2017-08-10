const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost:3000/TheDatingGame');

const chatsSchema = new Schema({
  messages: Array,
  user_ids: Array,
  played_games: Array
});

module.exports = mongoose.model('Chat', chatsSchema);
