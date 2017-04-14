import Utils from '../Utils';

export const bondsChange = (bonds, action) => {
  switch (action.type) {
    case 'CHANGE_CLASS':
      return Utils.getDefaultBondsForClass(Utils.getClassFromId(action.id));
    case 'SELECT_BOND':
      return Utils.selectBond(bonds, action.bond);
    default:
      return bonds;
  }
}
