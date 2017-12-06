import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, View } from 'react-native';
import CustomText from '../common/CustomText';
import CustomButton from '../common/CustomButton';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'rgba(114,114,114,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    innerContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingTop: 12,
        borderRadius: 10,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    message: {
        textAlign: 'center',
    },
});

const GlobalError = (props) => {
    if (!props.message) {
        return null;
    }
    const { width, height } = Dimensions.get('window');
    return (

        <View style={[styles.container, { height, width }]}>
            <View style={styles.innerContainer}>
                <CustomText style={styles.title}>Es ist ein Fehler aufgetreten</CustomText>
                <CustomText style={styles.message}>{props.message}</CustomText>
                <CustomButton text="Zurück" onPress={props.cancelError} />
            </View>
        </View>
    );
}

GlobalError.propTypes = {
    message: PropTypes.string,
    cancelError: PropTypes.func,
};

GlobalError.defaultProps = {
    message: '',
    cancelError: () => {
    },
};

export default GlobalError;
