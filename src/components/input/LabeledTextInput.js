import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import CustomText from '../common/CustomText';
import CustomTextInput from '../common/CustomTextInput';

const styles = StyleSheet.create({
    label: {
        marginTop: 16,
    },
});

const LabeledTextInput = props => (
    <View style={props.style}>
        <CustomText style={styles.label}>{props.label}</CustomText>
        <CustomTextInput defaultText={props.defaultText} returnKeyType={props.returnKeyType} onSubmitEditing={props.onSubmit} />
    </View>
);

LabeledTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    defaultText: PropTypes.string,
    returnKeyType: PropTypes.string,
    style: ViewPropTypes.style,
};

LabeledTextInput.defaultProps = {
    returnKeyType: null,
    defaultText: null,
    style: null,
};

export default LabeledTextInput;
