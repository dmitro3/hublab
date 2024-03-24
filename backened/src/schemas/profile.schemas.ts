import Joi from "joi";
import { INTERESTS } from "../configs/constants.configs";

const profileSchema = Joi.object({
    firstName: Joi.string().optional().trim(),
    lastName: Joi.string().optional().trim(),
    email: Joi.string().email().optional().lowercase().trim(),
    imageUrl: Joi.string().optional().trim(),
    bio: Joi.string().optional().trim(),
    interests: Joi.array().items(Joi.string().valid(...INTERESTS)).optional(),
    socials: Joi.optional(),
    points: Joi.optional()
});

export {
    profileSchema
}