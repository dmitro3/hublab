import {
    clusterApiUrl,
    sendAndConfirmTransaction,
    Connection,
    Keypair,
    SystemProgram,
    Transaction,
    LAMPORTS_PER_SOL,
    PublicKey,
} from '@solana/web3.js';
import {
    createInitializeNonTransferableMintInstruction,
    createInitializeMintInstruction,
    getMintLen,
    ExtensionType,
    TOKEN_2022_PROGRAM_ID,
    mintTo,
} from '@solana/spl-token';
import fs from 'fs'; 


(async () => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    const secret = JSON.parse(fs.readFileSync('guideSecret.json', 'utf8'));
    const secretUint8Array = new Uint8Array(secret);
    const keypair = Keypair.fromSecretKey(secretUint8Array);


    const payer = keypair;
    const mintAuthority = keypair;
    const mintKeypair = keypair;

    // // Request an airdrop for the payer account
    // const airdropSignature = await connection.requestAirdrop(payer.publicKey, 2 * LAMPORTS_PER_SOL);
    // await connection.confirmTransaction({ signature: airdropSignature, ...(await connection.getLatestBlockhash()) });

    const decimals = 9;
    const mint = mintKeypair.publicKey;
    const mintLen = getMintLen([ExtensionType.NonTransferable]);
    const lamports = await connection.getMinimumBalanceForRentExemption(mintLen);

    const transaction = new Transaction().add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: mint,
            space: mintLen,
            lamports,
            programId: TOKEN_2022_PROGRAM_ID,
        }),
        createInitializeNonTransferableMintInstruction(mint, TOKEN_2022_PROGRAM_ID),
        createInitializeMintInstruction(mint, decimals, mintAuthority.publicKey, null, TOKEN_2022_PROGRAM_ID)
    );

    await sendAndConfirmTransaction(connection, transaction, [payer, mintKeypair], undefined);
    // Mint tokens
    const tokenAccountAddress = new PublicKey('FFvPUNGYsQa4vjLAcCJ4zx8vZ4BSqQoCbMMyG3VNuEnd'); 
    const amountToMint = 100 * LAMPORTS_PER_SOL; 
    await mintTo(connection, payer, mint, tokenAccountAddress, mintAuthority, amountToMint);

    console.log("Successfully minted tokens");
})();
