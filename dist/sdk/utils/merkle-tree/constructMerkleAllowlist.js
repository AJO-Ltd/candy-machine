"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formfunction_program_shared_1 = require("@formfunction-hq/formfunction-program-shared");
const MerkleTreeLeafCountLimit_1 = __importDefault(require("../../../sdk/constants/MerkleTreeLeafCountLimit"));
const constructMerkleTree_1 = __importDefault(require("../../../sdk/utils/merkle-tree/constructMerkleTree"));
function constructMerkleAllowlist(candyMachinePubkey, buyers, merkleTreeLeafSizeLimit = MerkleTreeLeafCountLimit_1.default) {
    return (0, formfunction_program_shared_1.chunkArray)(buyers, merkleTreeLeafSizeLimit).map((chunk, merkleTreeIndex) => {
        const tree = (0, constructMerkleTree_1.default)(chunk, candyMachinePubkey);
        const buyersChunk = chunk.map((buyer, index) => {
            const proof = tree.getProof(index);
            const { amount, address } = buyer;
            return {
                address,
                amount,
                merkleTreeIndex,
                proof,
                serializedProof: (0, formfunction_program_shared_1.serializeMerkleProof)(proof),
            };
        });
        return { buyersChunk, tree };
    });
}
exports.default = constructMerkleAllowlist;
//# sourceMappingURL=constructMerkleAllowlist.js.map