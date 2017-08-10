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
  birthday: String,
  location: String
});

// Export Mongoose model
export default mongoose.model('User', userSchema);
