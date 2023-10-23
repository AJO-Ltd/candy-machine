import { MerkleTree } from "@formfunction-hq/formfunction-program-shared";
import { PublicKey } from "@solana/web3.js";
import MerkleAllowlistBuyerInfo from "../../../sdk/types/MerkleAllowlistBuyerInfo";
import MerkleAllowlistBuyerWithProof from "../../../sdk/types/MerkleAllowlistBuyerWithProof";
type MerkleAllowlistBuyersListForTest = {
    buyersChunk: Array<MerkleAllowlistBuyerWithProof>;
    tree: MerkleTree;
};
export default function constructMerkleAllowlist(candyMachinePubkey: PublicKey, buyers: Array<MerkleAllowlistBuyerInfo>, merkleTreeLeafSizeLimit?: number): Array<MerkleAllowlistBuyersListForTest>;
export {};
//# sourceMappingURL=constructMerkleAllowlist.d.ts.map