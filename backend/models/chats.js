 import mongoose, { Schema } from 'mongoose';

 const chatsSchema = new Schema({
   messages: Array,
   user_ids: Array,
   played_games: Array
 });
