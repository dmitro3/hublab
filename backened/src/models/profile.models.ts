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
    trim: true
  },
  imageUrl: {
    type: String,
    required: true,
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
  social: {
    type: {
      twitter: {
        type: String,
        trim: true    
      },
      linkedIn: {
        type: String,
        trim: true    
      },
      discord: {
        type: String,
        trim: true    
      },
      gitHub: {
        type: String,
        trim: true    
      },
      instagram: {
        type: String,
        trim: true    
      },
      website: {
        type: String,
        trim: true    
      }
    },
  },
  points: {
    type: {
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
  }
}, {
  timestamps: true
});

const Profile = model(DATABASES.PROFILE, profileSchema);
export default Profile;