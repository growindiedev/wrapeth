import { Chain } from '@rainbow-me/rainbowkit';
import { chain, configureChains } from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import logo from 'public/gnosis-logo.png';

const xdai: Chain = {
  id: 100,
  name: 'Gnosis Chain',
  network: 'gnosis',
  iconUrl: logo,
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'xDai',
    symbol: 'xDAI',
  },
  rpcUrls: {
    default: 'https://dai.poa.network',
  },
  blockExplorers: {
    default: { name: 'BlockScout', url: 'https://blockscout.com/poa/xdai' },
  },
  testnet: false,
};

export const { chains, provider } = configureChains(
  [
    chain.mainnet,
    xdai,
    chain.polygon,
    chain.arbitrum,
    chain.optimism,
    chain.goerli,
    chain.sepolia,
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default,
      }),
    }),
    infuraProvider({ apiKey: process.env.REACT_APP_RPC_KEY }),
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_KEY }),
  ],
);
