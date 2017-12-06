import { connect } from 'react-redux';
import Luft from './Luft';
import { getLuft } from '../../modules/luft';

const mapStateToProps = state => ({
    luft: getLuft(state),
});

const LuftContainer = connect(mapStateToProps, null)(Luft);

export default LuftContainer;