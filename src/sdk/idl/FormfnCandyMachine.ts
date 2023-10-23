export type FormfnCandyMachine = {
  version: "0.0.1";
  name: "formfn_candy_machine";
  instructions: [
    {
      name: "addConfigLines";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: false; isSigner: true }
      ];
      args: [
        { name: "index"; type: "u32" },
        { name: "configLines"; type: { vec: { defined: "ConfigLine" } } }
      ];
    },
    {
      name: "appendMerkleAllowlistRoots";
      accounts: [
        { name: "formfnAuthority"; isMut: false; isSigner: true },
        { name: "candyMachine"; isMut: true; isSigner: false }
      ];
      args: [{ name: "rootsToAppend"; type: { vec: { array: ["u8", 32] } } }];
    },
    {
      name: "clearMerkleAllowlistRoots";
      accounts: [
        { name: "formfnAuthority"; isMut: false; isSigner: true },
        { name: "candyMachine"; isMut: true; isSigner: false }
      ];
      args: [];
    },
    {
      name: "initializeCandyMachine";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "treasuryWallet"; isMut: false; isSigner: false },
        { name: "formfnAuthority"; isMut: false; isSigner: false },
        { name: "creatorAuthority"; isMut: false; isSigner: false },
        { name: "payer"; isMut: false; isSigner: true },
        { name: "systemProgram"; isMut: false; isSigner: false },
        { name: "rent"; isMut: false; isSigner: false }
      ];
      args: [{ name: "data"; type: { defined: "CandyMachineData" } }];
    },
    {
      name: "mintNft";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "candyMachineCreator"; isMut: false; isSigner: false },
        { name: "buyer"; isMut: false; isSigner: true },
        { name: "treasuryWallet"; isMut: true; isSigner: false },
        { name: "metadata"; isMut: true; isSigner: false },
        { name: "mint"; isMut: true; isSigner: true },
        { name: "creatorAuthority"; isMut: false; isSigner: false },
        { name: "masterEdition"; isMut: true; isSigner: false },
        { name: "tokenMetadataProgram"; isMut: false; isSigner: false },
        { name: "tokenProgram"; isMut: false; isSigner: false },
        { name: "systemProgram"; isMut: false; isSigner: false },
        { name: "rent"; isMut: false; isSigner: false },
        { name: "recentSlothashes"; isMut: false; isSigner: false },
        { name: "instructionSysvarAccount"; isMut: false; isSigner: false },
        { name: "botSignerAuthority"; isMut: false; isSigner: false },
        { name: "buyerInfoAccount"; isMut: true; isSigner: false },
        { name: "buyerTokenAccount"; isMut: true; isSigner: false },
        { name: "ataProgram"; isMut: false; isSigner: false }
      ];
      args: [
        { name: "creatorBump"; type: "u8" },
        { name: "buyerInfoAccountBump"; type: "u8" },
        {
          name: "buyerMerkleAllowlistProofData";
          type: { option: { defined: "BuyerMerkleAllowlistProofData" } };
        },
        { name: "expectedPrice"; type: "u64" }
      ];
    },
    {
      name: "removeCollection";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: false; isSigner: true },
        { name: "collectionPda"; isMut: true; isSigner: false },
        { name: "metadata"; isMut: false; isSigner: false },
        { name: "mint"; isMut: false; isSigner: false },
        { name: "collectionAuthorityRecord"; isMut: true; isSigner: false },
        { name: "tokenMetadataProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "removeFreeze";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: true; isSigner: true },
        { name: "freezePda"; isMut: true; isSigner: false }
      ];
      args: [];
    },
    {
      name: "setCollection";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: false; isSigner: true },
        { name: "creatorAuthority"; isMut: true; isSigner: false },
        { name: "collectionPda"; isMut: true; isSigner: false },
        { name: "payer"; isMut: false; isSigner: true },
        { name: "systemProgram"; isMut: false; isSigner: false },
        { name: "rent"; isMut: false; isSigner: false },
        { name: "metadata"; isMut: true; isSigner: false },
        { name: "mint"; isMut: false; isSigner: false },
        { name: "edition"; isMut: false; isSigner: false },
        { name: "collectionAuthorityRecord"; isMut: true; isSigner: false },
        { name: "tokenMetadataProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "setCollectionDuringMint";
      accounts: [
        { name: "candyMachine"; isMut: false; isSigner: false },
        { name: "metadata"; isMut: false; isSigner: false },
        { name: "buyer"; isMut: false; isSigner: true },
        { name: "collectionPda"; isMut: true; isSigner: false },
        { name: "tokenMetadataProgram"; isMut: false; isSigner: false },
        { name: "instructionSysvarAccount"; isMut: false; isSigner: false },
        { name: "collectionMint"; isMut: false; isSigner: false },
        { name: "collectionMetadata"; isMut: false; isSigner: false },
        { name: "collectionMasterEdition"; isMut: false; isSigner: false },
        { name: "creatorAuthority"; isMut: false; isSigner: false },
        { name: "collectionAuthorityRecord"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "setFreeze";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: true; isSigner: true },
        { name: "freezePda"; isMut: true; isSigner: false },
        { name: "systemProgram"; isMut: false; isSigner: false }
      ];
      args: [{ name: "freezeTime"; type: "i64" }];
    },
    {
      name: "thawNft";
      accounts: [
        { name: "freezePda"; isMut: true; isSigner: false },
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "tokenAccount"; isMut: true; isSigner: false },
        { name: "owner"; isMut: false; isSigner: false },
        { name: "mint"; isMut: false; isSigner: false },
        { name: "edition"; isMut: false; isSigner: false },
        { name: "payer"; isMut: true; isSigner: true },
        { name: "tokenProgram"; isMut: false; isSigner: false },
        { name: "tokenMetadataProgram"; isMut: false; isSigner: false },
        { name: "systemProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "unlockFunds";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: true; isSigner: true },
        { name: "freezePda"; isMut: true; isSigner: false },
        { name: "systemProgram"; isMut: false; isSigner: false }
      ];
      args: [];
    },
    {
      name: "updateAuthority";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: false; isSigner: true },
        { name: "treasuryWallet"; isMut: false; isSigner: false }
      ];
      args: [{ name: "newAuthority"; type: { option: "publicKey" } }];
    },
    {
      name: "updateCandyMachine";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: false; isSigner: true },
        { name: "treasuryWallet"; isMut: false; isSigner: false }
      ];
      args: [{ name: "data"; type: { defined: "CandyMachineData" } }];
    },
    {
      name: "withdrawFunds";
      accounts: [
        { name: "candyMachine"; isMut: true; isSigner: false },
        { name: "formfnAuthority"; isMut: true; isSigner: true }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "candyMachine";
      docs: ["Candy machine state and config data."];
      type: {
        kind: "struct";
        fields: [
          { name: "formfnAuthority"; type: "publicKey" },
          { name: "creatorAuthority"; type: "publicKey" },
          { name: "treasuryWallet"; type: "publicKey" },
          { name: "treasuryMint"; type: { option: "publicKey" } },
          { name: "itemsRedeemed"; type: "u64" },
          { name: "data"; type: { defined: "CandyMachineData" } }
        ];
      };
    },
    {
      name: "buyerInfoAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "numberBoughtMerkleAllowlistPhase";
            docs: ["Number bought during the Merkle allowlist phase."];
            type: "u16";
          },
          {
            name: "numberBoughtPublicPhase";
            docs: ["Number bought during the public phase."];
            type: "u16";
          }
        ];
      };
    },
    {
      name: "collectionPda";
      docs: ["Collection PDA account"];
      type: {
        kind: "struct";
        fields: [
          { name: "mint"; type: "publicKey" },
          { name: "candyMachine"; type: "publicKey" }
        ];
      };
    },
    {
      name: "freezePda";
      docs: ["Collection PDA account"];
      type: {
        kind: "struct";
        fields: [
          { name: "candyMachine"; type: "publicKey" },
          { name: "allowThaw"; type: "bool" },
          { name: "frozenCount"; type: "u64" },
          { name: "mintStart"; type: { option: "i64" } },
          { name: "freezeTime"; type: "i64" },
          { name: "freezeFee"; type: "u64" }
        ];
      };
    }
  ];
  types: [
    {
      name: "CandyMachineData";
      docs: ["Candy machine settings data."];
      type: {
        kind: "struct";
        fields: [
          { name: "uuid"; type: "string" },
          { name: "price"; type: "u64" },
          { name: "premintPrice"; type: { option: "u64" } },
          { name: "allowlistPrice"; type: { option: "u64" } },
          {
            name: "symbol";
            docs: ["The symbol for the asset"];
            type: "string";
          },
          {
            name: "sellerFeeBasisPoints";
            docs: [
              "Royalty basis points that goes to creators in secondary sales (0-10000)"
            ];
            type: "u16";
          },
          { name: "maxSupply"; type: "u64" },
          { name: "itemsAvailable"; type: "u64" },
          { name: "isMutable"; type: "bool" },
          { name: "allowlistSaleStartTime"; type: { option: "i64" } },
          { name: "publicSaleStartTime"; type: "i64" },
          { name: "publicSaleEndTime"; type: "i64" },
          { name: "creators"; type: { vec: { defined: "Creator" } } },
          { name: "omniMintWallets"; type: { vec: "publicKey" } },
          {
            name: "hiddenSettings";
            type: { option: { defined: "HiddenSettings" } };
          },
          { name: "botProtectionEnabled"; type: "bool" },
          { name: "limitPerAddress"; type: "u16" },
          { name: "sequentialMintOrderEnabled"; type: "bool" },
          {
            name: "merkleAllowlistRootList";
            type: { vec: { array: ["u8", 32] } };
          },
          {
            name: "splTokenAllowlistSettings";
            type: { option: { defined: "SplTokenAllowlistSettings" } };
          }
        ];
      };
    },
    {
      name: "ConfigLine";
      docs: ["Individual config line for storing NFT data pre-mint."];
      type: {
        kind: "struct";
        fields: [
          { name: "name"; type: "string" },
          {
            name: "uri";
            docs: ["URI pointing to JSON representing the asset"];
            type: "string";
          }
        ];
      };
    },
    {
      name: "Creator";
      type: {
        kind: "struct";
        fields: [
          { name: "address"; type: "publicKey" },
          { name: "verified"; type: "bool" },
          { name: "share"; type: "u8" }
        ];
      };
    },
    {
      name: "HiddenSettings";
      docs: ["Hidden Settings for large mints used with offline data."];
      type: {
        kind: "struct";
        fields: [
          { name: "name"; type: "string" },
          { name: "uri"; type: "string" },
          { name: "hash"; type: { array: ["u8", 32] } }
        ];
      };
    },
    {
      name: "BuyerMerkleAllowlistProofData";
      type: {
        kind: "struct";
        fields: [
          { name: "amount"; type: "u16" },
          { name: "proof"; type: { vec: { array: ["u8", 32] } } },
          { name: "rootIndexForProof"; type: "u16" }
        ];
      };
    },
    {
      name: "SplTokenAllowlistSettings";
      type: {
        kind: "struct";
        fields: [
          { name: "mode"; type: { defined: "SplTokenAllowlistMode" } },
          { name: "mint"; type: "publicKey" }
        ];
      };
    },
    {
      name: "MintPhase";
      type: {
        kind: "enum";
        variants: [
          { name: "Premint" },
          { name: "Allowlist" },
          { name: "Public" },
          { name: "Expired" }
        ];
      };
    },
    {
      name: "SplTokenAllowlistMode";
      type: {
        kind: "enum";
        variants: [{ name: "BurnEveryTime" }, { name: "NeverBurn" }];
      };
    }
  ];
  errors: [
    {
      code: 8000;
      name: "IncorrectOwner";
      msg: "Account does not have correct owner!";
    },
    { code: 8001; name: "Uninitialized"; msg: "Account is not initialized!" },
    { code: 8002; name: "MintMismatch"; msg: "Mint Mismatch!" },
    {
      code: 8003;
      name: "IndexGreaterThanLength";
      msg: "Index greater than length!";
    },
    {
      code: 8004;
      name: "NumericalOverflowError";
      msg: "Numerical overflow error!";
    },
    {
      code: 8005;
      name: "TooManyCreators";
      msg: "Can only provide up to 4 creators to candy machine (because candy machine is one)!";
    },
    {
      code: 8006;
      name: "UuidMustBeExactly6Length";
      msg: "Uuid must be exactly of 6 length.";
    },
    {
      code: 8007;
      name: "NotEnoughTokens";
      msg: "Not enough tokens to pay for this minting.";
    },
    {
      code: 8008;
      name: "NotEnoughSOL";
      msg: "Not enough SOL to pay for this minting.";
    },
    { code: 8009; name: "TokenTransferFailed"; msg: "Token transfer failed." },
    { code: 8010; name: "CandyMachineEmpty"; msg: "Candy machine is empty!" },
    {
      code: 8011;
      name: "CandyMachinePublicSaleNotLive";
      msg: "Candy machine public sale is not live!";
    },
    {
      code: 8012;
      name: "HiddenSettingsConfigsDoNotHaveConfigLines";
      msg: "Configs that are using hidden uris do not have config lines, they have a single hash representing hashed order.";
    },
    {
      code: 8013;
      name: "CannotChangeNumberOfLines";
      msg: "Cannot change number of lines unless is a hidden config.";
    },
    { code: 8014; name: "PublicKeyMismatch"; msg: "Public key mismatch." },
    {
      code: 8015;
      name: "NoSplAllowlistToken";
      msg: "No SPL allowlist token present.";
    },
    { code: 8016; name: "TokenBurnFailed"; msg: "Token burn failed." },
    {
      code: 8017;
      name: "CannotFindUsableConfigLine";
      msg: "Unable to find an unused config line near your random number index.";
    },
    { code: 8018; name: "InvalidString"; msg: "Invalid string." },
    {
      code: 8019;
      name: "SuspiciousTransaction";
      msg: "Suspicious transaction detected.";
    },
    {
      code: 8020;
      name: "CannotSwitchToHiddenSettings";
      msg: "Cannot Switch to Hidden Settings after items available is greater than 0.";
    },
    {
      code: 8021;
      name: "IncorrectSlotHashesPubkey";
      msg: "Incorrect SlotHashes PubKey.";
    },
    {
      code: 8022;
      name: "IncorrectCollectionAuthority";
      msg: "Incorrect collection NFT authority.";
    },
    {
      code: 8023;
      name: "MismatchedCollectionPda";
      msg: "Collection PDA address is invalid.";
    },
    {
      code: 8024;
      name: "MismatchedCollectionMint";
      msg: "Provided mint account doesn't match collection PDA mint.";
    },
    {
      code: 8025;
      name: "SlotHashesEmpty";
      msg: "Slot hashes Sysvar is empty.";
    },
    {
      code: 8026;
      name: "MetadataAccountMustBeEmpty";
      msg: "The metadata account has data in it, and this must be empty to mint a new NFT.";
    },
    {
      code: 8027;
      name: "MissingSetCollectionDuringMint";
      msg: "Missing set collection during mint IX for Candy Machine with collection set.";
    },
    {
      code: 8028;
      name: "NoChangingCollectionDuringMint";
      msg: "Can't change collection settings after items have begun to be minted.";
    },
    {
      code: 8029;
      name: "NoChangingFreezeDuringMint";
      msg: "Can't change freeze settings after items have begun to be minted. You can only disable.";
    },
    {
      code: 8030;
      name: "NoChangingAuthorityWithFreeze";
      msg: "Can't change authority while freeze is enabled. Disable freeze first.";
    },
    {
      code: 8031;
      name: "NoChangingTokenWithFreeze";
      msg: "Can't change token while freeze is enabled. Disable freeze first.";
    },
    {
      code: 8032;
      name: "InvalidThawNft";
      msg: "Cannot thaw NFT unless all NFTs are minted or Candy Machine authority enables thawing.";
    },
    {
      code: 8033;
      name: "IncorrectRemainingAccountsLen";
      msg: "The number of remaining accounts passed in doesn't match the Candy Machine settings.";
    },
    {
      code: 8034;
      name: "MissingFreezeAta";
      msg: "FreezePda ATA needs to be passed in if token mint is enabled.";
    },
    {
      code: 8035;
      name: "IncorrectFreezeAta";
      msg: "Incorrect freeze ATA address.";
    },
    {
      code: 8036;
      name: "FreezePdaMismatch";
      msg: "FreezePda account doesn't belong to this Candy Machine.";
    },
    {
      code: 8037;
      name: "EnteredFreezeIsMoreThanMaxFreeze";
      msg: "Freeze time can't be longer than MAX_FREEZE_TIME.";
    },
    {
      code: 8038;
      name: "NoWithdrawWithFreeze";
      msg: "Can't withdraw Candy Machine while freeze is active. Disable freeze first.";
    },
    {
      code: 8039;
      name: "NoWithdrawWithFrozenFunds";
      msg: "Can't withdraw Candy Machine while frozen funds need to be redeemed. Unlock funds first.";
    },
    {
      code: 8040;
      name: "MissingRemoveFreezeTokenAccounts";
      msg: "Missing required remaining accounts for remove_freeze with token mint.";
    },
    {
      code: 8041;
      name: "InvalidFreezeWithdrawTokenAddress";
      msg: "Can't withdraw SPL Token from freeze PDA into itself.";
    },
    {
      code: 8042;
      name: "NoUnlockWithNFTsStillFrozen";
      msg: "Can't unlock funds while NFTs are still frozen. Run thaw on all NFTs first.";
    },
    {
      code: 8043;
      name: "InvalidBotSignerAuthority";
      msg: "Invalid bot signer authority.";
    },
    {
      code: 8044;
      name: "BuyLimitPerAddressExceeded";
      msg: "The wallet has already minted the maximum number allowed.";
    },
    {
      code: 8045;
      name: "InvalidAllowlistProof";
      msg: "The provided merkle allowlist proof is invalid.";
    },
    {
      code: 8046;
      name: "AllowlistMintsAlreadyUsed";
      msg: "All available allowlist mints have already been claimed by this address.";
    },
    {
      code: 8047;
      name: "MaximumRootCountExceeded";
      msg: "Maximum roots list count exceeded.";
    },
    {
      code: 8048;
      name: "TooManyOmniMintWallets";
      msg: "Can only provide up to 5 omni mint wallets.";
    },
    {
      code: 8049;
      name: "CandyMachineAllowlistSaleNotLive";
      msg: "Candy machine allowlist sale is not live.";
    },
    {
      code: 8050;
      name: "CandyMachinePublicSaleEnded";
      msg: "Candy machine public sale has ended.";
    },
    {
      code: 8051;
      name: "CandyMachineInvalidMintPhases";
      msg: "Invalid candy machine mint phase times provided.";
    },
    { code: 8052; name: "BotTaxCollected"; msg: "Bot tax collected." },
    {
      code: 8053;
      name: "InvalidMintPrice";
      msg: "Invalid mint price provided.";
    },
    {
      code: 8054;
      name: "InvalidAllowlistSettings";
      msg: "Invalid allowlist settings. Can only enable a single allowlist feature at a time.";
    }
  ];
  instructionsMap: {
    addConfigLines: ["candyMachine", "formfnAuthority"];
    appendMerkleAllowlistRoots: ["formfnAuthority", "candyMachine"];
    clearMerkleAllowlistRoots: ["formfnAuthority", "candyMachine"];
    initializeCandyMachine: [
      "candyMachine",
      "treasuryWallet",
      "formfnAuthority",
      "creatorAuthority",
      "payer",
      "systemProgram",
      "rent"
    ];
    mintNft: [
      "candyMachine",
      "candyMachineCreator",
      "buyer",
      "treasuryWallet",
      "metadata",
      "mint",
      "creatorAuthority",
      "masterEdition",
      "tokenMetadataProgram",
      "tokenProgram",
      "systemProgram",
      "rent",
      "recentSlothashes",
      "instructionSysvarAccount",
      "botSignerAuthority",
      "buyerInfoAccount",
      "buyerTokenAccount",
      "ataProgram"
    ];
    removeCollection: [
      "candyMachine",
      "formfnAuthority",
      "collectionPda",
      "metadata",
      "mint",
      "collectionAuthorityRecord",
      "tokenMetadataProgram"
    ];
    removeFreeze: ["candyMachine", "formfnAuthority", "freezePda"];
    setCollection: [
      "candyMachine",
      "formfnAuthority",
      "creatorAuthority",
      "collectionPda",
      "payer",
      "systemProgram",
      "rent",
      "metadata",
      "mint",
      "edition",
      "collectionAuthorityRecord",
      "tokenMetadataProgram"
    ];
    setCollectionDuringMint: [
      "candyMachine",
      "metadata",
      "buyer",
      "collectionPda",
      "tokenMetadataProgram",
      "instructionSysvarAccount",
      "collectionMint",
      "collectionMetadata",
      "collectionMasterEdition",
      "creatorAuthority",
      "collectionAuthorityRecord"
    ];
    setFreeze: [
      "candyMachine",
      "formfnAuthority",
      "freezePda",
      "systemProgram"
    ];
    thawNft: [
      "freezePda",
      "candyMachine",
      "tokenAccount",
      "owner",
      "mint",
      "edition",
      "payer",
      "tokenProgram",
      "tokenMetadataProgram",
      "systemProgram"
    ];
    unlockFunds: [
      "candyMachine",
      "formfnAuthority",
      "freezePda",
      "systemProgram"
    ];
    updateAuthority: ["candyMachine", "formfnAuthority", "treasuryWallet"];
    updateCandyMachine: ["candyMachine", "formfnAuthority", "treasuryWallet"];
    withdrawFunds: ["candyMachine", "formfnAuthority"];
  };
};
export const IDL: FormfnCandyMachine = {
  version: "0.0.1",
  name: "formfn_candy_machine",
  instructions: [
    {
      name: "addConfigLines",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: false, isSigner: true },
      ],
      args: [
        { name: "index", type: "u32" },
        { name: "configLines", type: { vec: { defined: "ConfigLine" } } },
      ],
    },
    {
      name: "appendMerkleAllowlistRoots",
      accounts: [
        { name: "formfnAuthority", isMut: false, isSigner: true },
        { name: "candyMachine", isMut: true, isSigner: false },
      ],
      args: [{ name: "rootsToAppend", type: { vec: { array: ["u8", 32] } } }],
    },
    {
      name: "clearMerkleAllowlistRoots",
      accounts: [
        { name: "formfnAuthority", isMut: false, isSigner: true },
        { name: "candyMachine", isMut: true, isSigner: false },
      ],
      args: [],
    },
    {
      name: "initializeCandyMachine",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "treasuryWallet", isMut: false, isSigner: false },
        { name: "formfnAuthority", isMut: false, isSigner: false },
        { name: "creatorAuthority", isMut: false, isSigner: false },
        { name: "payer", isMut: false, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
        { name: "rent", isMut: false, isSigner: false },
      ],
      args: [{ name: "data", type: { defined: "CandyMachineData" } }],
    },
    {
      name: "mintNft",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "candyMachineCreator", isMut: false, isSigner: false },
        { name: "buyer", isMut: false, isSigner: true },
        { name: "treasuryWallet", isMut: true, isSigner: false },
        { name: "metadata", isMut: true, isSigner: false },
        { name: "mint", isMut: true, isSigner: true },
        { name: "creatorAuthority", isMut: false, isSigner: false },
        { name: "masterEdition", isMut: true, isSigner: false },
        { name: "tokenMetadataProgram", isMut: false, isSigner: false },
        { name: "tokenProgram", isMut: false, isSigner: false },
        { name: "systemProgram", isMut: false, isSigner: false },
        { name: "rent", isMut: false, isSigner: false },
        { name: "recentSlothashes", isMut: false, isSigner: false },
        { name: "instructionSysvarAccount", isMut: false, isSigner: false },
        { name: "botSignerAuthority", isMut: false, isSigner: false },
        { name: "buyerInfoAccount", isMut: true, isSigner: false },
        { name: "buyerTokenAccount", isMut: true, isSigner: false },
        { name: "ataProgram", isMut: false, isSigner: false },
      ],
      args: [
        { name: "creatorBump", type: "u8" },
        { name: "buyerInfoAccountBump", type: "u8" },
        {
          name: "buyerMerkleAllowlistProofData",
          type: { option: { defined: "BuyerMerkleAllowlistProofData" } },
        },
        { name: "expectedPrice", type: "u64" },
      ],
    },
    {
      name: "removeCollection",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: false, isSigner: true },
        { name: "collectionPda", isMut: true, isSigner: false },
        { name: "metadata", isMut: false, isSigner: false },
        { name: "mint", isMut: false, isSigner: false },
        { name: "collectionAuthorityRecord", isMut: true, isSigner: false },
        { name: "tokenMetadataProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "removeFreeze",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: true, isSigner: true },
        { name: "freezePda", isMut: true, isSigner: false },
      ],
      args: [],
    },
    {
      name: "setCollection",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: false, isSigner: true },
        { name: "creatorAuthority", isMut: true, isSigner: false },
        { name: "collectionPda", isMut: true, isSigner: false },
        { name: "payer", isMut: false, isSigner: true },
        { name: "systemProgram", isMut: false, isSigner: false },
        { name: "rent", isMut: false, isSigner: false },
        { name: "metadata", isMut: true, isSigner: false },
        { name: "mint", isMut: false, isSigner: false },
        { name: "edition", isMut: false, isSigner: false },
        { name: "collectionAuthorityRecord", isMut: true, isSigner: false },
        { name: "tokenMetadataProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "setCollectionDuringMint",
      accounts: [
        { name: "candyMachine", isMut: false, isSigner: false },
        { name: "metadata", isMut: false, isSigner: false },
        { name: "buyer", isMut: false, isSigner: true },
        { name: "collectionPda", isMut: true, isSigner: false },
        { name: "tokenMetadataProgram", isMut: false, isSigner: false },
        { name: "instructionSysvarAccount", isMut: false, isSigner: false },
        { name: "collectionMint", isMut: false, isSigner: false },
        { name: "collectionMetadata", isMut: false, isSigner: false },
        { name: "collectionMasterEdition", isMut: false, isSigner: false },
        { name: "creatorAuthority", isMut: false, isSigner: false },
        { name: "collectionAuthorityRecord", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "setFreeze",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: true, isSigner: true },
        { name: "freezePda", isMut: true, isSigner: false },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [{ name: "freezeTime", type: "i64" }],
    },
    {
      name: "thawNft",
      accounts: [
        { name: "freezePda", isMut: true, isSigner: false },
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "tokenAccount", isMut: true, isSigner: false },
        { name: "owner", isMut: false, isSigner: false },
        { name: "mint", isMut: false, isSigner: false },
        { name: "edition", isMut: false, isSigner: false },
        { name: "payer", isMut: true, isSigner: true },
        { name: "tokenProgram", isMut: false, isSigner: false },
        { name: "tokenMetadataProgram", isMut: false, isSigner: false },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "unlockFunds",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: true, isSigner: true },
        { name: "freezePda", isMut: true, isSigner: false },
        { name: "systemProgram", isMut: false, isSigner: false },
      ],
      args: [],
    },
    {
      name: "updateAuthority",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: false, isSigner: true },
        { name: "treasuryWallet", isMut: false, isSigner: false },
      ],
      args: [{ name: "newAuthority", type: { option: "publicKey" } }],
    },
    {
      name: "updateCandyMachine",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: false, isSigner: true },
        { name: "treasuryWallet", isMut: false, isSigner: false },
      ],
      args: [{ name: "data", type: { defined: "CandyMachineData" } }],
    },
    {
      name: "withdrawFunds",
      accounts: [
        { name: "candyMachine", isMut: true, isSigner: false },
        { name: "formfnAuthority", isMut: true, isSigner: true },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "candyMachine",
      docs: ["Candy machine state and config data."],
      type: {
        kind: "struct",
        fields: [
          { name: "formfnAuthority", type: "publicKey" },
          { name: "creatorAuthority", type: "publicKey" },
          { name: "treasuryWallet", type: "publicKey" },
          { name: "treasuryMint", type: { option: "publicKey" } },
          { name: "itemsRedeemed", type: "u64" },
          { name: "data", type: { defined: "CandyMachineData" } },
        ],
      },
    },
    {
      name: "buyerInfoAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "numberBoughtMerkleAllowlistPhase",
            docs: ["Number bought during the Merkle allowlist phase."],
            type: "u16",
          },
          {
            name: "numberBoughtPublicPhase",
            docs: ["Number bought during the public phase."],
            type: "u16",
          },
        ],
      },
    },
    {
      name: "collectionPda",
      docs: ["Collection PDA account"],
      type: {
        kind: "struct",
        fields: [
          { name: "mint", type: "publicKey" },
          { name: "candyMachine", type: "publicKey" },
        ],
      },
    },
    {
      name: "freezePda",
      docs: ["Collection PDA account"],
      type: {
        kind: "struct",
        fields: [
          { name: "candyMachine", type: "publicKey" },
          { name: "allowThaw", type: "bool" },
          { name: "frozenCount", type: "u64" },
          { name: "mintStart", type: { option: "i64" } },
          { name: "freezeTime", type: "i64" },
          { name: "freezeFee", type: "u64" },
        ],
      },
    },
  ],
  types: [
    {
      name: "CandyMachineData",
      docs: ["Candy machine settings data."],
      type: {
        kind: "struct",
        fields: [
          { name: "uuid", type: "string" },
          { name: "price", type: "u64" },
          { name: "premintPrice", type: { option: "u64" } },
          { name: "allowlistPrice", type: { option: "u64" } },
          {
            name: "symbol",
            docs: ["The symbol for the asset"],
            type: "string",
          },
          {
            name: "sellerFeeBasisPoints",
            docs: [
              "Royalty basis points that goes to creators in secondary sales (0-10000)",
            ],
            type: "u16",
          },
          { name: "maxSupply", type: "u64" },
          { name: "itemsAvailable", type: "u64" },
          { name: "isMutable", type: "bool" },
          { name: "allowlistSaleStartTime", type: { option: "i64" } },
          { name: "publicSaleStartTime", type: "i64" },
          { name: "publicSaleEndTime", type: "i64" },
          { name: "creators", type: { vec: { defined: "Creator" } } },
          { name: "omniMintWallets", type: { vec: "publicKey" } },
          {
            name: "hiddenSettings",
            type: { option: { defined: "HiddenSettings" } },
          },
          { name: "botProtectionEnabled", type: "bool" },
          { name: "limitPerAddress", type: "u16" },
          { name: "sequentialMintOrderEnabled", type: "bool" },
          {
            name: "merkleAllowlistRootList",
            type: { vec: { array: ["u8", 32] } },
          },
          {
            name: "splTokenAllowlistSettings",
            type: { option: { defined: "SplTokenAllowlistSettings" } },
          },
        ],
      },
    },
    {
      name: "ConfigLine",
      docs: ["Individual config line for storing NFT data pre-mint."],
      type: {
        kind: "struct",
        fields: [
          { name: "name", type: "string" },
          {
            name: "uri",
            docs: ["URI pointing to JSON representing the asset"],
            type: "string",
          },
        ],
      },
    },
    {
      name: "Creator",
      type: {
        kind: "struct",
        fields: [
          { name: "address", type: "publicKey" },
          { name: "verified", type: "bool" },
          { name: "share", type: "u8" },
        ],
      },
    },
    {
      name: "HiddenSettings",
      docs: ["Hidden Settings for large mints used with offline data."],
      type: {
        kind: "struct",
        fields: [
          { name: "name", type: "string" },
          { name: "uri", type: "string" },
          { name: "hash", type: { array: ["u8", 32] } },
        ],
      },
    },
    {
      name: "BuyerMerkleAllowlistProofData",
      type: {
        kind: "struct",
        fields: [
          { name: "amount", type: "u16" },
          { name: "proof", type: { vec: { array: ["u8", 32] } } },
          { name: "rootIndexForProof", type: "u16" },
        ],
      },
    },
    {
      name: "SplTokenAllowlistSettings",
      type: {
        kind: "struct",
        fields: [
          { name: "mode", type: { defined: "SplTokenAllowlistMode" } },
          { name: "mint", type: "publicKey" },
        ],
      },
    },
    {
      name: "MintPhase",
      type: {
        kind: "enum",
        variants: [
          { name: "Premint" },
          { name: "Allowlist" },
          { name: "Public" },
          { name: "Expired" },
        ],
      },
    },
    {
      name: "SplTokenAllowlistMode",
      type: {
        kind: "enum",
        variants: [{ name: "BurnEveryTime" }, { name: "NeverBurn" }],
      },
    },
  ],
  errors: [
    {
      code: 8000,
      name: "IncorrectOwner",
      msg: "Account does not have correct owner!",
    },
    { code: 8001, name: "Uninitialized", msg: "Account is not initialized!" },
    { code: 8002, name: "MintMismatch", msg: "Mint Mismatch!" },
    {
      code: 8003,
      name: "IndexGreaterThanLength",
      msg: "Index greater than length!",
    },
    {
      code: 8004,
      name: "NumericalOverflowError",
      msg: "Numerical overflow error!",
    },
    {
      code: 8005,
      name: "TooManyCreators",
      msg: "Can only provide up to 4 creators to candy machine (because candy machine is one)!",
    },
    {
      code: 8006,
      name: "UuidMustBeExactly6Length",
      msg: "Uuid must be exactly of 6 length.",
    },
    {
      code: 8007,
      name: "NotEnoughTokens",
      msg: "Not enough tokens to pay for this minting.",
    },
    {
      code: 8008,
      name: "NotEnoughSOL",
      msg: "Not enough SOL to pay for this minting.",
    },
    { code: 8009, name: "TokenTransferFailed", msg: "Token transfer failed." },
    { code: 8010, name: "CandyMachineEmpty", msg: "Candy machine is empty!" },
    {
      code: 8011,
      name: "CandyMachinePublicSaleNotLive",
      msg: "Candy machine public sale is not live!",
    },
    {
      code: 8012,
      name: "HiddenSettingsConfigsDoNotHaveConfigLines",
      msg: "Configs that are using hidden uris do not have config lines, they have a single hash representing hashed order.",
    },
    {
      code: 8013,
      name: "CannotChangeNumberOfLines",
      msg: "Cannot change number of lines unless is a hidden config.",
    },
    { code: 8014, name: "PublicKeyMismatch", msg: "Public key mismatch." },
    {
      code: 8015,
      name: "NoSplAllowlistToken",
      msg: "No SPL allowlist token present.",
    },
    { code: 8016, name: "TokenBurnFailed", msg: "Token burn failed." },
    {
      code: 8017,
      name: "CannotFindUsableConfigLine",
      msg: "Unable to find an unused config line near your random number index.",
    },
    { code: 8018, name: "InvalidString", msg: "Invalid string." },
    {
      code: 8019,
      name: "SuspiciousTransaction",
      msg: "Suspicious transaction detected.",
    },
    {
      code: 8020,
      name: "CannotSwitchToHiddenSettings",
      msg: "Cannot Switch to Hidden Settings after items available is greater than 0.",
    },
    {
      code: 8021,
      name: "IncorrectSlotHashesPubkey",
      msg: "Incorrect SlotHashes PubKey.",
    },
    {
      code: 8022,
      name: "IncorrectCollectionAuthority",
      msg: "Incorrect collection NFT authority.",
    },
    {
      code: 8023,
      name: "MismatchedCollectionPda",
      msg: "Collection PDA address is invalid.",
    },
    {
      code: 8024,
      name: "MismatchedCollectionMint",
      msg: "Provided mint account doesn't match collection PDA mint.",
    },
    {
      code: 8025,
      name: "SlotHashesEmpty",
      msg: "Slot hashes Sysvar is empty.",
    },
    {
      code: 8026,
      name: "MetadataAccountMustBeEmpty",
      msg: "The metadata account has data in it, and this must be empty to mint a new NFT.",
    },
    {
      code: 8027,
      name: "MissingSetCollectionDuringMint",
      msg: "Missing set collection during mint IX for Candy Machine with collection set.",
    },
    {
      code: 8028,
      name: "NoChangingCollectionDuringMint",
      msg: "Can't change collection settings after items have begun to be minted.",
    },
    {
      code: 8029,
      name: "NoChangingFreezeDuringMint",
      msg: "Can't change freeze settings after items have begun to be minted. You can only disable.",
    },
    {
      code: 8030,
      name: "NoChangingAuthorityWithFreeze",
      msg: "Can't change authority while freeze is enabled. Disable freeze first.",
    },
    {
      code: 8031,
      name: "NoChangingTokenWithFreeze",
      msg: "Can't change token while freeze is enabled. Disable freeze first.",
    },
    {
      code: 8032,
      name: "InvalidThawNft",
      msg: "Cannot thaw NFT unless all NFTs are minted or Candy Machine authority enables thawing.",
    },
    {
      code: 8033,
      name: "IncorrectRemainingAccountsLen",
      msg: "The number of remaining accounts passed in doesn't match the Candy Machine settings.",
    },
    {
      code: 8034,
      name: "MissingFreezeAta",
      msg: "FreezePda ATA needs to be passed in if token mint is enabled.",
    },
    {
      code: 8035,
      name: "IncorrectFreezeAta",
      msg: "Incorrect freeze ATA address.",
    },
    {
      code: 8036,
      name: "FreezePdaMismatch",
      msg: "FreezePda account doesn't belong to this Candy Machine.",
    },
    {
      code: 8037,
      name: "EnteredFreezeIsMoreThanMaxFreeze",
      msg: "Freeze time can't be longer than MAX_FREEZE_TIME.",
    },
    {
      code: 8038,
      name: "NoWithdrawWithFreeze",
      msg: "Can't withdraw Candy Machine while freeze is active. Disable freeze first.",
    },
    {
      code: 8039,
      name: "NoWithdrawWithFrozenFunds",
      msg: "Can't withdraw Candy Machine while frozen funds need to be redeemed. Unlock funds first.",
    },
    {
      code: 8040,
      name: "MissingRemoveFreezeTokenAccounts",
      msg: "Missing required remaining accounts for remove_freeze with token mint.",
    },
    {
      code: 8041,
      name: "InvalidFreezeWithdrawTokenAddress",
      msg: "Can't withdraw SPL Token from freeze PDA into itself.",
    },
    {
      code: 8042,
      name: "NoUnlockWithNFTsStillFrozen",
      msg: "Can't unlock funds while NFTs are still frozen. Run thaw on all NFTs first.",
    },
    {
      code: 8043,
      name: "InvalidBotSignerAuthority",
      msg: "Invalid bot signer authority.",
    },
    {
      code: 8044,
      name: "BuyLimitPerAddressExceeded",
      msg: "The wallet has already minted the maximum number allowed.",
    },
    {
      code: 8045,
      name: "InvalidAllowlistProof",
      msg: "The provided merkle allowlist proof is invalid.",
    },
    {
      code: 8046,
      name: "AllowlistMintsAlreadyUsed",
      msg: "All available allowlist mints have already been claimed by this address.",
    },
    {
      code: 8047,
      name: "MaximumRootCountExceeded",
      msg: "Maximum roots list count exceeded.",
    },
    {
      code: 8048,
      name: "TooManyOmniMintWallets",
      msg: "Can only provide up to 5 omni mint wallets.",
    },
    {
      code: 8049,
      name: "CandyMachineAllowlistSaleNotLive",
      msg: "Candy machine allowlist sale is not live.",
    },
    {
      code: 8050,
      name: "CandyMachinePublicSaleEnded",
      msg: "Candy machine public sale has ended.",
    },
    {
      code: 8051,
      name: "CandyMachineInvalidMintPhases",
      msg: "Invalid candy machine mint phase times provided.",
    },
    { code: 8052, name: "BotTaxCollected", msg: "Bot tax collected." },
    {
      code: 8053,
      name: "InvalidMintPrice",
      msg: "Invalid mint price provided.",
    },
    {
      code: 8054,
      name: "InvalidAllowlistSettings",
      msg: "Invalid allowlist settings. Can only enable a single allowlist feature at a time.",
    },
  ],
  instructionsMap: {
    addConfigLines: ["candyMachine", "formfnAuthority"],
    appendMerkleAllowlistRoots: ["formfnAuthority", "candyMachine"],
    clearMerkleAllowlistRoots: ["formfnAuthority", "candyMachine"],
    initializeCandyMachine: [
      "candyMachine",
      "treasuryWallet",
      "formfnAuthority",
      "creatorAuthority",
      "payer",
      "systemProgram",
      "rent",
    ],
    mintNft: [
      "candyMachine",
      "candyMachineCreator",
      "buyer",
      "treasuryWallet",
      "metadata",
      "mint",
      "creatorAuthority",
      "masterEdition",
      "tokenMetadataProgram",
      "tokenProgram",
      "systemProgram",
      "rent",
      "recentSlothashes",
      "instructionSysvarAccount",
      "botSignerAuthority",
      "buyerInfoAccount",
      "buyerTokenAccount",
      "ataProgram",
    ],
    removeCollection: [
      "candyMachine",
      "formfnAuthority",
      "collectionPda",
      "metadata",
      "mint",
      "collectionAuthorityRecord",
      "tokenMetadataProgram",
    ],
    removeFreeze: ["candyMachine", "formfnAuthority", "freezePda"],
    setCollection: [
      "candyMachine",
      "formfnAuthority",
      "creatorAuthority",
      "collectionPda",
      "payer",
      "systemProgram",
      "rent",
      "metadata",
      "mint",
      "edition",
      "collectionAuthorityRecord",
      "tokenMetadataProgram",
    ],
    setCollectionDuringMint: [
      "candyMachine",
      "metadata",
      "buyer",
      "collectionPda",
      "tokenMetadataProgram",
      "instructionSysvarAccount",
      "collectionMint",
      "collectionMetadata",
      "collectionMasterEdition",
      "creatorAuthority",
      "collectionAuthorityRecord",
    ],
    setFreeze: [
      "candyMachine",
      "formfnAuthority",
      "freezePda",
      "systemProgram",
    ],
    thawNft: [
      "freezePda",
      "candyMachine",
      "tokenAccount",
      "owner",
      "mint",
      "edition",
      "payer",
      "tokenProgram",
      "tokenMetadataProgram",
      "systemProgram",
    ],
    unlockFunds: [
      "candyMachine",
      "formfnAuthority",
      "freezePda",
      "systemProgram",
    ],
    updateAuthority: ["candyMachine", "formfnAuthority", "treasuryWallet"],
    updateCandyMachine: ["candyMachine", "formfnAuthority", "treasuryWallet"],
    withdrawFunds: ["candyMachine", "formfnAuthority"],
  },
};
