import { connect } from 'react-redux';
import { createResetGlobalError, getGlobalErrorMessage } from '../../modules/globalError';
import GlobalError from './GlobalError';

const mapStateToProps = state => ({
    message: getGlobalErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
    cancelError: () => {
        dispatch(createResetGlobalError());
    },
});

const GlobalErrorContainer = connect(mapStateToProps, mapDispatchToProps)(GlobalError);

export default GlobalErrorContainer;