import Utils from '../Utils';

export const namesChange = (names, action, classId) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      return Utils.getDefaultNamesForClass(action.id);
    case 'CHANGE_RACE':
      return Utils.getNamesForRace(classId, action.race);
    default:
      return names;
  }
}
