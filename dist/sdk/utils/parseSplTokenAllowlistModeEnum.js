"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formfunction_program_shared_1 = require("@formfunction-hq/formfunction-program-shared");
const SplTokenAllowlistMode_1 = __importDefault(require("../../sdk/types/candy-machine/SplTokenAllowlistMode"));
function parseSplTokenAllowlistModeEnum(anchorData) {
    const mode = Object.keys(anchorData)[0];
    switch (mode) {
        case SplTokenAllowlistMode_1.default.BurnEveryTime:
            return mode;
        case SplTokenAllowlistMode_1.default.NeverBurn:
            return mode;
        default:
            return (0, formfunction_program_shared_1.assertUnreachable)(mode);
    }
}
exports.default = parseSplTokenAllowlistModeEnum;
//# sourceMappingURL=parseSplTokenAllowlistModeEnum.js.map