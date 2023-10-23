"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formfunction_program_shared_1 = require("@formfunction-hq/formfunction-program-shared");
const MerkleTreeLeafCountLimit_1 = __importDefault(require("../../../sdk/constants/MerkleTreeLeafCountLimit"));
const constructMerkleTree_1 = __importDefault(require("../../../sdk/utils/merkle-tree/constructMerkleTree"));
function constructMerkleTrees(buyers, candyMachinePubkey, treeLeafCountLimit = MerkleTreeLeafCountLimit_1.default) {
    return (0, formfunction_program_shared_1.chunkArray)(buyers, treeLeafCountLimit).map((buyersChunk) => (0, constructMerkleTree_1.default)(buyersChunk, candyMachinePubkey));
}
exports.default = constructMerkleTrees;
//# sourceMappingURL=constructMerkleTrees.js.map