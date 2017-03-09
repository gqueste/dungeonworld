import Utils from '../Utils';

export const defaultCharacterSheet = {
  description: 'Coucou'
};

export const characterSheetChange = (characterSheet, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return Object.assign({}, characterSheet, {
        description: currentClass.description
      });
    default:
      return characterSheet;
  }
}
