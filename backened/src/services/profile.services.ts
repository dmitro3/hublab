import IProfile from "../interfaces/profile.interfaces";
import Profile from "../models/profile.models";

export default class ProfileService {
    async create(profile: Partial<IProfile>) {
        const createdProfile = await Profile.create(profile);
        return await Profile.findOne({ _id: createdProfile.id}, "-__v -password");
    }

    async findOne(param: any) {
        return await Profile.findOne(param, "-__v");
    }

    async editById(id: string, obj: Partial<IProfile>) {
        if(await Profile.findOne({ _id: id })){
            return await Profile.findByIdAndUpdate(id, { $set: obj }, { new: true }).select("-password");
        }
    }
}