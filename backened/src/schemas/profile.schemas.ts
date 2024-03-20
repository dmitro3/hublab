import Joi from "joi";
import { INTERESTS } from "../configs/constants.configs";

const createSchema = Joi.object({
    _id: Joi.string().required().trim(),
    firstName: Joi.string().optional().trim(),
    lastName: Joi.string().optional().trim(),
    email: Joi.string().email().optional().lowercase().trim(),
    imageUrl: Joi.string().optional().trim(),
    bio: Joi.string().optional().trim(),
    interests: Joi.array().items(Joi.string().valid(...INTERESTS)).optional(),
    socials: Joi.object({
        twitter: Joi.string(),
        linkedIn: Joi.string(),
        discord: Joi.string(),
        gitHub: Joi.string(),
        instagram: Joi.string(),
        website: Joi.string()
    }),
    points: Joi.object({
        totalPoints: Joi.number().integer().min(0).optional(),
        referalPoints: Joi.number().integer().min(0).optional(),
        rewardPoints: Joi.number().integer().min(0).optional()
    })
});

export {
    createSchema
}