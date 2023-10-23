"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function findCandyMachineCreatorPda(candyMachine, candyMachineProgramId) {
    return web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("candy_machine"), candyMachine.toBuffer()], candyMachineProgramId);
}
exports.default = findCandyMachineCreatorPda;
//# sourceMappingURL=findCandyMachineCreatorPda.js.map