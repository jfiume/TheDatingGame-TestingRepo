import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  messageOriginationTime: Date,
  messageContent: String
});

const Message = mongoosse.model('message', MessageSchema);

module.exports = Message;
