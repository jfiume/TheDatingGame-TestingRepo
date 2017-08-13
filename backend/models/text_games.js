import mongoose, { Schema } from 'mongoose';

const textGameSchema = new Schema({
    gameTitle: String,
    question: String,
    userIds: Array,
    gameResponseIds: Array
});

const textGame = mongoose.model('textGame', textGameSchema);

module.exports = textGame;
