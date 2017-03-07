import { connect } from 'react-redux';
import Steps from '../components/Steps';


const mapStateToProps = (state) => {
  return {
    classes: state.classes
  }
};

const StepsContainer = connect(
  mapStateToProps
)(Steps);

export default StepsContainer;
