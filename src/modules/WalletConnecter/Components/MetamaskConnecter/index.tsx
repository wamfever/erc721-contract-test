import React from 'react';
import { Image } from 'react-bootstrap';

import metamask from 'resources/Images/metamask.jpg';

import './styles.scss';

const MetamaskConnecter = (props: any): JSX.Element => {

    const { connectWallet } = props;
    
    return (
        <>
            <Image 
                height="175" 
                onClick={connectWallet} 
                src={metamask}
            />
        </>
    )
};

export default MetamaskConnecter;
