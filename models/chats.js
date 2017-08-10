const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost:3000/TheDatingGame');

const chatsSchema = new Schema({
  ObjectId: {
    messages: { type: Array },
    user_ids: { type: Array },
    played_games: { type: Array }
  }
});

module.exports = mongoose.model('chat', chatsSchema);
