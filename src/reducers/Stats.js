export const statsChange = (stats, action) => {
  switch (action.type) {
    case 'CHANGE_STATS':
      let ret = {};
      for(let currentStat in stats) {
        if(currentStat !== action.stat.id) {
          if(stats[currentStat].value === action.value){
            stats[currentStat].value = null;
          }
          ret[currentStat] = stats[currentStat];
        } else {
          ret[currentStat] = stats[currentStat];
          ret[currentStat].value = ret[currentStat].value === action.value ? null : action.value;
        }
      }
      console.log(ret);
      return ret;
    default:
      return stats;
  }
}
