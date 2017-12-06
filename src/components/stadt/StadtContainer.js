import { connect } from 'react-redux';
import { getStadt } from '../../modules/stadt';
import Stadt from './Stadt';

const mapStateToProps = state => ({
    stadt: getStadt(state),
});

const ComponentContainer = connect(mapStateToProps, null)(Stadt);

export default ComponentContainer;