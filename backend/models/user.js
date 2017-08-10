import mongoose, { Schema } from 'mongoose';

// Define model schema
export const userSchema = new Schema({
  oauth_id: {
    type: String,
    unique: true,
    index: true,
  },
  name: String,
  avatar: String,
  email: String,
  gender: String,
  age: Number,
  age_range_low: Number,
  age_range_high: Number,
  location: String,
  occupation: String,
  education: String,
  about: String,
  interested_in: String,
  liked_users: Array,
  disliked_users: Array,
  matches: Array,
});

// Export Mongoose model
export default mongoose.model('User', userSchema);
