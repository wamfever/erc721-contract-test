import React, { useEffect, useState, useCallback } from 'react';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import { Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

import { ContractData } from 'library/utilities/ContractData';
import DashboardFormConfig from 'library/utilities/DashboardFormsConfig';
import { getOwner, addressIsMinter, getTokenLength, getTokenData } from 'main/api/web3.service';
import { AttributeTypes, FormTypes } from 'library/common/Types/enums';

import { ModuleWrap } from 'resources/Styles/GlobalStyles';
import FormWidget from './Components/FormWidget';
import PageTitle from 'library/common/Components/PageTitle';
import DataTable from './Components/DataTable';

import './Dashboard.scss';
import 'react-toastify/dist/ReactToastify.css';

export const Dashboard = (props: any): JSX.Element => {
    const [contextInformation, setContextInformation] = useState<any>({});
    const [contract, setContract] = useState<any>();

    const [isOwner, setIsOwner] = useState(false);
    const [isMinter, setIsMinter] = useState(false);
    const [rolesChecked, setRolesChecked] = useState(false);

    const [tableData,setTableData] = useState<Array<any>>([]);
    const [dataFetched, setFetchedData] = useState(false);
    
    const getQueryInfo = useCallback(() => {
        return {
            contract,
            querySender: {
                from: contextInformation.walletAddress
            }
        }
    }, [contract, contextInformation.walletAddress])

    const checkRoles = useCallback(async () => {
        if (await addressIsMinter(getQueryInfo())) {
            setIsMinter(true)
        } else {
            setIsMinter(false);
        }

        if (await getOwner(getQueryInfo()) === contextInformation.walletAddress) {
            setIsOwner(true);
        }
        
        setRolesChecked(true);
    }, [contextInformation.walletAddress, getQueryInfo]);

    const fetchTableData = useCallback(async () => {
        setFetchedData(true);
        const tokenLength = await getTokenLength(getQueryInfo());
        let tableData = [];

        for (let i = 0; i < tokenLength; i++) {
            let tokenData = await getTokenData(getQueryInfo(), i);
            tokenData = {
                id: i,
                name: tokenData.name,
                age: tokenData.age,
                height: tokenData.height,
                hairColor: tokenData.hairColor,
                eyesColor: tokenData.eyesColor,
                mintedTimeStamp: moment.unix(tokenData.mintedTimestamp).format("MM/DD/YYYY")
            }
            tableData.push(tokenData);
        }

        setTableData(tableData);
    }, [getQueryInfo])


    useEffect(() => {
        if (!contract && contextInformation.walletAddress) {
            const web3Instance = new Web3(contextInformation.provider);
            setContract(new web3Instance.eth.Contract(ContractData.abi as any, ContractData.address));
        }
        
        if (contract && !rolesChecked) {
            checkRoles();
        }

        if (contract && !dataFetched) {
            fetchTableData();
        }

    }, [contextInformation, isMinter, tableData, contract, dataFetched, rolesChecked, checkRoles, fetchTableData])
    
    const filterFormsByRoles = (forOwner: boolean, forMinter: boolean) => {
        if (
            (forOwner && forMinter)
            || (forOwner && isOwner)
            || (forMinter && isMinter)
        ) {
            return true
        }

        return false;

    }

    const initiateWeb3 = async () => {
        const { connectWallet } = props;
        const historyState = props.history.location.state;
        const provider = await detectEthereumProvider({
            mustBeMetaMask: true
        });

        if (!historyState || !historyState.address) {
            connectWallet()
                .then((result: any) => {
                    setContextInformation({
                        walletAddress: result.address,
                        provider: provider,
                    })
                })
        } else {
            setContextInformation({
                walletAddress: historyState.address,
                provider: provider,
            })
        }
    }

    if (!contextInformation.walletAddress) {
        initiateWeb3();
    }

    const makeToast = (type: any, text?: string) => {
        const option: any = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
        }

        if (type === 'success') toast.success('Your action was successful!', option)

        if (type === 'error') toast.error('There was a problem with your request!', option);
    }

    const handleSubmit = async (formFunc: any, formType: number, formValues: any) => {
        switch (formType) {
            case FormTypes.GrantMinter:
                try {
                    await formFunc(getQueryInfo(), formValues);
                    makeToast('success');
                    checkRoles();
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;
                
            case FormTypes.RemoveMinter:
                try {
                    await formFunc(getQueryInfo(), formValues);
                    makeToast('success');
                    checkRoles();
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;

            case FormTypes.MintToken:
                try {
                    await formFunc(getQueryInfo(), formValues);
                    makeToast('success');
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;

            case FormTypes.TransferToken:
                try {
                    await formFunc(getQueryInfo(), formValues);
                    makeToast('success');
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;

            case FormTypes.ChangeAge:
                try {
                    await formFunc(getQueryInfo(), formValues, AttributeTypes.Age);
                    makeToast('success');
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;

            case FormTypes.ChangeEyesColor:
                try {
                    await formFunc(getQueryInfo(), formValues, AttributeTypes.EyesColor);
                    makeToast('success');
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;

            case FormTypes.ChangeHairColor:
                try {
                    await formFunc(getQueryInfo(), formValues, AttributeTypes.HairColor);
                    makeToast('success');
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;
            
            case FormTypes.ChangeHeight:
                try {
                    await formFunc(getQueryInfo(), formValues, AttributeTypes.Height);
                    makeToast('success');
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;

            case FormTypes.ChangeName:
                try {
                    await formFunc(getQueryInfo(), formValues, AttributeTypes.Name);
                    makeToast('success');
                } catch (error) {
                    makeToast(error.reason, 'error');
                }
                return;
        }
    }

    const secondColumn = Math.ceil(DashboardFormConfig.length / 2);

    return (
        <>
            <ToastContainer/>
            <ModuleWrap className="scrollable-area-container">
                <PageTitle title="Dashboard" />
                <Row className="dashboard-forms">
                    <Col xs="5">
                        {DashboardFormConfig.slice(0,secondColumn).map((element, index) => {
                            if (filterFormsByRoles(element.forOwner, element.forMinter))
                                return <FormWidget
                                    key={index}
                                    formDetails={{
                                        formTitle: element.title,
                                        formType: element.formType,
                                        fields: element.fields,
                                        formFunc: element.formFunc
                                    }}
                                    handleSubmit={handleSubmit}
                                />
                            return null;
                        })}
                    </Col>
                    <Col xs="5">
                        {DashboardFormConfig.slice(secondColumn).map((element, index) => {
                            if (filterFormsByRoles(element.forOwner, element.forMinter))
                                return <FormWidget
                                    key={index}
                                    formDetails={{
                                        formTitle: element.title,
                                        formType: element.formType,
                                        fields: element.fields,
                                        formFunc: element.formFunc
                                    }}
                                    handleSubmit={handleSubmit}
                                />
                            return null;
                        })}
                    </Col>
                </Row>
                <DataTable rows={tableData}></DataTable>
            </ModuleWrap>
        </>
    )
}
