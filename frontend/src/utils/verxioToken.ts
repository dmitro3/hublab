import {
    clusterApiUrl,
    sendAndConfirmTransaction,
    Connection,
    Keypair,
    SystemProgram,
    Transaction,
    LAMPORTS_PER_SOL,
    PublicKey
} from '@solana/web3.js';
import {
    ExtensionType,
    TOKEN_2022_PROGRAM_ID,
    createInitializeMintInstruction,
    createInitializeNonTransferableMintInstruction,
    getMintLen,
    mintTo,
    createAccount,
    transfer,
    burn,
    closeAccount,
} from '@solana/spl-token';
import bs58 from 'bs58';


(async () => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    // const secretKeyStr = process.env.NEXT_PUBLIC_VALUE;
    // // const secretKeyBuffer = Buffer.from(bs58.decode(secretKeyStr)); // Decode the secret key
    
    const secretKey = bs58.decode("4xRBSuyXwbKK7jwF1hV156L1AzH4h6n2sKsYhABTpKwdaKDqCg785XFreUmGtDfRG53SnRw9KtcFnf22doSTFqRt");
    const signer = Keypair.fromSecretKey(secretKey)
    const payer = signer;

    // const payer = Keypair.generate();
    // const airdropSignature = await connection.requestAirdrop(payer.publicKey, 2 * LAMPORTS_PER_SOL);
    // await connection.confirmTransaction({ signature: airdropSignature, ...(await connection.getLatestBlockhash()) });

    const mintAuthority = Keypair.generate();
    const decimals = 9;

    const mintKeypair = Keypair.generate();
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

    const transactionSignature  = await sendAndConfirmTransaction(connection, transaction, [payer, mintKeypair], undefined);
    console.log(
        "\nCreate Mint Account:",
        `https://solana.fm/tx/${transactionSignature}?cluster=devnet-solana`,
      )

      const sourceTokenAccount = await createAccount(
        connection,
        payer, // Payer to create Token Account
        mint, // Mint Account address
        payer.publicKey, // Token Account owner
        undefined, // Optional keypair, default to Associated Token Account
        undefined, // Confirmation options
        TOKEN_2022_PROGRAM_ID, // Token Extension Program ID
      );

    const txn = await mintTo(
        connection,
        payer, // Transaction fee payer
        mint, // Mint Account address
        sourceTokenAccount, // Mint to
        mintAuthority, // Mint Authority address
        100, // Amount
        undefined, // Additional signers
        undefined, // Confirmation options
        TOKEN_2022_PROGRAM_ID, // Token Extension Program ID
      );
      
      console.log(
        "\nMint Tokens:",
        `https://solana.fm/tx/${txn}?cluster=devnet-solana`,
      );

})();