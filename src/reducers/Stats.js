import Utils from '../Utils';

export const statsChange = (stats, action) => {
  switch (action.type) {
    case 'CHANGE_STATS':
      return Utils.updateStats(stats, action.stat, action.value);
    default:
      return stats;
  }
}
