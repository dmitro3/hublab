"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_configs_1 = require("../configs/constants.configs");
const profileSchema = new mongoose_1.Schema({
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
                enum: constants_configs_1.INTERESTS
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
    },
    referralCode: {
        type: String,
        required: true,
        unique: true
    }
}, {
    strict: true,
    timestamps: true
});
const Profile = (0, mongoose_1.model)(constants_configs_1.DATABASES.PROFILE, profileSchema);
exports.default = Profile;
