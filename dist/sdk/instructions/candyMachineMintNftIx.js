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
const formfunction_program_shared_1 = require("@formfunction-hq/formfunction-program-shared");
const spl_token_1 = require("@solana/spl-token");
const web3_js_1 = require("@solana/web3.js");
const dayjs_1 = __importDefault(require("dayjs"));
const findBuyerInfoAccountPda_1 = __importDefault(require("../../sdk/pdas/findBuyerInfoAccountPda"));
const findCandyMachineCreatorPda_1 = __importDefault(require("../../sdk/pdas/findCandyMachineCreatorPda"));
const SplTokenAllowlistMode_1 = __importDefault(require("../../sdk/types/candy-machine/SplTokenAllowlistMode"));
const MintPhase_1 = __importDefault(require("../../sdk/types/MintPhase"));
const getMintPhase_1 = __importDefault(require("../../sdk/utils/getMintPhase"));
const parseSplTokenAllowlistModeEnum_1 = __importDefault(require("../../sdk/utils/parseSplTokenAllowlistModeEnum"));
function getIxMerkleAllowlistProofData(buyerWithAllowlistProofData) {
    if (buyerWithAllowlistProofData == null) {
        return null;
    }
    const { amount, serializedProof: proof, rootIndexForProof, } = buyerWithAllowlistProofData;
    return {
        amount,
        proof: (0, formfunction_program_shared_1.deserializeMerkleProof)(proof).map((val) => [...val]),
        rootIndexForProof,
    };
}
function getSplAllowlistSettingRemainingAccounts(candyMachineState, buyerAllowlistTokenAccount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (buyerAllowlistTokenAccount == null) {
            return [];
        }
        const { allowlistSaleStartTime, publicSaleEndTime, publicSaleStartTime } = candyMachineState.data;
        const mintPhase = (0, getMintPhase_1.default)({
            allowlistSaleStartTimeUnix: allowlistSaleStartTime == null
                ? null
                : dayjs_1.default.unix(allowlistSaleStartTime.toNumber()),
            publicSaleEndTimeUnix: dayjs_1.default.unix(publicSaleEndTime.toNumber()),
            publicSaleStartTimeUnix: dayjs_1.default.unix(publicSaleStartTime.toNumber()),
        });
        const { splTokenAllowlistSettings } = candyMachineState.data;
        if (splTokenAllowlistSettings == null || mintPhase !== MintPhase_1.default.Allowlist) {
            return [];
        }
        const { mint, mode } = splTokenAllowlistSettings;
        const buyerTokenAccount = {
            isSigner: false,
            isWritable: true,
            pubkey: buyerAllowlistTokenAccount,
        };
        const remainingAccounts = [buyerTokenAccount];
        if ((0, parseSplTokenAllowlistModeEnum_1.default)(mode) === SplTokenAllowlistMode_1.default.BurnEveryTime) {
            const splTokenAllowlistMintAccount = {
                isSigner: false,
                isWritable: true,
                pubkey: mint,
            };
            remainingAccounts.push(splTokenAllowlistMintAccount);
        }
        return remainingAccounts;
    });
}
function candyMachineMintNftIx({ botSignerAuthority, buyer, buyerAllowlistTokenAccount, candyMachine, mint, }, { buyerWithAllowlistProofData, expectedPrice: expectedPrice, program }) {
    return __awaiter(this, void 0, void 0, function* () {
        const [buyerTokenAccount] = (0, formfunction_program_shared_1.findAtaPda)(buyer, mint);
        const [metadata] = (0, formfunction_program_shared_1.findTokenMetadataPda)(mint);
        const [masterEdition] = (0, formfunction_program_shared_1.findEditionPda)(mint);
        const [buyerInfoAccount, buyerInfoAccountBump] = (0, findBuyerInfoAccountPda_1.default)(candyMachine, buyer, program.programId);
        const [candyMachineCreator, candyMachineCreatorBump] = (0, findCandyMachineCreatorPda_1.default)(candyMachine, program.programId);
        const candyMachineState = (yield program.account.candyMachine.fetch(candyMachine));
        const splTokenRemainingAccounts = yield getSplAllowlistSettingRemainingAccounts(candyMachineState, buyerAllowlistTokenAccount);
        const ix = yield program.methods
            .mintNft(candyMachineCreatorBump, buyerInfoAccountBump, getIxMerkleAllowlistProofData(buyerWithAllowlistProofData), expectedPrice)
            .accounts({
            ataProgram: spl_token_1.ASSOCIATED_TOKEN_PROGRAM_ID,
            botSignerAuthority,
            buyer,
            buyerInfoAccount,
            buyerTokenAccount,
            candyMachine,
            candyMachineCreator,
            creatorAuthority: candyMachineState.creatorAuthority,
            instructionSysvarAccount: web3_js_1.SYSVAR_INSTRUCTIONS_PUBKEY,
            masterEdition,
            metadata,
            mint,
            recentSlothashes: web3_js_1.SYSVAR_SLOT_HASHES_PUBKEY,
            rent: web3_js_1.SYSVAR_RENT_PUBKEY,
            systemProgram: web3_js_1.SystemProgram.programId,
            tokenMetadataProgram: formfunction_program_shared_1.TOKEN_METADATA_PROGRAM_ID,
            tokenProgram: spl_token_1.TOKEN_PROGRAM_ID,
            treasuryWallet: candyMachineState.treasuryWallet,
        })
            .remainingAccounts(splTokenRemainingAccounts)
            .instruction();
        // If bot protection measures are enabled for this candy machine, we want to
        // set the bot signer authority account as a signer.
        ix.keys = ix.keys.map((key) => {
            if (candyMachineState.data.botProtectionEnabled === true &&
                (0, formfunction_program_shared_1.arePublicKeysEqual)(key.pubkey, botSignerAuthority)) {
                return Object.assign(Object.assign({}, key), { isSigner: true });
            }
            return key;
        });
        return ix;
    });
}
exports.default = candyMachineMintNftIx;
//# sourceMappingURL=candyMachineMintNftIx.js.map