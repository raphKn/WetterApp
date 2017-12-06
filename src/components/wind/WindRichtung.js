import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import CustomText from '../common/CustomText';

const arrowImage = require('./arrow.png');
const styles = StyleSheet.create({
    imageContainer: {
        height: 38.5,
        width: 38.5,
    },
    image: {
        flex: 1,
        height: null,
        width: null,
    },
    container: {
        alignItems: 'center',
        marginHorizontal: 6,
    },
    underline: {
        alignSelf: 'center',
    },
});

const Windrichtung = props => {
    if (!(props.bezeichnung && props.imageRotation)) {
        return null;
    }

    return (<View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
                style={[styles.image, {
                    transform: [{
                        rotate: (props.imageRotation) + 'deg',
                    }]
                }]}
                source={arrowImage}
            />
        </View>
        <CustomText style={styles.underline}>aus {props.bezeichnung}</CustomText>
    </View>);
}

Windrichtung.propTypes = {
    bezeichnung: PropTypes.string,
    imageRotation: PropTypes.number,
};

Windrichtung.defaultProps = {
    bezeichnung: null,
    imageRotation: null,
};

export default Windrichtung;

/*
*/
