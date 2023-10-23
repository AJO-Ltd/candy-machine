"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dayjs_1 = __importDefault(require("dayjs"));
const MintPhase_1 = __importDefault(require("../../sdk/types/MintPhase"));
// Mirrors logic in program CandyMachine::get_mint_phase.
// Note: All the original cm field are in unix time in seconds.
function getMintPhase({ allowlistSaleStartTimeUnix, publicSaleEndTimeUnix, publicSaleStartTimeUnix, }) {
    const now = (0, dayjs_1.default)();
    if (now.isAfter(publicSaleEndTimeUnix)) {
        return MintPhase_1.default.Expired;
    }
    if (now.isAfter(publicSaleStartTimeUnix)) {
        return MintPhase_1.default.Public;
    }
    if (allowlistSaleStartTimeUnix != null) {
        if (now.isAfter(allowlistSaleStartTimeUnix)) {
            return MintPhase_1.default.Allowlist;
        }
    }
    return MintPhase_1.default.Premint;
}
exports.default = getMintPhase;
//# sourceMappingURL=getMintPhase.js.map