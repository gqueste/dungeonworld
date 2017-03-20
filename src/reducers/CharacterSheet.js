import Utils from '../Utils';

export const defaultCharacterSheet = {
  description: Utils.getClasses()[0].description,
  name: Utils.getClasses()[0].names[0].label,
  race: Utils.getClasses()[0].races ? Utils.getClasses()[0].races[0].label : null
};

export const characterSheetChange = (characterSheet, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return Object.assign({}, characterSheet, {
        description: currentClass.description,
        name: currentClass.names[0].label,
        race: currentClass.races ? currentClass.races[0].label : null
      });
    case 'CHANGE_NAME':
      return Object.assign({}, characterSheet, {
        name: action.name
      });
    case 'CHANGE_RACE':
      return Object.assign({}, characterSheet, {
        race: action.race
      });
    default:
      return characterSheet;
  }
}
