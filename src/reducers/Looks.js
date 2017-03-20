import Utils from '../Utils';

export const looksChange = (looks, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      const currentClass = Utils.getClassFromId(action.id);
      return currentClass.looks;
    case 'SELECT_LOOK':
      return updateLooks(looks, action.look);
    default:
      return looks;
  }
}

function updateLooks(looks, look) {
  const ret = [];

  looks.forEach((currentLook) => {
    const choices = [];
    currentLook.forEach((choice) => {
      if(currentLook.find((item) => item.id === look.id)){ // if selected look is in this section
        if (look.id === choice.id) {
          choice.selected = !choice.selected;
        } else {
          choice.selected = false;
        }
      }
      choices.push(choice);
    });
    ret.push(choices);
  });

  return ret;
}
