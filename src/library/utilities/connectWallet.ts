import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';

const connectWallet = async () => {
    const provider: any = await detectEthereumProvider({
        mustBeMetaMask: true
    });

    if (provider) { //check if Metamask is installed
        try {
            const userAddress = await new Web3(provider).eth.requestAccounts();
            const obj = {
                connectedStatus: true,
                address: userAddress[0]
            }
            return obj;
        } catch (error) {
            throw {
                connectedStatus: false,
                error,
                status: "🦊 Connect to Metamask using the button on the top right."
            }
        }
    } else {
        throw {
            connectedStatus: false,
            status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
        }
    } 
};

export default connectWallet;