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
