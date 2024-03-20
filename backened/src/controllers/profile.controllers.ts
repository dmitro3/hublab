import { Request, Response } from "express";
import { MESSAGES } from "../configs/constants.configs";
import ProfileService from "../services/profile.services";
const {
  create,
  findOne,
  editById
} = new ProfileService();
const {
  DUPLICATE_EMAIL,
  CREATED,
  UPDATED,
  NOT_FOUND
} = MESSAGES.PROFILE;

export default class ProfileController {
  async createProfile(req: Request, res: Response) {
    const {id} = req.params;
    const {email} = req.body;
    
    //checks if profile with email and id exists
    if(email) {
      const profileFromEmail = await findOne({email: email});
      if (profileFromEmail) {
        if(profileFromEmail._id !== id) {
          //sends an error if the email exists
          return res.status(409)
          .send({
            success: false,
            message: DUPLICATE_EMAIL
          });
        }
      }
    }
    
    const profileFromId = await findOne({_id: id});
    if (profileFromId) {
      const updatedProfile = await editById(id, req.body);
      return res.status(201)
      .send({
        success: true,
        message: UPDATED,
        profile: updatedProfile
      });
    } else {
      //creates a profile if the email and id doesn't exist
      const createdProfile = await create({_id: id, ...req.body});
      return res.status(201)
      .send({
        success: true,
        message: CREATED,
        profile: createdProfile
      });
    }
  }
  
  async getProfile(req: Request, res: Response) {
    const profile = await findOne({_id: req.params.id});
    if (profile) {
      return res.status(200)
      .send({
        success: true,
        message: "Profile fetched successfully",
        profile: profile
      });
    }
    return res.status(404)
      .send({
        success: false,
        message: NOT_FOUND
      });
  }
}