import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CustomText from '../common/CustomText';

function createStyle(isMinTemp, isMaxTemp) {
    let color;
    if (isMinTemp) {
        color = 'blue';
    } else if (isMaxTemp) {
        color = 'red';
    }

    return StyleSheet.create({
        text: {
            fontSize: 32,
            color,
        },
    });
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6,
    },
    underline: {
        alignSelf: 'center',
    },
});

function createUnderline(isMinTemp, isMaxTemp) {
    if (isMinTemp) {
        return 'min.';
    }
    if (isMaxTemp) {
        return 'max.';
    }
    return 'aktuell';
}

const Temperatur = props => (<View style={styles.container}>
    <CustomText style={createStyle(props.isMinTemp, props.isMaxTemp).text}>{props.value}</CustomText>
    <CustomText style={styles.underline}>{createUnderline(props.isMinTemp, props.isMaxTemp)}</CustomText>
</View>);

Temperatur.propTypes = {
    value: PropTypes.string.isRequired,
    isMinTemp: PropTypes.bool,
    isMaxTemp: PropTypes.bool,
};

Temperatur.defaultProps = {
    isMinTemp: false,
    isMaxTemp: false,
};

export default Temperatur;