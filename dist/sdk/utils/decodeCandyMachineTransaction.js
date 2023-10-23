"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formfunction_program_shared_1 = require("@formfunction-hq/formfunction-program-shared");
const idl_1 = require("../../sdk/idl");
function decodeCandyMachineTransaction(programId, parsedTransaction) {
    for (const idl of [idl_1.FORMFN_CANDY_MACHINE_IDL]) {
        const result = (0, formfunction_program_shared_1.decodeTransactionUsingProgramIdl)(idl, programId, parsedTransaction);
        if (result != null) {
            return result;
        }
    }
    return null;
}
exports.default = decodeCandyMachineTransaction;
//# sourceMappingURL=decodeCandyMachineTransaction.js.map