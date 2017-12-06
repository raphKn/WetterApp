import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import CustomSection from '../common/CustomSection';
import LabeledTextInput from '../input/LabeledTextInput';

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    text: {
        flex: 1,
    },
    button: {
        margin: 0,
    },
});

const StadtSuche = props => (<CustomSection style={styles.container} name="Suche" backgroundColor={'#ff6600'}>
    <LabeledTextInput style={styles.text} label="Stadt" onSubmit={props.onSubmit} defaultText={props.defaultText} returnKeyType="search" />
</CustomSection>);

StadtSuche.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    defaultText: PropTypes.string,
};
StadtSuche.defaultProps = {
    defaultText: '',
};

export default StadtSuche;
