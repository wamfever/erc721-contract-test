import * as web3Service from 'main/api/web3.service';
import { FormTypes } from 'library/common/Types/enums';

const DashboardFormsConfig = [
    {
        title: 'Grant Minter',
        forOwner: true,
        forMinter: false,
        formType: FormTypes.GrantMinter,
        fields: [{
            controlId: 'address',
            label: 'Address',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.grantMinter
    },
    {
        title: 'Change Height',
        forOwner: true,
        forMinter: true,
        formType: FormTypes.ChangeHeight,
        fields: [{
            controlId: 'tokenId',
            label: 'Token ID',
            value: '',
            type: 'text'
        },
        {
            controlId: 'newInformation',
            label: 'New Height',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.changeTokenAttribute
    },
    {
        title: 'Change Name',
        forOwner: true,
        forMinter: true,
        formType: FormTypes.ChangeName,
        fields: [{
            controlId: 'tokenId',
            label: 'Token ID',
            value: '',
            type: 'text'
        },
        {
            controlId: 'newInformation',
            label: 'New Name',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.changeTokenAttribute
    },
    {
        title: 'Change Hair Color',
        forOwner: true,
        forMinter: true,
        formType: FormTypes.ChangeHairColor,
        fields: [{
            controlId: 'tokenId',
            label: 'Token ID',
            value: '',
            type: 'text'
        },
        {
            controlId: 'newInformation',
            label: 'New Hair Color',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.changeTokenAttribute
    },
    {
        title: 'Mint Token',
        forOwner: false,
        forMinter: true,
        formType: FormTypes.MintToken,
        fields: [{
            controlId: 'name',
            label: 'Token Name',
            value: '',
            type: 'text'
        },
        {
            controlId: 'age',
            label: 'Token Age',
            value: '',
            type: 'text'
        },
        {
            controlId: 'eyesColor',
            label: 'Token Eyes Color',
            value: '',
            type: 'text'
        },
        {
            controlId: 'hairColor',
            label: 'Token Hair Color',
            value: '',
            type: 'text'
        },
        {
            controlId: 'height',
            label: 'Token Height',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.mintToken
    },
    {
        title: 'Remove Minter',
        forOwner: true,
        forMinter: false,
        formType: FormTypes.RemoveMinter,
        fields: [{
            controlId: 'address',
            label: 'Address',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.removeMinter
    },
    {
        title: 'Change Age',
        forOwner: true,
        forMinter: true,
        formType: FormTypes.ChangeAge,
        fields: [{
            controlId: 'tokenId',
            label: 'Token ID',
            value: '',
            type: 'text'
        },
        {
            controlId: 'newInformation',
            label: 'New Age',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.changeTokenAttribute
    },
    {
        title: 'Change Eyes Color',
        forOwner: true,
        forMinter: true,
        formType: FormTypes.ChangeEyesColor,
        fields: [{
            controlId: 'tokenId',
            label: 'Token ID',
            value: '',
            type: 'text'
        },
        {
            controlId: 'newInformation',
            label: 'New Eyes Color',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.changeTokenAttribute
    },
    {
        title: 'Transfer Token',
        forOwner: true,
        forMinter: true,
        formType: FormTypes.TransferToken,
        fields: [{
            controlId: 'tokenId',
            label: 'Token ID',
            value: '',
            type: 'text'
        },
        {
            controlId: 'address',
            label: 'Transfer to (address):',
            value: '',
            type: 'text'
        }],
        formFunc: web3Service.transferToken
    },
]

export default DashboardFormsConfig;