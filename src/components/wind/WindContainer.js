import { connect } from 'react-redux';
import { getWind } from '../../modules/wind';
import Wind from './Wind';

const mapStateToProps = state => ({
    wind: getWind(state),
});

const ComponentContainer = connect(mapStateToProps)(Wind);

export default ComponentContainer;
