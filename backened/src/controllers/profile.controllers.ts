import { Request, Response } from "express";
import { FRONTEND_SIGNUP_LINK, MESSAGES } from "../configs/constants.configs";
import ProfileService from "../services/profile.services";
import cloudinary from "../configs/cloudinary.configs";
import generateReferralCode from "../utils/generateReferralCode.utils";
import getBonus from "../utils/getBonus.utils";
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
    
    let imageUrl;
    if (req.file) {
      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
      if(!imageUrl) {
        return res.status(409).send({
          success: false,
          message: "File Upload Failed"
        });
      }
    }

    const code = await generateReferralCode();
    
    req.body.referralCode = code;
    req.body.imageUrl = imageUrl;
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
      const bonus = await getBonus();
      //creates a profile if the email and id doesn't exist
      const createdProfile = await create({_id: id, points: {totalPoints: bonus.signUp, referalPoints: 0, rewardPoints: bonus.signUp}, ...req.body});

      const {referralCode} = req.query;
      const referredUser = await findOne(referralCode);

      if (referredUser && referredUser.points) {
        const totalReferralPoints = referredUser.points.referalPoints + 1000;
        const updatedProfile = await editById(referredUser._id, {points: {totalPoints: referredUser.points.totalPoints, referalPoints: 0, rewardPoints: referredUser.points.rewardPoints}});
      }

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

  async claimPoints(req: Request, res: Response) {
    const {id} = req.params
    const profile = await findOne({_id: id});
    if (profile) {
      const updatedProfile = await editById(id, {
        points: {
          totalPoints: 0,
          rewardPoints: 0,
          referalPoints: 0
        }
      });
      return res.status(200)
      .send({
        success: true,
        message: "Points successfully claimed",
        profile: updatedProfile
      });
    }
    return res.status(404)
      .send({
        success: false,
        message: NOT_FOUND
      });
  }


}