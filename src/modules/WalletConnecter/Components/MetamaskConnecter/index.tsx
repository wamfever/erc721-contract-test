import React from 'react';
import { Image } from 'react-bootstrap';

import metamask from 'resources/Images/metamask.jpg';

import './styles.scss';

const MetamaskConnecter = (props: any): JSX.Element => {

    const { connectWalletAndGetAddress } = props;

    return (
        <>
            <Image 
                className="metamask-image"
                height="175" 
                onClick={connectWalletAndGetAddress} 
                src={metamask}
            />
        </>
    )
};

export default MetamaskConnecter;
