import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CustomText from '../common/CustomText';

const styles = StyleSheet.create({
    value: {
        fontSize: 32,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 6,
    },
    underline: {
        alignSelf: 'center',
    },
});

const Luftdruck = props => (<View style={styles.container}>
    <CustomText style={styles.value}>{props.luftdruck}</CustomText>
    <CustomText style={styles.underline}>hPa Luftdruck</CustomText>
</View>);

Luftdruck.propTypes = {
    luftdruck: PropTypes.number.isRequired,
};

Luftdruck.defaultProps = {};

export default Luftdruck;