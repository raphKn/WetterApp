import React from 'react';
import PropTypes from 'prop-types';
import CustomSection from '../common/CustomSection';
import WetterEntryContainer from './WetterEntryContainer';

function renderWetterEntries(wetter) {
    return wetter.map(wetterentry => <WetterEntryContainer key={wetterentry.description} wetter={wetterentry} />);
}

const Wetter = (props) => {
    if (props.wetter.length < 1) {
        return null;
    }
    return (
        <CustomSection name="Beschreibungen">
            {renderWetterEntries(props.wetter)}
        </CustomSection>
    );
};

Wetter.propTypes = {
    wetter: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            main: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

Wetter.defaultProps = {};

export default Wetter;
