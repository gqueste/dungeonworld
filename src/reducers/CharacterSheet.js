import Utils from '../Utils';

export const defaultCharacterSheet = {
  description: Utils.getClasses()[0].description,
  name: Utils.getClasses()[0].names[0].label,
  race: Utils.getClasses()[0].races ? Utils.getClasses()[0].races[0].label : null,
  looks: []
};

export const characterSheetChange = (characterSheet, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return Object.assign({}, characterSheet, {
        description: currentClass.description,
        name: currentClass.names[0].label,
        race: currentClass.races ? currentClass.races[0].label : null,
        looks: []
      });
    case 'CHANGE_NAME':
      return Object.assign({}, characterSheet, {
        name: action.name
      });
    case 'CHANGE_RACE':
      return Object.assign({}, characterSheet, {
        race: action.race
      });
    case 'SELECT_LOOK':
      const looks = [];
      const sameRowLook = characterSheet.looks.find(look => look.row === action.look.row);
      if(!sameRowLook) { // no look already for this row
        looks.push(action.look);
      } else if(sameRowLook.id !== action.look.id) { // there was already a look for this row
        looks.push(action.look);
      }

      // Push all elements in other rows
      characterSheet.looks.forEach((look) => {
        if(look.row !== action.look.row){
          looks.push(look);
        }
      });
      looks.sort(sortLooks);

      return Object.assign({}, characterSheet, {
        looks
      });
    default:
      return characterSheet;
  }
}

function sortLooks(a, b) {
  if(a.row < b.row) {
    return -1;
  }
  return 1;
}
