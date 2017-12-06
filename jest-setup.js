/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('react-native-fetch-blob', () => {
    return {
        DocumentDir: () => {
        },
        fetch: () => {
        },
        base64: () => {
        },
        android: () => {
        },
        ios: () => {
        },
        config: () => {
        },
        session: () => {
        },
        fs: () => {
        },
        wrap: () => {
        },
        polyfill: () => {
        },
        JSONStream: () => {
        },
    };
});

Enzyme.configure({ adapter: new Adapter() });
