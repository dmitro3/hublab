import Joi from "joi";

const createSchema = Joi.object({
    _id: Joi.string().required().trim(),
    firstName: Joi.string().optional().trim(),
    lastName: Joi.string().optional().trim(),
    email: Joi.string().email().optional().lowercase().trim(),
    imageUrl: Joi.string().optional().trim(),
    bio: Joi.string().optional().trim(),
    phoneNumber: Joi.string().optional().trim(),
    website: Joi.string().optional().trim(),
    powUrl: Joi.string().optional().trim(),
});

export {
    createSchema
}
// _id: string;
// firstName: string;
// lastName: string;
// email: string;
// imageUrl: string;
// bio: string;
// interests: [];
// socials: {
//     twitter: string;
//     linkedIn: string;
//     discord: string;
//     gitHub: string;
//     instagram: string;
//     website: string;
// };
// points: {
//     totalPoints: number;
//     referalPoints: number;
//     rewardPoints: number;
// }
