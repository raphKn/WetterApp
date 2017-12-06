import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet, View } from 'react-native';
import CustomText from '../common/CustomText';

const lessClouds = require('./cloud.png');
const moreClouds = require('./cloud2.png');

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: null,
        width: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        marginHorizontal: 6,
    },
    underline: {
        alignSelf: 'center',
    },
    bewoelkung: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

function getImage(bewoelkung) {
    if (bewoelkung > 49) {
        return moreClouds;
    }
    return lessClouds;
}

const Bewoelkung = props => (
    <View style={styles.container}>
        <ImageBackground
            resizeMode="contain"
            style={styles.image}
            source={getImage(props.bewoelkung)}
        >
            <CustomText style={styles.bewoelkung}>{props.bewoelkung}</CustomText>
        </ImageBackground>
        <CustomText style={styles.underline}>% bewölkt</CustomText>
    </View>
);

Bewoelkung.propTypes = {
    bewoelkung: PropTypes.number,
};

Bewoelkung.defaultProps = {
    bewoelkung: null,
};

export default Bewoelkung;

/*
*/
