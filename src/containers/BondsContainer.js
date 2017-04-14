import { connect } from 'react-redux';
import Bonds from '../components/Bonds';
import { onBondSelect } from '../actions';

const mapStateToProps = (state) => {
  return {
    bonds: state.bonds
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (bond) => {
      dispatch(onBondSelect(bond));
    }
  }
};

const BondsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bonds);

export default BondsContainer;
