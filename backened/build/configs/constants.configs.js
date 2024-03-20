"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERESTS = exports.DATABASES = exports.MESSAGES = exports.basePath = exports.SECRET = exports.PORT = void 0;
const PORT = process.env.PORT || 9871;
exports.PORT = PORT;
const SECRET = process.env.SECRET;
exports.SECRET = SECRET;
const basePath = "/api/v1";
exports.basePath = basePath;
const DATABASES = {
    PROFILE: "profile"
};
exports.DATABASES = DATABASES;
const MESSAGES = {
    DATABASE: {
        CONNECTED: "Connection to database has been established successfully",
        ERROR: "Unable to connect to database:"
    },
    PROFILE: {
        CREATED: "Profile created successfully.",
        DUPLICATE_EMAIL: "Email already exist.",
        UPDATED: "Profile details updated successfully.",
        NOT_FOUND: "Profile not found."
    },
};
exports.MESSAGES = MESSAGES;
const INTERESTS = ["Content", "Development", "Trading", "Earning", "Blockchain", "Bounty"];
exports.INTERESTS = INTERESTS;
