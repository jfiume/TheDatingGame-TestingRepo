const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');

const usersSchema = new Schema({
  Objectid: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    sex: {
      type: String,
    },
    ageRangeLow: {
      type: Number,
      min: [18, 'can\'t be below 18'],
      max: [100, 'can\'t be too old'],
      required: true
    },
    ageRangeHigh: {
      type: Number,
      min: [18, 'can\'t be below 18'],
      max: [100, 'can\'t be too old'],
      required: true
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    sessionToken: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
    },
    school: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
    aboutMe: {
      type: String,
      required: true
    },
    interestedIn: {
      type: String,
      required: true
    },
    likedUsers: { type: Array },
    dislikedUsers: { type: Array },
    chats: { type: Array },
    matchedUsers: { type: Array }
  }
});
