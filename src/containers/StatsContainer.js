import { connect } from 'react-redux';
import { onStatsSelect, onResetStats } from '../actions';
import Stats from '../components/Stats';


const mapStateToProps = (state) => {
  return {
    stats: state.stats
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (stat, value) => {
      dispatch(onStatsSelect(stat, value));
    },
    onResetStats: () => {
      dispatch(onResetStats());
    }
  }
};

const StatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);

export default StatsContainer;
