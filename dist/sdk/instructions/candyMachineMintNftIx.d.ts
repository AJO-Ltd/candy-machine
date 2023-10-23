import { Maybe } from "@formfunction-hq/formfunction-program-shared";
import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import BN from "bn.js";
import { CandyMachineProgram } from "../../sdk/idl";
import BuyerWithAllowlistProofData from "../../sdk/types/BuyerWithAllowlistProofData";
type Accounts = {
    botSignerAuthority: PublicKey;
    buyer: PublicKey;
    buyerAllowlistTokenAccount: Maybe<PublicKey>;
    candyMachine: PublicKey;
    mint: PublicKey;
};
type Args = {
    buyerWithAllowlistProofData: Maybe<BuyerWithAllowlistProofData>;
    expectedPrice: BN;
    program: CandyMachineProgram;
};
export default function candyMachineMintNftIx({ botSignerAuthority, buyer, buyerAllowlistTokenAccount, candyMachine, mint, }: Accounts, { buyerWithAllowlistProofData, expectedPrice: expectedPrice, program }: Args): Promise<TransactionInstruction>;
export {};
//# sourceMappingURL=candyMachineMintNftIx.d.ts.map