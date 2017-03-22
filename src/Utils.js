import { defaultClasses } from './reducers/Classes';

class Utils {
  static getClassFromId(id) {
    for (let classe of defaultClasses) {
      if (classe.id === id) {
        return classe;
      }
    }
    return false;
  }

  static getClasses() {
    return defaultClasses;
  }

  static getStats() {
    return {
      strength: {
        id: 'strength',
        label: 'Force'
      },
      dexterity: {
        id: 'dexterity',
        label: 'Dextérité'
      },
      constitution: {
        id: 'constitution',
        label: 'Constitution'
      },
      intelligence: {
        id: 'intelligence',
        label: 'Intelligence'
      },
      wisdom: {
        id: 'wisdom',
        label: 'Sagesse'
      },
      charism: {
        id: 'charism',
        label: 'Charisme'
      }
    };
  }

  static updateStats(stats, targetStat, value) {
    let ret = {};
    for(let currentStat in stats) {
      ret[currentStat] = stats[currentStat];
      if(ret[currentStat].id === targetStat.id){
        ret[currentStat].value = ret[currentStat].value === value ? null : value;
      } else {
        ret[currentStat].value = ret[currentStat].value === value ? null : ret[currentStat].value;
      }
    }
    return ret;
  }
}

export default Utils;
