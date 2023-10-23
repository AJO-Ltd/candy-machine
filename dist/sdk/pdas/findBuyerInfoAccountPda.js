"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
function findBuyerInfoAccountPda(candyMachine, buyer, candyMachineProgramId) {
    return web3_js_1.PublicKey.findProgramAddressSync([
        Buffer.from("buyer_info_account"),
        candyMachine.toBuffer(),
        buyer.toBuffer(),
    ], candyMachineProgramId);
}
exports.default = findBuyerInfoAccountPda;
//# sourceMappingURL=findBuyerInfoAccountPda.js.map