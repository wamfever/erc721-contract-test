import Dashboard from 'modules/Dashboard';
import WalletConnecter from 'modules/WalletConnecter';

export const routes = [
  {
    exact: true,
    path: '/',
    render: (props: any) => <WalletConnecter {...props} />
  },
  {
    exact: true,
    path: '/dashboard',
    render: (props: any) => <Dashboard {...props} />,
  },
];