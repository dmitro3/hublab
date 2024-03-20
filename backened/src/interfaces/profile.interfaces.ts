export default interface IProfile {
    _id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    imageUrl?: string;
    bio?: string;
    interests: [];
    socials: {
        twitter: string;
        linkedIn: string;
        discord: string;
        gitHub: string;
        instagram: string;
        website: string;
    };
    points?: {
        totalPoints: number;
        referalPoints: number;
        rewardPoints: number;
    }
}