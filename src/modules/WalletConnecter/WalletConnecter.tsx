import PageTitle from 'library/common/Components/PageTitle';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { ModuleWrap } from 'resources/Styles/GlobalStyles';

import MetamaskConnecter from './Components/MetamaskConnecter';

import './WalletConnecter.scss';

export const WalletConnecter = (props: any): JSX.Element => {
    const { connectWallet } = props;
    const history = useHistory();

    useEffect(() => {
        connectWallet()
            .then((result: any) => {
                console.log('res3' , result);
                history.push({
                    pathname: '/dashboard',
                    state: {
                        address: result.address
                    }
                });
            })
            .catch((error: any) => {
                console.log('Err while trying to connect wallet: ', error.status);
            })
    }, [])

    return (
        <ModuleWrap>
            <PageTitle title="Wallet Connect" />

            <MetamaskConnecter 
                connectWallet={connectWallet}
            />
            <span className="click-to-connect">
                Click on the logo above if you want to connect your wallet to the app, but denied the initial pop-up.
            </span>
        </ModuleWrap>
)};
