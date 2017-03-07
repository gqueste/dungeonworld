export const defaultCharacterSheet = {
  description: 'Coucou'
};

export const characterSheetChange = (characterSheet, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      //TODO dispatch the Action
      // creates redux for the Classes
      //
      characterSheet.currentDescription = 'ça a changé :p';
      return characterSheet;
    default:
      return characterSheet;
  }
}
