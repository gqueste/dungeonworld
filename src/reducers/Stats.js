export const statsChange = (stats, action) => {
  switch (action.type) {
    case 'CHANGE_STATS':
      return stats;
    default:
      return stats;
  }
}
