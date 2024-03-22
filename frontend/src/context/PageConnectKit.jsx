"use client"
import React, { useEffect } from 'react';
// import { Button, notification } from 'antd';
import {
  ConnectButton,
  ModalProvider,
  useAccount,
  useParticleConnect,
  useConnectKit
} from '@particle-network/connect-react-ui';
import {
  Solana,
  SolanaDevnet
} from '@particle-network/chains';
import {
  solanaWallets
} from '@particle-network/connect';
import { Connection, PublicKey } from '@solana/web3.js';

// import './App.css';
import '@particle-network/connect-react-ui/dist/index.css';
// import bs58 from 'bs58';

const PageConnectKit = ({ children }) => {
//   const options = {
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     clientKey: process.env.REACT_APP_CLIENT_KEY,
//     appId: process.env.REACT_APP_APP_ID,
//     chains: [Solana, SolanaDevnet],
//     wallets: solanaWallets(),
//   };
  const options = {
    projectId: "1b0f4491-a389-49bf-a531-351b2963a777",
    clientKey: "c2OxO6jcBaG5pDob4WS2veb5hSxsQHYnzcunudQ3",
    appId: "f5df37dc-2f44-4be8-943f-9d84b11e2a86",
    chains: [Solana, SolanaDevnet],
    wallets: solanaWallets(),
  };

  return (
    <ModalProvider particleAuthSort={['email', 'phone', 'google']} options={options}>
      {children}
    </ModalProvider>
  );
};

export default PageConnectKit;