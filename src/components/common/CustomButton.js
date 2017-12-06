import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native';
import CustomText from './CustomText';

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#03A9F4',
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: { paddingHorizontal: 16 }
});

const CustomButton = props => (<TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress}>
    <CustomText style={styles.buttonText}>{props.text.toLocaleUpperCase()}</CustomText>
</TouchableOpacity>);

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: ViewPropTypes.style,
};

CustomButton.defaultProps = {
    style: null,
};

export default CustomButton;
