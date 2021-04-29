import { AttributeTypes } from 'library/common/Types/enums';

export const grantMinter = (queryInfo: any, addressGrantedMinter: string) => {
    return queryInfo.contract.methods.grantMinter(addressGrantedMinter)
        .send(queryInfo.querySender);
}

export const removeMinter = (queryInfo: any, addressDeniedMinter: string) => {
    return queryInfo.contract.methods.removeMinter(addressDeniedMinter)
        .send(queryInfo.querySender);
}

export const transferToken = (
    queryInfo: any,
    transferToAddress: string,
    tokenId: number
) => {
    return queryInfo.contract.methods.safeTransferFrom(queryInfo.querySender, transferToAddress, tokenId)
        .send(queryInfo.querySender);
}

export const mintToken = (queryInfo: any, tokenInformation: any) => {
    return queryInfo.contract.methods.mintToken(
        tokenInformation.name,
        tokenInformation.age,
        tokenInformation.eyesColor,
        tokenInformation.hairColor,
        tokenInformation.height
    ).send(queryInfo.querySender);
}

export const changeTokenAttribute = (
    queryInfo: any,
    attributeType: number,
    tokenId: string,
    newInformation: string | number
) => {
    switch (attributeType) {
        case AttributeTypes.Age:
            return queryInfo.contract.methods.changeAge(tokenId, newInformation)
                .send(queryInfo.querySender);

        case AttributeTypes.EyeColor:
            return queryInfo.contract.methods.changeEyesColor(tokenId, newInformation)
                .send(queryInfo.querySender);

        case AttributeTypes.HairColor:
            return queryInfo.contract.methods.changeHairColor(tokenId, newInformation)
                .send(queryInfo.querySender);

        case AttributeTypes.Height:
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

export const getTokenlength = (queryInfo: any,) => {
    return queryInfo.contract.methods.tokensLength().call();
}

export const getTokenData = (queryInfo: any, tokenId: string) => {
    return queryInfo.contract.methods.tokenData(tokenId).call();
}