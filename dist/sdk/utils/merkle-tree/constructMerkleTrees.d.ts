import { MerkleTree } from "@formfunction-hq/formfunction-program-shared";
import { PublicKey } from "@solana/web3.js";
import MerkleAllowlistBuyerInfo from "../../../sdk/types/MerkleAllowlistBuyerInfo";
export default function constructMerkleTrees(buyers: Array<MerkleAllowlistBuyerInfo>, candyMachinePubkey: PublicKey, treeLeafCountLimit?: number): Array<MerkleTree>;
//# sourceMappingURL=constructMerkleTrees.d.ts.map