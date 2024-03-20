const PORT = process.env.PORT || 9871;
const SECRET = process.env.SECRET!;
const SALTROUNDS = 10;
const MAXAGE = 3 * 24 * 60 * 60;
const basePath = "/api/v1"
const DATABASES = {
    USER: "user",
    CONTRACT: "contract",
    POST: "post"
};
const MESSAGES = {
    DATABASE: {
        CONNECTED: "Connection to database has been established successfully",
        ERROR: "Unable to connect to database:"
    },
    USER: {
        CREATED: "Profile created successfully.",
        DUPLICATE_EMAIL: "Email already exist.",
        UPDATED: "Profile details updated successfully.",
        NOT_FOUND: "Profile not found."
    },
};

export {
    PORT,
    SECRET,
    MAXAGE,
    basePath,
    MESSAGES,
    SALTROUNDS,
    DATABASES,
};