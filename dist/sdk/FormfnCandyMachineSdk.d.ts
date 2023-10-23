import { AnchorWallet, Environment, Maybe } from "@formfunction-hq/formfunction-program-shared";
import { BN, Idl } from "@project-serum/anchor";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import { CandyMachineProgram } from "../sdk/idl";
import BuyerWithAllowlistProofData from "../sdk/types/BuyerWithAllowlistProofData";
import CandyMachineAccount from "../sdk/types/candy-machine/CandyMachineAccount";
export default class FormfnCandyMachineSdk {
    private _connection;
    private _idl;
    private _program;
    private _botSignerAuthority;
    private _candyMachineProgramId;
    constructor({ connection, environment, wallet, }: {
        connection: Connection;
        environment: Environment;
        wallet: AnchorWallet;
    });
    get connection(): Connection;
    get idl(): Idl;
    get program(): CandyMachineProgram;
    get botSignerAuthority(): PublicKey;
    get candyMachineProgramId(): PublicKey;
    fetchCandyMachine(candyMachine: PublicKey): Promise<CandyMachineAccount>;
    fetchCandyMachineCollectionPda(candyMachine: PublicKey): Promise<{
        formfnAuthority: PublicKey;
        creatorAuthority: PublicKey;
        treasuryWallet: PublicKey;
        treasuryMint: PublicKey | null;
        itemsRedeemed: BN;
        data: {
            uuid: string;
            price: BN;
            premintPrice: BN | null;
            allowlistPrice: BN | null;
            symbol: string;
            sellerFeeBasisPoints: number;
            maxSupply: BN;
            itemsAvailable: BN;
            isMutable: boolean;
            allowlistSaleStartTime: BN | null;
            publicSaleStartTime: BN;
            publicSaleEndTime: BN;
            creators: {
                address: PublicKey;
                verified: boolean;
                share: number;
            }[];
            omniMintWallets: PublicKey[];
            hiddenSettings: {
                name: string;
                uri: string;
                hash: number[];
            } | null;
            botProtectionEnabled: boolean;
            limitPerAddress: number;
            sequentialMintOrderEnabled: boolean;
            merkleAllowlistRootList: unknown;
            splTokenAllowlistSettings: {
                mode: {
                    burnEveryTime?: Record<string, never> | undefined;
                    neverBurn?: Record<string, never> | undefined;
                };
                mint: PublicKey;
            } | null;
        };
        numberBoughtMerkleAllowlistPhase: number;
        numberBoughtPublicPhase: number;
        mint: PublicKey;
        candyMachine: PublicKey;
        allowThaw: boolean;
        frozenCount: BN;
        mintStart: BN | null;
        freezeTime: BN;
        freezeFee: BN;
    }>;
    findCandyMachineCreatorPda(candyMachine: PublicKey): Promise<import("@formfunction-hq/formfunction-program-shared/dist/types/PdaResult").default>;
    getExpectedMintPrice(candyMachine: PublicKey): Promise<BN>;
    mintNft({ buyer, buyerAllowlistTokenAccount, candyMachine, mint, }: {
        buyer: PublicKey;
        buyerAllowlistTokenAccount: Maybe<PublicKey>;
        candyMachine: PublicKey;
        mint: PublicKey;
    }, { buyerWithAllowlistProofData, }: {
        buyerWithAllowlistProofData: Maybe<BuyerWithAllowlistProofData>;
    }): Promise<Transaction>;
}
//# sourceMappingURL=FormfnCandyMachineSdk.d.ts.map