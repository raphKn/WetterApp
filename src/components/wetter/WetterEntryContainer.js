import { connect } from 'react-redux';
import WetterEntry from './WetterEntry';

const mapStateToProps = (state, props) => {
    return ({
        wetter: props.wetter,
    });
}

const WetterEntryContainer = connect(mapStateToProps, null)(WetterEntry);

export default WetterEntryContainer;
