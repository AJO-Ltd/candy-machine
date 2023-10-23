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
const anchor_1 = require("@project-serum/anchor");
const dayjs_1 = __importDefault(require("dayjs"));
const idl_1 = require("../sdk/idl");
const candyMachineMintNftIx_1 = __importDefault(require("../sdk/instructions/candyMachineMintNftIx"));
const candyMachineSetCollectionDuringMintIx_1 = __importDefault(require("../sdk/instructions/candyMachineSetCollectionDuringMintIx"));
const findCandyMachineCollectionPda_1 = __importDefault(require("../sdk/pdas/findCandyMachineCollectionPda"));
const findCandyMachineCreatorPda_1 = __importDefault(require("../sdk/pdas/findCandyMachineCreatorPda"));
const MintPhase_1 = __importDefault(require("../sdk/types/MintPhase"));
const getMintPhase_1 = __importDefault(require("../sdk/utils/getMintPhase"));
const getProgramIdsFromEnvironment_1 = __importDefault(require("../sdk/utils/getProgramIdsFromEnvironment"));
class FormfnCandyMachineSdk {
    constructor({ connection, environment, wallet, }) {
        this._idl = idl_1.FORMFN_CANDY_MACHINE_IDL;
        this._connection = connection;
        const provider = new anchor_1.AnchorProvider(connection, wallet, {
            preflightCommitment: "recent",
        });
        const programIds = (0, getProgramIdsFromEnvironment_1.default)(environment);
        this._botSignerAuthority = programIds.botSignerAuthority;
        this._candyMachineProgramId = programIds.candyMachineProgramId;
        this._program = new anchor_1.Program(idl_1.FORMFN_CANDY_MACHINE_IDL, this.candyMachineProgramId, provider);
    }
    get connection() {
        return this._connection;
    }
    get idl() {
        return this._idl;
    }
    get program() {
        return this._program;
    }
    get botSignerAuthority() {
        return this._botSignerAuthority;
    }
    get candyMachineProgramId() {
        return this._candyMachineProgramId;
    }
    fetchCandyMachine(candyMachine) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.program.account.candyMachine.fetch(candyMachine);
        });
    }
    fetchCandyMachineCollectionPda(candyMachine) {
        return __awaiter(this, void 0, void 0, function* () {
            const [collectionPda] = (0, findCandyMachineCollectionPda_1.default)(candyMachine, this.candyMachineProgramId);
            return this.program.account.collectionPda.fetch(collectionPda);
        });
    }
    findCandyMachineCreatorPda(candyMachine) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, findCandyMachineCreatorPda_1.default)(candyMachine, this.candyMachineProgramId);
        });
    }
    getExpectedMintPrice(candyMachine) {
        return __awaiter(this, void 0, void 0, function* () {
            const candyMachineState = yield this.fetchCandyMachine(candyMachine);
            const { allowlistPrice, allowlistSaleStartTime, premintPrice, price, publicSaleEndTime, publicSaleStartTime, } = candyMachineState.data;
            const mintPhase = (0, getMintPhase_1.default)({
                allowlistSaleStartTimeUnix: allowlistSaleStartTime == null
                    ? null
                    : dayjs_1.default.unix(allowlistSaleStartTime.toNumber()),
                publicSaleEndTimeUnix: dayjs_1.default.unix(publicSaleEndTime.toNumber()),
                publicSaleStartTimeUnix: dayjs_1.default.unix(publicSaleStartTime.toNumber()),
            });
            switch (mintPhase) {
                case MintPhase_1.default.Premint:
                    return premintPrice !== null && premintPrice !== void 0 ? premintPrice : price;
                case MintPhase_1.default.Allowlist:
                    return allowlistPrice !== null && allowlistPrice !== void 0 ? allowlistPrice : price;
                case MintPhase_1.default.Public:
                case MintPhase_1.default.Expired:
                    return price;
            }
        });
    }
    mintNft({ buyer, buyerAllowlistTokenAccount, candyMachine, mint, }, { buyerWithAllowlistProofData, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const expectedPrice = yield this.getExpectedMintPrice(candyMachine);
            const mintNftIx = yield (0, candyMachineMintNftIx_1.default)({
                botSignerAuthority: this.botSignerAuthority,
                buyer,
                buyerAllowlistTokenAccount,
                candyMachine,
                mint,
            }, {
                buyerWithAllowlistProofData,
                expectedPrice,
                program: this.program,
            });
            const setCollectionDuringMintIx = yield (0, candyMachineSetCollectionDuringMintIx_1.default)({
                buyer,
                candyMachine,
                mint,
            }, {
                program: this.program,
            });
            return (0, formfunction_program_shared_1.ixsToTx)([mintNftIx, setCollectionDuringMintIx]);
        });
    }
}
exports.default = FormfnCandyMachineSdk;
//# sourceMappingURL=FormfnCandyMachineSdk.js.map