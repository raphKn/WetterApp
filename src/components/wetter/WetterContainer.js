import { connect } from 'react-redux';
import { getWetter } from '../../modules/wetter';
import Wetter from './Wetter';

const mapStateToProps = state => ({
    wetter: getWetter(state),
});

const WetterContainer = connect(mapStateToProps, null)(Wetter);

export default WetterContainer;