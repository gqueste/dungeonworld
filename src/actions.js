export const onClassChange = (id) => {
  return {
    type: 'CHANGE_CLASS',
    id
  }
};

export const onNameChange = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

export const onRaceChange = (race) => {
  return {
    type: 'CHANGE_RACE',
    race
  }
};

export const onLookSelect = (look, row) => {
  return {
    type: 'SELECT_LOOK',
    look,
    row
  }
};
