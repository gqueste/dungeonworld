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
}

export default Utils;
