import { AttributeTypes } from 'library/common/Types/enums';

export const grantMinter = (queryInfo: any, { address }: any) => {
    return queryInfo.contract.methods.grantMinter(address)
        .send(queryInfo.querySender);
}

export const removeMinter = (queryInfo: any, { address }: any) => {
    return queryInfo.contract.methods.removeMinter(address)
        .send(queryInfo.querySender);
}

export const transferToken = (queryInfo: any, { address, tokenId }: any) => {
    return queryInfo.contract.methods.safeTransferFrom(queryInfo.querySender, address, tokenId)
        .send(queryInfo.querySender);
}

export const mintToken = (
    queryInfo: any,
    {
        hairColor,
        eyesColor,
        name,
        height,
        age
    }: any
) => {    
    return queryInfo.contract.methods.mintToken(
        hairColor,
        eyesColor,
        name,
        height,
        age
    ).send(queryInfo.querySender);
}

export const changeTokenAttribute = (
    queryInfo: any,
    { tokenId, newInformation }: any,
    attributeType: number,
) => {
    switch (attributeType) {
        case AttributeTypes.Age:
            return queryInfo.contract.methods.changeAge(tokenId, newInformation)
                .send(queryInfo.querySender);

        case AttributeTypes.EyesColor:
            return queryInfo.contract.methods.changeEyesColor(tokenId, newInformation)
                .send(queryInfo.querySender);

        case AttributeTypes.HairColor:
            return queryInfo.contract.methods.changeHairColor(tokenId, newInformation)
                .send(queryInfo.querySender);

        case AttributeTypes.Height:
            return queryInfo.contract.methods.changeHeight(tokenId, newInformation)
                .send(queryInfo.querySender);

        case AttributeTypes.Name:
            return queryInfo.contract.methods.changeHeight(tokenId, newInformation)
                .send(queryInfo.querySender);
    }
}

export const getOwner = (queryInfo: any) => {
    return queryInfo.contract.methods.owner().call();
}

export const addressIsMinter = (queryInfo: any) => {
    return queryInfo.contract.methods.isMinter(queryInfo.querySender.from).call();
}

export const getTokenLength = (queryInfo: any) => {
    return queryInfo.contract.methods.tokensLength().call();
}

export const getTokenData = (queryInfo: any, tokenId: number) => {
    return queryInfo.contract.methods.tokenData(tokenId).call();
}