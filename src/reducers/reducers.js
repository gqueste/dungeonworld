import { characterSheetChange, defaultCharacterSheet } from './CharacterSheet';
import { defaultClasses } from './Classes';

const initialState = {
  characterSheet : defaultCharacterSheet,
  classes: defaultClasses
}; //default values


const DungeonworldApp = (state = initialState, action) => {
  let ret = {
    characterSheet : characterSheetChange(state.characterSheet, action),
    classes: defaultClasses
  };
  return ret;
};

export default DungeonworldApp;
