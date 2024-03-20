"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_configs_1 = require("../configs/constants.configs");
const profile_services_1 = __importDefault(require("../services/profile.services"));
const { create, findOne, editById } = new profile_services_1.default();
const { DUPLICATE_EMAIL, CREATED, UPDATED, NOT_FOUND } = constants_configs_1.MESSAGES.PROFILE;
class ProfileController {
    createProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { email } = req.body;
            //checks if profile with email and id exists
            if (email) {
                const profileFromEmail = yield findOne({ email: email });
                if (profileFromEmail) {
                    if (profileFromEmail._id !== id) {
                        //sends an error if the email exists
                        return res.status(409)
                            .send({
                            success: false,
                            message: DUPLICATE_EMAIL
                        });
                    }
                }
            }
            const profileFromId = yield findOne({ _id: id });
            if (profileFromId) {
                const updatedProfile = yield editById(id, req.body);
                return res.status(201)
                    .send({
                    success: true,
                    message: UPDATED,
                    profile: updatedProfile
                });
            }
            else {
                //creates a profile if the email and id doesn't exist
                const createdProfile = yield create(Object.assign({ _id: id }, req.body));
                return res.status(201)
                    .send({
                    success: true,
                    message: CREATED,
                    profile: createdProfile
                });
            }
        });
    }
    getProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield findOne({ _id: req.params.id });
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
        });
    }
}
exports.default = ProfileController;
