import Utils from '../Utils';

export const actionsChange = (actions, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return Utils.getDefaultActionsForClass(currentClass);
    case 'SELECT_ACTION_CHOICE':
      return actions.map((currentAction) => {
        if (currentAction.id === action.action.id) {
          for (let currentChoice of currentAction.choices) {
            if (!currentAction.multipleChoices) {
              currentChoice.selected = currentChoice.id === action.choice.id;
            } else if (currentChoice.id === action.choice.id) {
              currentChoice.selected = !currentChoice.selected
            }
          }
        }
        return currentAction;
      });
    default:
      return actions;
  }
}
