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

const Luftfeuchtigkeit = props => (<View style={styles.container}>
    <CustomText style={styles.value}>{props.luftfeuchtigkeit}</CustomText>
    <CustomText style={styles.underline}>% Luftfeuchtigkeit</CustomText>
</View>);

Luftfeuchtigkeit.propTypes = {
    luftfeuchtigkeit: PropTypes.number.isRequired,
};

Luftfeuchtigkeit.defaultProps = {};

export default Luftfeuchtigkeit;