const PORT = process.env.PORT || 9871;
const SECRET = process.env.SECRET!;
const basePath = "/api/v1"
const DATABASES = {
    PROFILE: "profile"
};
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
const INTERESTS: string[] = ["Content", "Development", "Trading", "Earning", "Blockchain", "Bounty"];
const FRONTEND_SIGNUP_LINK = "";

export {
    PORT,
    SECRET,
    basePath,
    MESSAGES,
    DATABASES,
    INTERESTS,
    FRONTEND_SIGNUP_LINK
};