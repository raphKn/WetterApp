import { getImage, getJson } from '../../src/networking/xhr';

const mockedFetch = jest.fn(() => new Promise((resolve) => {
    resolve({ json: () => 'jsonResponse' });
}));

global.fetch = mockedFetch;
const RNFetchBlob = require('react-native-fetch-blob');

const mockedRNFetchBlobFetch = jest.fn(() => new Promise((resolve) => {
    resolve({ base64: () => 'base64Image' });
}));
RNFetchBlob.fetch = mockedRNFetchBlobFetch;

describe('Xhr', () => {
    it('calles fetch for getJson ', async () => {
        const json = await getJson('testUrl', { param1: 'param1', param2: 'param2' });
        expect(json).toEqual('jsonResponse');
        expect(mockedFetch).toHaveBeenCalledWith('testUrl?param1=param1&param2=param2', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
        });
    });
    it('calles RNFetchBlob for getImage ', async () => {
        const image = await getImage('testUrl');
        expect(image).toEqual('base64Image');
        expect(mockedRNFetchBlobFetch).toHaveBeenCalledWith('GET', 'testUrl');
    });
});
