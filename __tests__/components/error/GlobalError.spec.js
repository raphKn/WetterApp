import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import GlobalError from '../../../src/components/error/GlobalError';
import CustomButton from '../../../src/components/common/CustomButton';

describe('GlobalError', () => {
    it('renders  correctly in a snapshot', () => {
        const doNothing = () => {
        };
        const wrapper = renderer.create(
            <GlobalError message="Fahlermessage" cancelError={doNothing} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders no error for empty message', () => {
        const doNothing = () => {
        };
        const wrapper = renderer.create(
            <GlobalError message="" cancelError={doNothing} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('calls cancel error on buttonclick', () => {
        const cancelErrorMock = jest.fn();
        const wrapper = shallow(
            <GlobalError message="Fahlermessage" cancelError={cancelErrorMock} />);
        expect(cancelErrorMock).toHaveBeenCalledTimes(0);
        wrapper.find(CustomButton).simulate('press');
        expect(cancelErrorMock).toHaveBeenCalledTimes(1);
    });
});
