import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  messageOriginationTime: Date,
  messageContent: String
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;
