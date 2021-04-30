import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';

import WalletConnecter from './index';

configure({adapter: new Adapter()});

describe('Connect wallet module', () => {
  it('Should render connect suggestion', () => {
    const walletConnecter = mount((<WalletConnecter />));
    expect(walletConnecter.text()).toContain("Click on the logo above if you want to connect your wallet to the app.");
  });

  it('Should render warning', () => {
    const walletConnecter = mount((<WalletConnecter />));
    const image = walletConnecter.find('Image');
    image.simulate('click');
    expect(walletConnecter.text()).toContain("Please accept Metamask request. If you closed the metamask window, press the logo again.");
      
  })

});