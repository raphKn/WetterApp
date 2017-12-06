import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import CustomSection from '../common/CustomSection';
import Luftfeuchtigkeit from './Luftfeuchtigkeit';
import Luftdruck from './Luftdruck';
import Bewoelkung from './Bewoelkung';
import { isEmptyObject } from '../../utils/ObjectUtils';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
});

const Luft = (props) => {
    if (isEmptyObject(props.luft)) {
        return null;
    }
    return (
        <CustomSection style={styles.container} name="Wolken und Luft">
            <Bewoelkung bewoelkung={props.luft.bewoelkung} />
            <View>
                <Luftfeuchtigkeit luftfeuchtigkeit={props.luft.luftfeuchtigkeit} />
                <Luftdruck luftdruck={props.luft.luftdruck} />
            </View>
        </CustomSection>
    );
};

Luft.propTypes = {
    luft: PropTypes.shape({
        bewoelkung: PropTypes.number,
        luftdruck: PropTypes.number,
        luftfeuchtigkeit: PropTypes.number,
    }),
};

Luft.defaultProps = {
    luft: null,
};

export default Luft;
