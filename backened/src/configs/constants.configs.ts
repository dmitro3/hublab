const PORT = process.env.PORT || 9871;
const SECRET = process.env.SECRET!;
const basePath = "/api/v1"
const DATABASES = {
    PROFILE: "profile",
    CAMPAIGN: "campaign"
};
const MESSAGES = {
    DATABASE: {
        CONNECTED: "Connection to database has been established successfully",
        ERROR: "Unable to connect to database:"
    },
    PROFILE: {
        CREATED: "Profile created successfully.",
        FETCHED: "Profile fetched successfully.",
        DUPLICATE_EMAIL: "Email already exist.",
        UPDATED: "Profile details updated successfully.",
        NOT_FOUND: "Profile not found."
    },
    CAMPAIGN: {
        DUPLICATE_TITLE: "Title already exist.",
        CREATED: "Campaign created successfully.",
        FETCHED: "Campaign fetched successfully.",
        NOT_FOUND: "Campaign not found.",
        // UPDATED: "Profile details updated successfully.",
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