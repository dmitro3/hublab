"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controllers_1 = __importDefault(require("../controllers/profile.controllers"));
const validate_middleware_1 = __importDefault(require("../middlewares/validate.middleware"));
const profile_schemas_1 = require("../schemas/profile.schemas");
const multer_configs_1 = __importDefault(require("../configs/multer.configs"));
const router = (0, express_1.Router)();
const { createProfile, getProfile, claimPoints, getReferralLink } = new profile_controllers_1.default();
//create or update a profile
router.put("/:id", multer_configs_1.default.single("image"), (0, validate_middleware_1.default)(profile_schemas_1.profileSchema), createProfile);
//get a profile
router.get("/:id", getProfile);
//claim points
router.patch("/claim/:id", claimPoints);
//get referral link
router.get("/referral/:id", getReferralLink);
exports.default = router;
