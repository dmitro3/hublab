import { model, Schema } from "mongoose";
import { DATABASES } from "../configs/constants.configs";

const profileSchema = new Schema({
  _id: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  profilePicUrl: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },  
  website: {
    type: String,
    required: true,
    trim: true
  },  
  powUrl: {
    type: String,
    required: true,
    trim: true
  },
}, {
  timestamps: true
});

const Profile = model(DATABASES.USER, profileSchema);
export default Profile;