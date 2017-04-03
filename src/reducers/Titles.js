import Utils from '../Utils';

export const titlesChange = (titles, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return currentClass.titles || [];
    default:
      return titles;
  }
}
