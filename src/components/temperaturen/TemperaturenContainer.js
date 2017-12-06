import { connect } from 'react-redux';
import { getTemperaturen } from '../../modules/temperaturen';
import Wetter from './Temperaturen';

const mapStateToProps = state => ({
    temperaturen: getTemperaturen(state),
});

const TemperaturenContainer = connect(mapStateToProps, null)(Wetter);

export default TemperaturenContainer;
