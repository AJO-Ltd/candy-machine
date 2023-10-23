"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function findCandyMachineCollectionPda(candyMachine, candyMachineProgramId) {
    return web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("collection"), candyMachine.toBuffer()], candyMachineProgramId);
}
exports.default = findCandyMachineCollectionPda;
//# sourceMappingURL=findCandyMachineCollectionPda.js.map