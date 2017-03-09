import { connect } from 'react-redux';
import { onClassChange } from '../actions';
import Classes from '../components/Classes';


const mapStateToProps = (state) => {
  return {
    classes: state.classes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (id) => {
      dispatch(onClassChange(id));
    }
  }
};

const ClassesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Classes);

export default ClassesContainer;
