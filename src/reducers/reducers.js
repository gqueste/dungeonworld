import { characterSheetChange, defaultCharacterSheet } from './CharacterSheet';
import { namesChange } from './Names';
import { defaultClasses } from './Classes';
import { racesChange } from './Races';
import { looksChange } from './Looks';
import { statsChange } from './Stats';
import Utils from '../Utils';

const initialState = {
  characterSheet : defaultCharacterSheet,
  classes: defaultClasses,
  names: defaultClasses[0].names,
  races: defaultClasses[0].races,
  looks: defaultClasses[0].looks,
  stats: Utils.getStats()
}; //default values


const DungeonworldApp = (state = initialState, action) => {
  let ret = {
    characterSheet : characterSheetChange(state.characterSheet, action),
    classes: defaultClasses,
    names: namesChange(state.names, action),
    races: racesChange(state.races, action),
    looks: looksChange(state.looks, action),
    stats: statsChange(state.stats, action)
  };
  return ret;
};

export default DungeonworldApp;
