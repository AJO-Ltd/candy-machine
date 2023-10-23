/// <reference types="@solana/web3.js" />
/// <reference types="@formfunction-hq/formfunction-program-shared/node_modules/@metaplex-foundation/mpl-token-metadata/node_modules/@solana/web3.js" />
import { Environment } from "@formfunction-hq/formfunction-program-shared";
export default function getProgramIdsFromEnvironment(environment: Environment): {
    botSignerAuthority: import("@solana/web3.js").PublicKey;
    candyMachineProgramId: import("@solana/web3.js").PublicKey;
};
//# sourceMappingURL=getProgramIdsFromEnvironment.d.ts.map