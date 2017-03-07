import { characterSheetChange, defaultCharacterSheet } from './CharacterSheet';
import { defaultClasses } from './Classes';

const initialState = {
  characterSheet : defaultCharacterSheet,
  classes: defaultClasses
}; //default values


const DungeonworldApp = (state = initialState, action) => {
  return {
    characterSheet : characterSheetChange(state.characterSheet, action),
    classes: defaultClasses
  }
};

export default DungeonworldApp;
