import ProfileService from "../services/profile.services";
const {count} = new ProfileService();

async function getBonus() {
    const totalUsers = await count();
    let bonus = {
        signUp: 1000,
        referral: 500
    }

    if ((10000 > totalUsers) && (totalUsers > 1000)) {
        bonus = {
            signUp: 500,
            referral: 250
        }
    } else if ((100000 > totalUsers) && (totalUsers > 10000)) {
        bonus = {
            signUp: 500,
            referral: 250
        }
    } else if ((1000000 > totalUsers) && (totalUsers > 100000)) {
        bonus = {
            signUp: 250,
            referral: 125
        }
    } else if ((1000000 > totalUsers) && (totalUsers > 100000)) {
        bonus = {
            signUp: 0,
            referral: 0
        }
    }
    return bonus
}

export default getBonus;