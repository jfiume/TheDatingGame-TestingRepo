const mongoose = require('mongoose');
const uuid = require('uuid');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/TheDatingGame');

const usersSchema = new Schema({
  Objectid: {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
    sex: { type: String },
    ageRangeLow: { type: Number },
    ageRangeHigh: { type: Number },
    city: { type: String },
    state: { type: String },
    fbCity: { type: String },
    fbState: { type: String },
    sessionToken: { type: String },
    occupation: { type: String },
    school: { type: String },
    imageUrl: { type: String },
    aboutMe: { type: String },
    interestedIn: { type: String },
    likedUsers: { type: Array },
    dislikedUsers: { type: Array }
  }
});
