import React from 'react';
import { shallow } from 'enzyme';
import CustomTextInputIos from '../../../src/components/common/CustomTextInput.ios';
import CustomTextInputAndroid from '../../../src/components/common/CustomTextInput.android';

const doNothing = () => {
};
describe('CustomTextInput ios', () => {
    it('renders in a snapshot', () => {
        const wrapper = shallow(
            <CustomTextInputIos onSubmitEditing={doNothing} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('handles changeText and submit correctly', () => {
        const mocksubmitEditing = jest.fn();
        const wrapper = shallow(
            <CustomTextInputIos onSubmitEditing={mocksubmitEditing} />);
        wrapper.props().children.props.onChangeText('inputValue');
        expect(wrapper.state('text')).toBe('inputValue');
        expect(mocksubmitEditing).toHaveBeenCalledTimes(0);
        wrapper.props().children.props.onSubmitEditing();
        expect(mocksubmitEditing).toHaveBeenCalledTimes(1);
        expect(mocksubmitEditing).toHaveBeenCalledWith('inputValue');
    });
});

describe('CustomTextInput android', () => {
    it('renders in a snapshot', () => {
        const wrapper = shallow(
            <CustomTextInputAndroid onSubmitEditing={doNothing} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('handles changeText and submit correctly', () => {
        const mocksubmitEditing = jest.fn();
        const wrapper = shallow(
            <CustomTextInputAndroid onSubmitEditing={mocksubmitEditing} />);
        wrapper.props().onChangeText('inputValue');
        expect(wrapper.state('text')).toBe('inputValue');
        expect(mocksubmitEditing).toHaveBeenCalledTimes(0);
        wrapper.props().onSubmitEditing();
        expect(mocksubmitEditing).toHaveBeenCalledTimes(1);
        expect(mocksubmitEditing).toHaveBeenCalledWith('inputValue');
    });
});
