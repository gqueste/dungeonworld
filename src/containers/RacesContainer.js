import { connect } from 'react-redux';
import { onRaceChange } from '../actions';
import Races from '../components/Races';


const mapStateToProps = (state) => {
  return {
    races: state.races
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (race) => {
      dispatch(onRaceChange(race));
    }
  }
};

const RacesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Races);

export default RacesContainer;
