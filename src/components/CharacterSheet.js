import React, {Component} from 'react';

class CharacterSheet extends Component {

  render(){
    const race = () => {
      if(this.props.characterSheet.race){
        return (<p>{this.props.characterSheet.race}</p>);
      }
    }
    return(
      <div>
        <p>{this.props.characterSheet.description}</p>
        <p>{this.props.characterSheet.name}</p>
        {race()}
      </div>
    )
  }
}

export default CharacterSheet;
