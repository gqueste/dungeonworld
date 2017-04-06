import { connect } from 'react-redux';
import { onAlignmentChange } from '../actions';
import Alignments from '../components/Alignments';


const mapStateToProps = (state) => {
  return {
    alignments: state.alignments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (alignement) => {
      dispatch(onAlignmentChange(alignement));
    }
  }
};

const AlignmentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Alignments);

export default AlignmentsContainer;
