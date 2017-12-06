import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const createStyle = lightScheme => StyleSheet.create({
    text: {
        backgroundColor: 'transparent',
        color: lightScheme ? '#FAFAFA' : '#212121',
    },
});

const CustomText = props => (<Text style={[createStyle(props.lightScheme).text, props.style]} allowFontScaling={props.allowFontScaling}>
    {props.children}
</Text>);

CustomText.propTypes = {
    children: PropTypes.node.isRequired,
    allowFontScaling: Text.propTypes.allowFontScaling,
    style: Text.propTypes.style,
    lightScheme: PropTypes.bool,
};

CustomText.defaultProps = {
    style: null,
    allowFontScaling: false,
    lightScheme: false,
};

export default CustomText;
