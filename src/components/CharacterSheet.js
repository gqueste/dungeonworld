import React, {Component} from 'react';

class CharacterSheet extends Component {

  render(){
    return(
      <div>
        <p>{this.props.characterSheet.description}</p>
        <p>{this.props.characterSheet.name}</p>
      </div>
    )
  }
}

export default CharacterSheet;
