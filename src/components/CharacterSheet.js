import React, {Component} from 'react';

class CharacterSheet extends Component {

  render(){
    return(
      <p>{this.props.characterSheet.description}</p>
    )
  }
}

export default CharacterSheet;
