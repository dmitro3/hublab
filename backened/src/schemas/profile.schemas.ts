import Joi from "joi";

const createSchema = Joi.object({
    _id: Joi.string().required().trim(),
    email: Joi.string().email().optional().lowercase().trim(),
    firstName: Joi.string().optional().trim(),
    lastName: Joi.string().optional().trim(),
    profilePicUrl: Joi.string().optional().trim(),
    bio: Joi.string().optional().trim(),
    phoneNumber: Joi.string().optional().trim(),
    website: Joi.string().optional().trim(),
    powUrl: Joi.string().optional().trim(),
});

export {
    createSchema
}