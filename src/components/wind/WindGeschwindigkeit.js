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

const WindGeschwindigkeit = props => (<View style={styles.container}>
    <CustomText style={styles.value}>{props.geschwindigkeit}</CustomText>
    <CustomText style={styles.underline}>Meter pro Sekunde</CustomText>
</View>);

WindGeschwindigkeit.propTypes = {
    geschwindigkeit: PropTypes.number.isRequired,
};

WindGeschwindigkeit.defaultProps = {};

export default WindGeschwindigkeit;