import { Router } from "express";
import ProfileController from '../controllers/profile.controllers';
import validate from "../middlewares/validate.middleware";
import { profileSchema } from "../schemas/profile.schemas";
import upload from "../configs/multer.configs";
const router = Router();
const {
    createProfile,
    getProfile,
    claimPoints
} = new ProfileController();

//create or update a profile
router.put("/:id", upload.single("image"), validate(profileSchema), createProfile);

//get a profile
router.get("/:id", getProfile);

//claim points
router.patch("/claim/:id", claimPoints);

export default router;