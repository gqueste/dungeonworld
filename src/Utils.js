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

  static getDefaultNamesForClass(classId) {
    const currentClass = Utils.getClassFromId(classId)
    if(currentClass.names) {
      return currentClass.names;
    }
    return currentClass.races[0].names;
  }

  static getNamesForRace(classId, raceLabel) {
    const currentClass = Utils.getClassFromId(classId)
    if(currentClass.names) { // No specific names for race
      return currentClass.names
    }
    return currentClass.races.find(race => race.label === raceLabel).names;
  }

  static getDefaultEquipments(classe) {
    let ret = [];
    for(let equipment of classe.equipments){
      if(equipment.label) {
        ret.push(equipment);
      } else if(equipment.choices) {
        ret.push(equipment.choices[0]);
      }
    }
    return ret;
  }

  static getDefaultBondsForClass(classe) {
    return classe.bonds.map((bond, index) => {
      bond.selected = index === 0;
      return bond;
    });
  }

  static selectBond(bonds, selectedBond) {
    return bonds.map((bond) => {
      if (bond.label === selectedBond.label) {
        bond.selected = !bond.selected;
      }
      return bond;
    })
  }

  static getStartingActionForClass(classe) {
    if (classe.races && classe.races[0].startingActions) {
      return classe.races[0].startingActions[0];
    } else {
      return undefined;
    }
  }

  static getStartingActionForRace(classId, raceLabel) {
    const currentClass = Utils.getClassFromId(classId);
    if(!currentClass.races || !currentClass.races.find(race => race.startingActions !== undefined)) {
      return undefined;
    } else {
      return currentClass.races.find(race => race.label === raceLabel).startingActions[0];
    }
  }

  static getDefaultActionsForClass(classe) {
    return classe.startingActions.map((action) => {
      if (action.choices) {
        for (let i = 0; i < action.choices.length; i++) {
          action.choices[i].selected = i === 0;
        }
      }
      return action;
    });
  }
}

export default Utils;
