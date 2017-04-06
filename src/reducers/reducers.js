import { characterSheetChange, defaultCharacterSheet } from './CharacterSheet';
import { namesChange } from './Names';
import { titlesChange } from './Titles';
import { defaultClasses } from './Classes';
import { racesChange } from './Races';
import { looksChange } from './Looks';
import { statsChange } from './Stats';
import { alignmentsChange } from './Alignments';
import { equipmentsChange } from './Equipments';
import Utils from '../Utils';

const initialState = {
  characterSheet : defaultCharacterSheet,
  classes: defaultClasses,
  names: defaultClasses[0].names,
  titles: defaultClasses[0].titles,
  races: defaultClasses[0].races,
  looks: defaultClasses[0].looks,
  stats: Utils.getStats(),
  alignments: defaultClasses[0].alignments,
  equipments: defaultClasses[0].equipments
}; //default values


const DungeonworldApp = (state = initialState, action) => {
  let ret = {
    characterSheet : characterSheetChange(state.characterSheet, action),
    classes: defaultClasses,
    names: namesChange(state.names, action, state.characterSheet.id),
    titles: titlesChange(state.titles, action),
    races: racesChange(state.races, action),
    looks: looksChange(state.looks, action),
    stats: statsChange(state.stats, action),
    alignments: alignmentsChange(state.alignments, action),
    equipments: equipmentsChange(state.equipments, action)
  };
  return ret;
};

export default DungeonworldApp;
