/**
 * NOTE: This is an auto-generated file. Don't edit it directly.
 */
import { DecodedInstructionAccount, GenericDecodedTransaction } from "@formfunction-hq/formfunction-program-shared";
import FormfnCandyMachineInstructionName from "../../sdk/types/FormfnCandyMachineInstructionName";
declare const AddConfigLinesAccounts: ("candyMachine" | "formfnAuthority")[];
declare const AppendMerkleAllowlistRootsAccounts: ("candyMachine" | "formfnAuthority")[];
declare const ClearMerkleAllowlistRootsAccounts: ("candyMachine" | "formfnAuthority")[];
declare const InitializeCandyMachineAccounts: ("candyMachine" | "formfnAuthority" | "treasuryWallet" | "creatorAuthority" | "payer" | "systemProgram" | "rent")[];
declare const MintNftAccounts: ("candyMachine" | "treasuryWallet" | "creatorAuthority" | "systemProgram" | "rent" | "candyMachineCreator" | "buyer" | "metadata" | "mint" | "masterEdition" | "tokenMetadataProgram" | "tokenProgram" | "recentSlothashes" | "instructionSysvarAccount" | "botSignerAuthority" | "buyerInfoAccount" | "buyerTokenAccount" | "ataProgram")[];
declare const RemoveCollectionAccounts: ("candyMachine" | "formfnAuthority" | "metadata" | "mint" | "tokenMetadataProgram" | "collectionPda" | "collectionAuthorityRecord")[];
declare const RemoveFreezeAccounts: ("candyMachine" | "formfnAuthority" | "freezePda")[];
declare const SetCollectionAccounts: ("candyMachine" | "formfnAuthority" | "creatorAuthority" | "payer" | "systemProgram" | "rent" | "metadata" | "mint" | "tokenMetadataProgram" | "collectionPda" | "collectionAuthorityRecord" | "edition")[];
declare const SetCollectionDuringMintAccounts: ("candyMachine" | "creatorAuthority" | "buyer" | "metadata" | "tokenMetadataProgram" | "instructionSysvarAccount" | "collectionPda" | "collectionAuthorityRecord" | "collectionMint" | "collectionMetadata" | "collectionMasterEdition")[];
declare const SetFreezeAccounts: ("candyMachine" | "formfnAuthority" | "systemProgram" | "freezePda")[];
declare const ThawNftAccounts: ("candyMachine" | "payer" | "systemProgram" | "mint" | "tokenMetadataProgram" | "tokenProgram" | "freezePda" | "edition" | "tokenAccount" | "owner")[];
declare const UnlockFundsAccounts: ("candyMachine" | "formfnAuthority" | "systemProgram" | "freezePda")[];
declare const UpdateAuthorityAccounts: ("candyMachine" | "formfnAuthority" | "treasuryWallet")[];
declare const UpdateCandyMachineAccounts: ("candyMachine" | "formfnAuthority" | "treasuryWallet")[];
declare const WithdrawFundsAccounts: ("candyMachine" | "formfnAuthority")[];
type DecodedFormfnCandyMachineTransactionResult = {
    addConfigLines?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof AddConfigLinesAccounts[0]]: DecodedInstructionAccount;
        };
    };
    appendMerkleAllowlistRoots?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof AppendMerkleAllowlistRootsAccounts[0]]: DecodedInstructionAccount;
        };
    };
    clearMerkleAllowlistRoots?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof ClearMerkleAllowlistRootsAccounts[0]]: DecodedInstructionAccount;
        };
    };
    initializeCandyMachine?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof InitializeCandyMachineAccounts[0]]: DecodedInstructionAccount;
        };
    };
    mintNft?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof MintNftAccounts[0]]: DecodedInstructionAccount;
        };
    };
    removeCollection?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof RemoveCollectionAccounts[0]]: DecodedInstructionAccount;
        };
    };
    removeFreeze?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof RemoveFreezeAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setCollection?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof SetCollectionAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setCollectionDuringMint?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof SetCollectionDuringMintAccounts[0]]: DecodedInstructionAccount;
        };
    };
    setFreeze?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof SetFreezeAccounts[0]]: DecodedInstructionAccount;
        };
    };
    thawNft?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof ThawNftAccounts[0]]: DecodedInstructionAccount;
        };
    };
    unlockFunds?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof UnlockFundsAccounts[0]]: DecodedInstructionAccount;
        };
    };
    updateAuthority?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof UpdateAuthorityAccounts[0]]: DecodedInstructionAccount;
        };
    };
    updateCandyMachine?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof UpdateCandyMachineAccounts[0]]: DecodedInstructionAccount;
        };
    };
    withdrawFunds?: GenericDecodedTransaction<FormfnCandyMachineInstructionName> & {
        accountsMap: {
            [Key in typeof WithdrawFundsAccounts[0]]: DecodedInstructionAccount;
        };
    };
};
export default DecodedFormfnCandyMachineTransactionResult;
//# sourceMappingURL=DecodedFormfnCandyMachineTransactionResult.d.ts.map