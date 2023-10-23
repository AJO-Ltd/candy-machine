import { PublicKey, TransactionInstruction } from "@solana/web3.js";
import { CandyMachineProgram } from "../../sdk/idl";
type Accounts = {
    buyer: PublicKey;
    candyMachine: PublicKey;
    mint: PublicKey;
};
type Args = {
    program: CandyMachineProgram;
};
export default function candyMachineSetCollectionDuringMintIx({ buyer, candyMachine, mint }: Accounts, { program }: Args): Promise<TransactionInstruction>;
export {};
//# sourceMappingURL=candyMachineSetCollectionDuringMintIx.d.ts.map