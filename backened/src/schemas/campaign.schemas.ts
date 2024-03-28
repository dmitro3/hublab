import Joi from "joi";

const campaignSchema = Joi.object({
    title: Joi.string().required().trim(),
    profileId: Joi.string().required().trim(),
    coverBannerUrl: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    startDate: Joi.string().required().trim(),
    endDate: Joi.string().required().trim(),
    questions: Joi.object().required(),
    eligibility: Joi.required(),
    participants: Joi.number().required(),
    reward: Joi.string().required().trim()
});

export {
    campaignSchema
}