// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "<-- ALCHEMY APP API KEY -->",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

alchemy.core.resolveName("vitalik.eth").then(console.log);
