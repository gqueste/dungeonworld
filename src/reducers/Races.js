import Utils from '../Utils';

export const racesChange = (races, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return currentClass.races;
    default:
      return races;
  }
}
