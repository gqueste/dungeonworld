import Utils from '../Utils';

export const defaultCharacterSheet = {
  description: Utils.getClasses()[0].description,
  name: Utils.getDefaultNamesForClass(Utils.getClasses()[0].id)[0].label,
  title: Utils.getClasses()[0].titles ? Utils.getClasses()[0].titles[0].label: null,
  race: Utils.getClasses()[0].races ? Utils.getClasses()[0].races[0].label : null,
  looks: [],
  stats: Utils.getStats(),
  id: Utils.getClasses()[0].id,
  baseHP: Utils.getClasses()[0].baseHP,
  damage: Utils.getClasses()[0].damage,
  maxWeight: Utils.getClasses()[0].maxWeight,
  equipments: Utils.getDefaultEquipments(Utils.getClasses()[0])
};

export const characterSheetChange = (characterSheet, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return Object.assign({}, characterSheet, {
        description: currentClass.description,
        name: Utils.getDefaultNamesForClass(currentClass.id)[0].label,
        title: currentClass.titles ? currentClass.titles[0].label: null,
        race: currentClass.races ? currentClass.races[0].label : null,
        looks: [],
        id: currentClass.id,
        baseHP: currentClass.baseHP,
        damage: currentClass.damage,
        maxWeight: currentClass.maxWeight,
        equipments: Utils.getDefaultEquipments(currentClass)
      });
    case 'CHANGE_NAME':
      return Object.assign({}, characterSheet, {
        name: action.name
      });
    case 'CHANGE_TITLE':
      return Object.assign({}, characterSheet, {
        title: action.title
      });
    case 'CHANGE_RACE':
      return Object.assign({}, characterSheet, {
        race: action.race,
        name: Utils.getNamesForRace(characterSheet.id, action.race)[0].label
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
