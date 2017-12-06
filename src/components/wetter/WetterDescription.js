import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CustomText from '../common/CustomText';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    category: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 6,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 4,
    },
});

const WetterDescription = props => (<View style={styles.container}>
    <CustomText style={styles.category}>{props.category}</CustomText>
    <CustomText style={styles.description}>- {props.description} -</CustomText>
</View>);

WetterDescription.propTypes = {
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

WetterDescription.defaultProps = {};

export default WetterDescription;
