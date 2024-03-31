export default interface ICampaign {
    _id: string;
    title: string;
    profileId: string;
    coverBannerUrl: string;
    description: string;
    startDate: string;
    endDate: string;
    questions: object;
    eligibility: string;
    participants: number;
    reward: string;
}