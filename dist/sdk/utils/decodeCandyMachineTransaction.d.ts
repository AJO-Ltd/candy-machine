import { Maybe } from "@formfunction-hq/formfunction-program-shared";
import { ParsedTransactionWithMeta, PublicKey } from "@solana/web3.js";
import DecodedFormfnCandyMachineTransactionResult from "../../sdk/types/DecodedFormfnCandyMachineTransactionResult";
export default function decodeCandyMachineTransaction(programId: PublicKey, parsedTransaction: ParsedTransactionWithMeta): Maybe<DecodedFormfnCandyMachineTransactionResult>;
//# sourceMappingURL=decodeCandyMachineTransaction.d.ts.map