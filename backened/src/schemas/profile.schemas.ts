import Joi from "joi";
import { INTERESTS } from "../configs/constants.configs";

const createSchema = Joi.object({
    firstName: Joi.string().optional().trim(),
    lastName: Joi.string().optional().trim(),
    email: Joi.string().email().optional().lowercase().trim(),
    imageUrl: Joi.string().optional().trim(),
    bio: Joi.string().optional().trim(),
    interests: Joi.array().items(Joi.string().valid(...INTERESTS)).optional(),
    socials: Joi.object({
        twitter: Joi.string().optional().trim(),
        linkedIn: Joi.string().optional().trim(),
        discord: Joi.string().optional().trim(),
        gitHub: Joi.string().optional().trim(),
        instagram: Joi.string().optional().trim(),
        website: Joi.string().optional().trim()
    }),
});

export {
    createSchema
}