import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Temperatur from './Temperatur';
import CustomSection from '../common/CustomSection';
import { isEmptyObject } from '../../utils/ObjectUtils';

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

const Temperaturen = (props) => {
    if (isEmptyObject(props.temperaturen)) {
        return null;
    }
    return (<View>
        <CustomSection style={styles.temperaturenContainer} name="Temperaturen">
            <Temperatur value={props.temperaturen.temperatur} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Temperatur value={props.temperaturen.mindestTemperatur} isMinTemp />
                <Temperatur value={props.temperaturen.maximaleTemperatur} isMaxTemp />
            </View>
        </CustomSection>
    </View>);
};

Temperaturen.propTypes = ({
    temperaturen: PropTypes.shape({
        temperatur: PropTypes.string,
        mindestTemperatur: PropTypes.string,
        maximaleTemperatur: PropTypes.string,
    }),
});

Temperaturen.defaultProps = ({
    temperaturen: null,
});

export default Temperaturen;
