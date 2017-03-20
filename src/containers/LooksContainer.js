import { connect } from 'react-redux';
import { onLookSelect } from '../actions';
import Looks from '../components/Looks';


const mapStateToProps = (state) => {
  return {
    looks: state.looks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (look) => {
      dispatch(onLookSelect(look));
    }
  }
};

const LooksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Looks);

export default LooksContainer;
