import { connect } from 'react-redux';
import { onNameChange } from '../actions';
import Names from '../components/Names';


const mapStateToProps = (state) => {
  return {
    names: state.names
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name) => {
      dispatch(onNameChange(name));
    }
  }
};

const NamesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Names);

export default NamesContainer;
