import Utils from '../Utils';

export const alignmentsChange = (alignments, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      return Utils.getClassFromId(action.id).alignments;
    default:
      return alignments;
  }
}
