use std::{fs::write, str::FromStr, thread::sleep, time::Duration};

pub use anchor_client::solana_sdk::hash::Hash;
use anchor_client::{
    solana_sdk::{
        commitment_config::{CommitmentConfig, CommitmentLevel},
        program_pack::{IsInitialized, Pack},
        pubkey::Pubkey,
    },
    Program,
};
pub use anyhow::{anyhow, Result};
use console::{style, Style};
use dialoguer::theme::ColorfulTheme;
pub use indicatif::{ProgressBar, ProgressStyle};
use mpl_token_metadata::ID as TOKEN_METADATA_PROGRAM_ID;
use serde::Serialize;
use solana_account_decoder::UiAccountEncoding;
use solana_client::{
    rpc_client::RpcClient,
    rpc_config::{RpcAccountInfoConfig, RpcProgramAccountsConfig},
    rpc_filter::{Memcmp, MemcmpEncodedBytes, RpcFilterType},
};
use spl_token::state::{Account, Mint};

use crate::{
    common::*,
    config::{data::Cluster, to_pubkey, to_string},
};

/// Hash for devnet cluster
pub const DEVNET_HASH: &str = "EtWTRABZaYq6iMfeYKouRu166VU2xqa1wcaWoxPkrZBG";

/// Hash for mainnet-beta cluster
pub const MAINNET_HASH: &str = "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdpKuc147dw2N9d";

/// Return the environment of the current connected RPC.
pub fn get_cluster(rpc_client: RpcClient) -> Result<Cluster> {
    let devnet_hash = Hash::from_str(DEVNET_HASH).unwrap();
    let mainnet_hash = Hash::from_str(MAINNET_HASH).unwrap();
    let genesis_hash = rpc_client.get_genesis_hash()?;

    Ok(if genesis_hash == devnet_hash {
        Cluster::Devnet
    } else if genesis_hash == mainnet_hash {
        Cluster::Mainnet
    } else {
        Cluster::Unknown
    })
}

/// Check that the mint token is a valid address.
pub fn check_spl_token(program: &Program, input: &str) -> Result<Mint> {
    let pubkey = Pubkey::from_str(input)?;
    let token_data = program.rpc().get_account_data(&pubkey)?;
    if token_data.len() != 82 {
        return Err(anyhow!("Invalid spl-token passed in."));
    }
    let token_mint = Mint::unpack_from_slice(&token_data)?;

    if token_mint.is_initialized {
        Ok(token_mint)
    } else {
        Err(anyhow!(format!(
            "The specified spl-token is not initialized: {}",
            input
        )))
    }
}

/// Check that the mint token account is a valid account.
pub fn check_spl_token_account(program: &Program, input: &str) -> Result<()> {
    let pubkey = Pubkey::from_str(input)?;
    let ata_data = program.rpc().get_account_data(&pubkey)?;
    let ata_account = Account::unpack_unchecked(&ata_data)?;

    if IsInitialized::is_initialized(&ata_account) {
        Ok(())
    } else {
        Err(anyhow!(format!(
            "The specified spl-token account is not initialized: {}",
            input
        )))
    }
}

pub fn spinner_with_style() -> ProgressBar {
    let pb = ProgressBar::new_spinner();
    pb.enable_steady_tick(120);
    pb.set_style(
        ProgressStyle::default_spinner()
            .tick_strings(&[
                "▹▹▹▹▹",
                "▸▹▹▹▹",
                "▹▸▹▹▹",
                "▹▹▸▹▹",
                "▹▹▹▸▹",
                "▹▹▹▹▸",
                "▪▪▪▪▪",
            ])
            .template("{spinner:.dim} {msg}"),
    );
    pb
}

pub fn wait_with_spinner_and_countdown(seconds: u64) {
    let pb = spinner_with_style();
    pb.enable_steady_tick(120);
    for i in 0..seconds {
        pb.set_message(
            style(format!("Waiting {} seconds...", seconds - i))
                .dim()
                .to_string(),
        );
        sleep(Duration::from_secs(1));
    }
    pb.finish_and_clear();
}

pub fn progress_bar_with_style(len: u64) -> ProgressBar {
    let pb = ProgressBar::new(len);
    // forces the progress bar to show immediately
    pb.tick();
    pb.enable_steady_tick(1000);
    pb.set_style(
        ProgressStyle::default_bar().template("[{elapsed_precise}] {msg}{wide_bar} {pos}/{len}"),
    );
    pb
}

