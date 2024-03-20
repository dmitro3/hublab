import { model, Schema } from "mongoose";
import { DATABASES, INTERESTS } from "../configs/constants.configs";

const profileSchema = new Schema({
  _id: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    sparse: true,
    trim: true
  },
  imageUrl: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    trim: true
  },
  interests: {
    type: [{
      type: String,
      enum: INTERESTS
    }]
  },
  socials: {
    twitter: {
      type: String,
      default: "",
      trim: true    
    },
    linkedIn: {
      type: String,
      default: "",
      trim: true    
    },
    discord: {
      type: String,
      default: "",
      trim: true    
    },
    gitHub: {
      type: String,
      default: "",
      trim: true    
    },
    instagram: {
      type: String,
      default: "",
      trim: true    
    },
    website: {
      type: String,
      default: "",
      trim: true
    }
  },
  points: {
    totalPoints: {
      type: Number,
      default: 0
    },
    referalPoints: {
      type: Number,
      default: 0
    },
    rewardPoints: {
      type: Number,
      default: 0
    }
  }
}, {
  strict: true,
  timestamps: true
});

const Profile = model(DATABASES.PROFILE, profileSchema);
export default Profile;