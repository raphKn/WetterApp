import { connect } from 'react-redux';
import { getStadtSuche } from '../../modules/stadtSuche';
import { createWetterSuche } from '../../sagas/wetter/wetterSaga';
import StadtSuche from './StadtSuche';

const mapStateToProps = state => ({
    defaultText: getStadtSuche(state),
});

const mapDispatchToProps = dispatch => ({
    onSubmit: stadt => dispatch(createWetterSuche(stadt)),
});

const StadtSucheContainer = connect(mapStateToProps, mapDispatchToProps)(StadtSuche);

export default StadtSucheContainer;
