import { 
    percentAmount, 
    generateSigner, 
    signerIdentity, 
    createSignerFromKeypair,
    publicKey,
    PublicKey
 } from '@metaplex-foundation/umi'
import { TokenStandard, createAndMint,  } from '@metaplex-foundation/mpl-token-metadata'
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import  "@solana/web3.js";
import secret from './guideSecret.json';
import {
    clusterApiUrl,
} from '@solana/web3.js';

const SPL_TOKEN_2022_PROGRAM_ID: PublicKey = publicKey(
    'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb'
  );
const umi = createUmi(clusterApiUrl('devnet'), 'confirmed'); 
const userWallet = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secret));
const userWalletSigner = createSignerFromKeypair(umi, userWallet);

const metadata = {
    name: 'VERXIO',
    symbol: 'VERXIO',
    uri: 'URI',
};

const mint = generateSigner(umi);
umi.use(signerIdentity(userWalletSigner));
umi.use(mplCandyMachine())

createAndMint(umi, {
    mint,
    authority: umi.identity,
    name: metadata.name,
    symbol: metadata.symbol,
    uri: metadata.uri,
    sellerFeeBasisPoints: percentAmount(0),
    decimals: 9,
    amount: 100000000000_000000000,
    tokenOwner: userWallet.publicKey,
    splTokenProgram: SPL_TOKEN_2022_PROGRAM_ID,
    tokenStandard: TokenStandard.Fungible,
    }).sendAndConfirm(umi).then(() => {
    console.log("Successfully minted 100 Billion tokens (", mint.publicKey, ")");
});
