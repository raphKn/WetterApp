import RNFetchBlob from 'react-native-fetch-blob';
import URL from './url';

function createUrl(url, params) {
    const urlWithParams = new URL(`${url}`);
    if (params) {
        Object.keys(params).forEach((key) => {
            urlWithParams.appendSearchParameter(key, params[key]);
        });
    }
    return urlWithParams.toString();
}

export async function getJson(url, params) {
    const response = await fetch(createUrl(url, params), {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.json();
}

export async function getImage(url, params) {
    const promise = await RNFetchBlob.fetch('GET', createUrl(url, params));
    return promise.base64();
}

