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
    const {_id, email} = req.body;
    
    //checks if profile with email and id exists
    const profile = await findOne({email: email});
    const profile2 = await findOne({_id: _id});
    if (profile) {
      if(profile._id !== _id) {
        //sends an error if the email exists
        return res.status(409)
        .send({
          success: false,
          message: DUPLICATE_EMAIL
        });
      }
      const updatedProfile = await editById(_id, req.body);
      return res.status(201)
      .send({
        success: true,
        message: UPDATED,
        profile: updatedProfile
      });
    } else if (profile2) {
      const updatedProfile = await editById(_id, req.body);
      return res.status(201)
      .send({
        success: true,
        message: UPDATED,
        profile: updatedProfile
      });
    } else {
      //creates a profile if the email and id doesn't exist
      const createdProfile = await create(req.body);
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