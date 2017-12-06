import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CustomSection from '../common/CustomSection';
import { isEmptyObject } from '../../utils/ObjectUtils';
import Windrichtung from './WindRichtung';
import WindGeschwindigkeit from './WindGeschwindigkeit';

const styles = StyleSheet.create({
    image: { width: 70, height: 70 },
    temperaturenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    temperaturenHeader: {
        fontSize: 24,
    },
});

const Wind = (props) => {
    if (isEmptyObject(props.wind)) {
        return null;
    }
    return (<View>
        <CustomSection style={styles.temperaturenContainer} name="Wind">
            <Windrichtung bezeichnung={props.wind.bezeichnung} imageRotation={props.wind.imageRotation} />
            <WindGeschwindigkeit geschwindigkeit={props.wind.geschwindigkeit} />
        </CustomSection>
    </View>);
};

Wind.propTypes = ({
    wind: PropTypes.shape({
        bezeichnung: PropTypes.string,
        geschwindigkeit: PropTypes.number,
        imageRotation: PropTypes.number,
    }),
});

Wind.defaultProps = ({
    wind: null,
});

export default Wind;