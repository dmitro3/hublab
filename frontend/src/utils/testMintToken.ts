import {
    clusterApiUrl,
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey
} from '@solana/web3.js';
import {
    TOKEN_2022_PROGRAM_ID,
    getOrCreateAssociatedTokenAccount,
    mintTo,
} from '@solana/spl-token';
import bs58 from 'bs58';


(async () => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const secretKey = bs58.decode("4xRBSuyXwbKK7jwF1hV156L1AzH4h6n2sKsYhABTpKwdaKDqCg785XFreUmGtDfRG53SnRw9KtcFnf22doSTFqRt");
    const payer = Keypair.fromSecretKey(secretKey);
    
    const mint = new PublicKey("DHTpJsn6DTreym4cydGQgcYUkGEBG1kJJKg64PgpgHEN");
    const destinationAccount = new PublicKey("FFvPUNGYsQa4vjLAcCJ4zx8vZ4BSqQoCbMMyG3VNuEnd")
    const mintAmount = 500000 * LAMPORTS_PER_SOL
 
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        payer,
        mint,
        destinationAccount,
        undefined,
        undefined, 
        undefined,
        TOKEN_2022_PROGRAM_ID
      )

    const txn = await mintTo(
        connection,
        payer, // Transaction fee payer
        mint, // Mint Account address
        tokenAccount.address, // Mint to
        payer.publicKey, 
        mintAmount, 
        undefined, 
        undefined, 
        TOKEN_2022_PROGRAM_ID, 
      );

      console.log(
        "\nMint Tokens:",
        `https://explorer.solana.com/tx/${txn}?cluster=devnet`,
      );

      

})();