import Dashboard from 'modules/Dashboard';
import WalletConnecter from 'modules/WalletConnecter';

import connectWallet from 'library/utilities/connectWallet';

export const routes = [
  {
    exact: true,
    path: '/',
    render: (props: any) => <WalletConnecter connectWallet={() => connectWallet()} {...props} />
  },
  {
    exact: true,
    path: '/dashboard',
    render: (props: any) => <Dashboard connectWallet={() => connectWallet()} {...props} />,
  },
];