import { connect } from 'react-redux';
import { onTitleChange } from '../actions';
import Titles from '../components/Titles';


const mapStateToProps = (state) => {
  return {
    titles: state.titles
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (title) => {
      dispatch(onTitleChange(title));
    }
  }
};

const TitlesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Titles);

export default TitlesContainer;
