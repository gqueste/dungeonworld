import Utils from '../Utils';

export const defaultCharacterSheet = {
  description: Utils.getClasses()[0].description,
  name: Utils.getDefaultNamesForClass(Utils.getClasses()[0])[0].label,
  race: Utils.getClasses()[0].races ? Utils.getClasses()[0].races[0].label : null,
  looks: [],
  stats: Utils.getStats()
};

export const characterSheetChange = (characterSheet, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return Object.assign({}, characterSheet, {
        description: currentClass.description,
        name: Utils.getDefaultNamesForClass(currentClass)[0].label,
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
    case 'CHANGE_STATS':
      const stats = Utils.updateStats(characterSheet.stats, action.stat, action.value);
      for(let currentStat in stats) {
        const stat = stats[currentStat];
        switch (stat.value) {
          case 16:
            stat.modifier = '+2';
            break;
          case 15:
            stat.modifier = '+1';
            break;
          case 13:
            stat.modifier = '+1';
            break;
          case 12:
            stat.modifier = '0';
            break;
          case 9:
            stat.modifier = '0';
            break;
          case 8:
            stat.modifier = '-1';
            break;
          default:
            stat.modifier = null;
        }
      }
      return Object.assign({}, characterSheet, {
        stats
      });
    case 'RESET_STATS':
    return Object.assign({}, characterSheet, {
      stats : Utils.getStats()
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
