import { Router } from "express";
import ProfileController from '../controllers/profile.controllers';
import validate from "../middlewares/validate.middleware";
import { createSchema } from "../schemas/profile.schemas";
const router = Router();
const {
    createProfile,
    getProfile
} = new ProfileController();

//create or update a profile
router.put("/", validate(createSchema), createProfile);

//get a profile
router.get("/:_id", getProfile);

export default router;