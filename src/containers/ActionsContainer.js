import { connect } from 'react-redux';
import { onActionSelectChoice } from '../actions';
import Actions from '../components/Actions';


const mapStateToProps = (state) => {
  return {
    actions: state.actions
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectChoice: (action, choice) => {
      dispatch(onActionSelectChoice(action, choice));
    }
  }
};

const ActionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Actions);

export default ActionsContainer;