pub fn get_dialoguer_theme() -> ColorfulTheme {
    ColorfulTheme {
        prompt_style: Style::new(),
        checked_item_prefix: style("✔".to_string()).green().force_styling(true),
        unchecked_item_prefix: style("✔".to_string()).black().force_styling(true),
        ..Default::default()
    }
}

pub fn assert_correct_authority(user_keypair: &Pubkey, update_authority: &Pubkey) -> Result<()> {
    if user_keypair != update_authority {
        return Err(anyhow!(
            "Update authority does not match that of the candy machine."
        ));
    }

    Ok(())
}

pub fn f64_to_u64_safe(f: f64) -> Result<u64, FloatConversionError> {
    if f.fract() != 0.0 {
        return Err(FloatConversionError::Fractional);
    }
    if f <= u64::MIN as f64 || f >= u64::MAX as f64 {
        return Err(FloatConversionError::Overflow);
    }
    Ok(f.trunc() as u64)
}

pub fn get_cm_creator_accounts(
    client: &RpcClient,
    creator: &str,
    position: usize,
) -> Result<Vec<Pubkey>> {
    if position > 4 {
        error!("CM Creator position cannot be greator than 4");
        std::process::exit(1);
    }

    let config = RpcProgramAccountsConfig {
        filters: Some(vec![RpcFilterType::Memcmp(Memcmp::new(
            1 + // key
            32 + // update auth
            32 + // mint
            4 + // name string length
            MAX_NAME_LENGTH + // name
            4 + // uri string length
            MAX_URI_LENGTH + // uri*
            4 + // symbol string length
            MAX_SYMBOL_LENGTH + // symbol
            2 + // seller fee basis points
            1 + // whether or not there is a creators vec
            4 + // creators
            position * // index for each creator
            (
                32 + // address
                1 + // verified
                1 // share
            ),
            MemcmpEncodedBytes::Base58(creator.to_string()),
        ))]),
        account_config: RpcAccountInfoConfig {
            min_context_slot: None,
            encoding: Some(UiAccountEncoding::Base64),
            data_slice: None,
            commitment: Some(CommitmentConfig {
                commitment: CommitmentLevel::Confirmed,
            }),
        },
        with_context: None,
    };

    let accounts = client
        .get_program_accounts_with_config(&TOKEN_METADATA_PROGRAM_ID, config)?
        .into_iter()
        .map(|(pubkey, _account)| pubkey)
        .collect::<Vec<Pubkey>>();

    Ok(accounts)
}

#[derive(Debug, Clone, Deserialize, Default, Serialize)]
#[serde(rename_all = "camelCase")]
struct CandyMachinePubkeyJson {
    #[serde(deserialize_with = "to_pubkey")]
    #[serde(serialize_with = "to_string")]
    candy_machine_pubkey: Pubkey,
}

pub fn get_bot_signer_keypair() -> Keypair {
    Keypair::from_bytes(BOT_SIGNER_AUTHORITY_SECRET).unwrap()
}

pub fn write_candy_machine_pubkey_to_file(key: Pubkey) -> Result<()> {
    let data = CandyMachinePubkeyJson {
        candy_machine_pubkey: key,
    };

    write(
        CANDY_MACHINE_PUBKEY_FILE,
        serde_json::to_string_pretty(&data).unwrap(),
    )
    .unwrap();

    Ok(())
}

pub fn read_candy_machine_pubkey_from_file() -> Result<Pubkey> {
    let path = Path::new(CANDY_MACHINE_PUBKEY_FILE);
    let file = match File::open(path) {
        Ok(file) => file,
        Err(err) => {
            let error = UpdateError::ErrorReadingCandyPubkeyFile(
                CANDY_MACHINE_PUBKEY_FILE.to_string(),
                err.to_string(),
            )
            .into();
            error!("{:?}", error);
            return Err(error);
        }
    };

    let file_data: CandyMachinePubkeyJson = match serde_json::from_reader(file) {
        Ok(data) => data,
        Err(err) => {
            let error = UpdateError::ErrorReadingCandyPubkeyFile(
                CANDY_MACHINE_PUBKEY_FILE.to_string(),
                err.to_string(),
            )
            .into();
            error!("{:?}", error);
            return Err(error);
        }
    };

    Ok(file_data.candy_machine_pubkey)
}
