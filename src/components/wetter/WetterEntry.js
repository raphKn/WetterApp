import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import WetterDescription from './WetterDescription';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 120,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 6,
    },
});

const WetterEntry = props => (
    <View style={styles.container}>
        {(<Image
            style={styles.image}
            source={{
                uri: `data:image/png;base64,${props.wetter.icon}`,
            }}
        />)}
        <WetterDescription category={props.wetter.main} description={props.wetter.description} />
    </View>
);

WetterEntry.propTypes = {
    wetter: PropTypes.shape({
        description: PropTypes.string.isRequired,
        main: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }).isRequired,
};

WetterEntry.defaultProps = {};

export default WetterEntry;
