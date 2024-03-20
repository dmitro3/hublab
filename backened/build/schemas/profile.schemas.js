"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const constants_configs_1 = require("../configs/constants.configs");
const createSchema = joi_1.default.object({
    firstName: joi_1.default.string().optional().trim(),
    lastName: joi_1.default.string().optional().trim(),
    email: joi_1.default.string().email().optional().lowercase().trim(),
    imageUrl: joi_1.default.string().optional().trim(),
    bio: joi_1.default.string().optional().trim(),
    interests: joi_1.default.array().items(joi_1.default.string().valid(...constants_configs_1.INTERESTS)).optional(),
    socials: joi_1.default.object({
        twitter: joi_1.default.string().optional().trim(),
        linkedIn: joi_1.default.string().optional().trim(),
        discord: joi_1.default.string().optional().trim(),
        gitHub: joi_1.default.string().optional().trim(),
        instagram: joi_1.default.string().optional().trim(),
        website: joi_1.default.string().optional().trim()
    }),
});
exports.createSchema = createSchema;
