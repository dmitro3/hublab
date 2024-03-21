import ProfileService from "../services/profile.services";
const {findOne} = new ProfileService();

async function generateReferralCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    while (true) {
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        const existingUser = await findOne({ referralCode: code });
        if (!existingUser) {
            return code;
        }
        code = '';
    }
}

export default generateReferralCode;