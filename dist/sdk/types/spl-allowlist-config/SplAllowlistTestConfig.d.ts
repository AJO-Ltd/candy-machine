import { MaybeUndef } from "@formfunction-hq/formfunction-program-shared";
import { Keypair, PublicKey } from "@solana/web3.js";
type SplAllowlistTestConfig = {
    allowlistMembers: Array<{
        address: PublicKey;
        balance: string;
    }>;
    keypairs: MaybeUndef<Array<Keypair>>;
    splTokenAllowlistMint: PublicKey;
};
export default SplAllowlistTestConfig;
//# sourceMappingURL=SplAllowlistTestConfig.d.ts.map