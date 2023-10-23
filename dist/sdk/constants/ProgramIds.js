"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAINNET_PROGRAM_IDS = exports.DEVNET_PROGRAM_IDS = exports.TESTNET_PROGRAM_IDS = exports.LOCALNET_PROGRAM_IDS = void 0;
const web3_js_1 = require("@solana/web3.js");
exports.LOCALNET_PROGRAM_IDS = {
    botSignerAuthority: new web3_js_1.PublicKey("antiDV8bRvF4XTeRqmyHV1jpHD4Lvz7gKBKBBRQb8ir"),
    candyMachineProgramId: new web3_js_1.PublicKey("gachaC2NGh63y4ogLK8xHLeB5ZFZ8ypDLXEQyKNm8sy"),
};
exports.TESTNET_PROGRAM_IDS = {
    botSignerAuthority: new web3_js_1.PublicKey("antiDV8bRvF4XTeRqmyHV1jpHD4Lvz7gKBKBBRQb8ir"),
    candyMachineProgramId: new web3_js_1.PublicKey("gachaC2NGh63y4ogLK8xHLeB5ZFZ8ypDLXEQyKNm8sy"),
};
exports.DEVNET_PROGRAM_IDS = {
    botSignerAuthority: new web3_js_1.PublicKey("antiDV8bRvF4XTeRqmyHV1jpHD4Lvz7gKBKBBRQb8ir"),
    candyMachineProgramId: new web3_js_1.PublicKey("gachaC2NGh63y4ogLK8xHLeB5ZFZ8ypDLXEQyKNm8sy"),
};
exports.MAINNET_PROGRAM_IDS = {
    botSignerAuthority: new web3_js_1.PublicKey("antiScHGm8NAqfpdFNYbv3c9ntY6xksvvTN3B9cDf5Y"),
    candyMachineProgramId: new web3_js_1.PublicKey("gachaC2NGh63y4ogLK8xHLeB5ZFZ8ypDLXEQyKNm8sy"),
};
//# sourceMappingURL=ProgramIds.js.map