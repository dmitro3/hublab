"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_configs_1 = require("../configs/constants.configs");
const campaignSchema = new mongoose_1.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    profileId: {
        type: String,
        ref: constants_configs_1.DATABASES.PROFILE,
        required: true,
        unique: false
    },
    coverBannerUrl: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: String,
        required: true,
        trim: true
    },
    endDate: {
        type: String,
        required: true,
        trim: true
    },
    questions: {
        type: [{
                question: String,
                options: {
                    a: String,
                    b: String,
                    c: String,
                    d: String
                },
                answer: String
            }],
        required: false
    },
    eligibility: {
        type: String,
        required: true,
        trim: true
    },
    participants: {
        type: Number,
        required: true,
        trim: true
    },
    methodOfReward: {
        type: String,
        required: true,
        trim: true
    },
    reward: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        default: "Ongoing",
        trim: true
    }
}, {
    strict: false,
    timestamps: true
});
const Campaign = (0, mongoose_1.model)(constants_configs_1.DATABASES.CAMPAIGN, campaignSchema);
exports.default = Campaign;
