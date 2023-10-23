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
const web3_js_1 = require("@solana/web3.js");
const findCandyMachineCollectionAuthorityPda_1 = __importDefault(require("../../sdk/pdas/findCandyMachineCollectionAuthorityPda"));
const findCandyMachineCollectionPda_1 = __importDefault(require("../../sdk/pdas/findCandyMachineCollectionPda"));
function candyMachineSetCollectionDuringMintIx({ buyer, candyMachine, mint }, { program }) {
    return __awaiter(this, void 0, void 0, function* () {
        const [collectionPda] = (0, findCandyMachineCollectionPda_1.default)(candyMachine, program.programId);
        const collectionPdaAccount = yield program.account.collectionPda.fetch(collectionPda);
        const [metadata] = (0, formfunction_program_shared_1.findTokenMetadataPda)(mint);
        const [collectionPdaMetadata] = (0, formfunction_program_shared_1.findTokenMetadataPda)(collectionPdaAccount.mint);
        const [collectionAuthorityPubkey] = (0, findCandyMachineCollectionAuthorityPda_1.default)(collectionPdaAccount.mint, collectionPda);
        const [collectionMasterEdition] = (0, formfunction_program_shared_1.findEditionPda)(collectionPdaAccount.mint);
        const candyMachineState = yield program.account.candyMachine.fetch(candyMachine);
        return program.methods
            .setCollectionDuringMint()
            .accounts({
            buyer,
            candyMachine,
            collectionAuthorityRecord: collectionAuthorityPubkey,
            collectionMasterEdition,
            collectionMetadata: collectionPdaMetadata,
            collectionMint: collectionPdaAccount.mint,
            collectionPda,
            creatorAuthority: candyMachineState.creatorAuthority,
            instructionSysvarAccount: web3_js_1.SYSVAR_INSTRUCTIONS_PUBKEY,
            metadata,
            tokenMetadataProgram: formfunction_program_shared_1.TOKEN_METADATA_PROGRAM_ID,
        })
            .instruction();
    });
}
exports.default = candyMachineSetCollectionDuringMintIx;
//# sourceMappingURL=candyMachineSetCollectionDuringMintIx.js.map