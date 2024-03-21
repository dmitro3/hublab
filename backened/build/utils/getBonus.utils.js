"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_services_1 = __importDefault(require("../services/profile.services"));
const { count } = new profile_services_1.default();
function getBonus() {
    return __awaiter(this, void 0, void 0, function* () {
        const totalUsers = yield count();
        let bonus = {
            signUp: 1000,
            referral: 500
        };
        if ((10000 > totalUsers) && (totalUsers > 1000)) {
            bonus = {
                signUp: 500,
                referral: 250
            };
        }
        else if ((100000 > totalUsers) && (totalUsers > 10000)) {
            bonus = {
                signUp: 500,
                referral: 250
            };
        }
        else if ((1000000 > totalUsers) && (totalUsers > 100000)) {
            bonus = {
                signUp: 250,
                referral: 125
            };
        }
        else if ((1000000 > totalUsers) && (totalUsers > 100000)) {
            bonus = {
                signUp: 0,
                referral: 0
            };
        }
        return bonus;
    });
}
exports.default = getBonus;
