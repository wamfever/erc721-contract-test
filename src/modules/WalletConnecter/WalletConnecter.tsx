import PageTitle from 'library/common/Components/PageTitle';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ModuleWrap } from 'resources/Styles/GlobalStyles';

import MetamaskConnecter from './Components/MetamaskConnecter';

import './WalletConnecter.scss';

export const WalletConnecter = (props: any): JSX.Element => {
    const { connectWallet, shouldAutoConnect } = props;
    const [ address, setAddress ] = useState<string>("");
    const [ showWarning, setShowWarning ] = useState<boolean>(false);
    const history = useHistory();

    const connectWalletAndGetAddress = async () => {
        setShowWarning(true);
        const result = await connectWallet(false)
        setAddress(result.address);
    }

    useEffect(() => {
        if (shouldAutoConnect) {
            if (!address) {
                connectWallet(true)
                    .then((result: any) => {
                        if (result.address) {
                            history.push({
                                pathname: '/dashboard',
                                state: {
                                    address: result.address
                                }
                            });
                        }
                    })
                    .catch((error: any) => {
                        console.log('Err while trying to connect wallet: ', error.status);
                    })
            } else {
                history.push({
                    pathname: '/dashboard',
                    state: {
                        address: address
                    }
                });
            }
        }
    }, [address, connectWallet, history])

    return (
        <ModuleWrap>
            <PageTitle title="Wallet Connect" />

            <MetamaskConnecter 
                connectWalletAndGetAddress={connectWalletAndGetAddress}
            />
            <span className="click-to-connect">
                Click on the logo above if you want to connect your wallet to the app.
            </span>
            {showWarning && <span className="accept-wallet-warning">
                Please accept Metamask request. If you closed the metamask window, press the logo again.
            </span>}
        </ModuleWrap>
)};
