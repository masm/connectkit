import { WalletProps } from '../wallet';

import Logos from '../../assets/logos';

import { isZeal } from '../../utils/wallets';

export const zeal = (): WalletProps => {
  const isInstalled = isZeal();

  return {
    id: 'zeal',
    name: 'Zeal',
    logos: {
      default: <Logos.Zeal />,
      transparent: <Logos.Zeal />,
      appIcon: <Logos.Zeal />,
      connectorButton: <Logos.Zeal />,
    },
    logoBackground: '#00FFFF',
    scannable: false,
    downloadUrls: {
      website: 'https://zeal.app',
    },
    installed: isInstalled,
  };
};
