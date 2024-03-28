import { model, Schema } from "mongoose";
import { DATABASES } from "../configs/constants.configs";

const campaignSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    profileId: {
        type: String,
        ref: DATABASES.PROFILE,
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
    questions: [{
        question: String,
        optionA: String,
        optionB: String,
        optionC: String,
        optionD: String,
        correctAnswer: String
    }],
    eligibility: {
        type: Schema.Types.Mixed,
        required: true,
        trim: true
    },
    participants: {
        type: Number,
        required: true,
        trim: true
    },
    reward: {
        type: String,
        required: true,
        trim: true
    }
}, {
    strict: false,
    timestamps: true
});

const Campaign = model(DATABASES.CAMPAIGN, campaignSchema);
export default Campaign;