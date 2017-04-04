import Utils from '../Utils';

export const equipmentsChange = (equipments, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      return Utils.getClassFromId(action.id).equipments;
    default:
      return equipments;
  }
}
