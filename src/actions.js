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

export const onTitleChange = (title) => {
  return {
    type: 'CHANGE_TITLE',
    title
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

export const onStatsSelect = (stat, value) => {
  return {
    type: 'CHANGE_STATS',
    stat,
    value
  }
}

export const onResetStats = () => {
  return {
    type: 'RESET_STATS'
  }
}

export const onAlignmentChange = (alignment) => {
  return {
    type: 'CHANGE_ALIGNMENT',
    alignment
  }
};

export const onEquipmentSelect = (equipment) => {
  return {
    type: 'SELECT_EQUIPMENT',
    equipment
  }
}

export const onBondSelect = (bond) => {
  return {
    type: 'SELECT_BOND',
    bond
  }
}
