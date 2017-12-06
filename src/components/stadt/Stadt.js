import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CustomText from '../common/CustomText';
import CustomSection from '../common/CustomSection';
import { isEmptyObject } from '../../utils/ObjectUtils';

const styles = StyleSheet.create({
    container: {},
    keyValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    stadtName: {
        fontSize: 18,
    },
});

const Stadt = (props) => {
    if (isEmptyObject(props.stadt)) {
        return null;
    }
    return (<CustomSection style={styles.container} name="Stadt">
        <View style={styles.keyValue}>
            <CustomText style={styles.stadtName}>Stadt</CustomText>
            <CustomText style={styles.stadtName}>{props.stadt.stadtName}</CustomText>
        </View>
        <View style={styles.keyValue}>
            <CustomText>Longitude</CustomText>
            <CustomText>{props.stadt.longitude}</CustomText>
        </View>
        <View style={styles.keyValue}>
            <CustomText>Latitude</CustomText>
            <CustomText>{props.stadt.latitude}</CustomText>
        </View>
    </CustomSection>);
};

Stadt.propTypes = {
    stadt: PropTypes.shape({
        stadtName: PropTypes.string,
        longitude: PropTypes.number,
        latitude: PropTypes.number,
    }),
};

Stadt.defaultProps = {
    stadt: {},
};

export default Stadt;
