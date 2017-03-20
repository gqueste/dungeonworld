import { defaultClasses } from './reducers/Classes';

class Utils {
  static getClassFromId(id) {
    for (let classe of defaultClasses) {
      if (classe.id === id) {
        return classe;
      }
    }
    return false;
  }

  static getClasses() {
    return defaultClasses;
  }
}

export default Utils;
