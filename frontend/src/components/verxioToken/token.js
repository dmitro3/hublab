"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var web3_js_1 = require("@solana/web3.js");
var spl_token_1 = require("@solana/spl-token");
var spl_token_metadata_1 = require("@solana/spl-token-metadata");
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var connection, payer, airdropSignature, _a, _b, _c, mintAuthority, decimals, mintKeypair, mint, mintLen, metadata, metadataLen, lamports, transaction;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                connection = new web3_js_1.Connection((0, web3_js_1.clusterApiUrl)('devnet'), 'confirmed');
                payer = web3_js_1.Keypair.generate();
                return [4 /*yield*/, connection.requestAirdrop(payer.publicKey, 2 * web3_js_1.LAMPORTS_PER_SOL)];
            case 1:
                airdropSignature = _d.sent();
                _b = (_a = connection).confirmTransaction;
                _c = [{ signature: airdropSignature }];
                return [4 /*yield*/, connection.getLatestBlockhash()];
            case 2: return [4 /*yield*/, _b.apply(_a, [__assign.apply(void 0, _c.concat([(_d.sent())]))])];
            case 3:
                _d.sent();
                mintAuthority = web3_js_1.Keypair.generate();
                decimals = 9;
                mintKeypair = web3_js_1.Keypair.generate();
                mint = mintKeypair.publicKey;
                mintLen = (0, spl_token_1.getMintLen)([spl_token_1.ExtensionType.NonTransferable]);
                metadata = {
                    mint: mint,
                    name: 'VERXIO',
                    symbol: 'VERXIO',
                    uri: 'URI',
                    additionalMetadata: [['new-field', 'new-value']],
                };
                metadataLen = spl_token_1.TYPE_SIZE + spl_token_1.LENGTH_SIZE + (0, spl_token_metadata_1.pack)(metadata).length;
                return [4 /*yield*/, connection.getMinimumBalanceForRentExemption(mintLen + metadataLen)];
            case 4:
                lamports = _d.sent();
                transaction = new web3_js_1.Transaction().add(web3_js_1.SystemProgram.createAccount({
                    fromPubkey: payer.publicKey,
                    newAccountPubkey: mint,
                    space: mintLen,
                    lamports: lamports,
                    programId: spl_token_1.TOKEN_2022_PROGRAM_ID,
                }), (0, spl_token_1.createInitializeNonTransferableMintInstruction)(mint, spl_token_1.TOKEN_2022_PROGRAM_ID), (0, spl_token_1.createInitializeMintInstruction)(mint, decimals, mintAuthority.publicKey, null, spl_token_1.TOKEN_2022_PROGRAM_ID), (0, spl_token_metadata_1.createInitializeInstruction)({
                    programId: spl_token_1.TOKEN_2022_PROGRAM_ID,
                    mint: mint,
                    metadata: mint,
                    name: metadata.name,
                    symbol: metadata.symbol,
                    uri: metadata.uri,
                    mintAuthority: payer.publicKey,
                    updateAuthority: payer.publicKey,
                }));
                return [4 /*yield*/, (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [payer, mintKeypair], undefined)];
            case 5:
                _d.sent();
                return [2 /*return*/];
        }
    });
}); })();
