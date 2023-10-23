"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formfunction_program_shared_1 = require("@formfunction-hq/formfunction-program-shared");
const ProgramIds_1 = require("../../sdk/constants/ProgramIds");
function getProgramIdsFromEnvironment(environment) {
    switch (environment) {
        case formfunction_program_shared_1.Environment.Local:
            return ProgramIds_1.LOCALNET_PROGRAM_IDS;
        case formfunction_program_shared_1.Environment.Development:
            return ProgramIds_1.DEVNET_PROGRAM_IDS;
        case formfunction_program_shared_1.Environment.Testnet:
            return ProgramIds_1.TESTNET_PROGRAM_IDS;
        case formfunction_program_shared_1.Environment.Production:
            return ProgramIds_1.MAINNET_PROGRAM_IDS;
        default:
            return (0, formfunction_program_shared_1.assertUnreachable)(environment);
    }
}
exports.default = getProgramIdsFromEnvironment;
//# sourceMappingURL=getProgramIdsFromEnvironment.js.map