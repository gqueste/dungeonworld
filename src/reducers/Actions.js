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
            currentChoice.selected = currentChoice.id === action.choice.id;
          }
        }
        return currentAction;
      });
    default:
      return actions;
  }
}
