import { connect } from 'react-redux';
import CharacterSheet from '../components/CharacterSheet';


const mapStateToProps = (state) => {
  return {
    characterSheet: state.characterSheet
  }
};

const CharacterSheetContainer = connect(
  mapStateToProps
)(CharacterSheet);

export default CharacterSheetContainer;
