import Utils from '../Utils';

export const namesChange = (names, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return currentClass.names;
    default:
      return names;
  }
}
