import React, {Component} from 'react';

class CharacterSheet extends Component {

  render(){
    const race = () => {
      if(this.props.characterSheet.race){
        return (<p>{this.props.characterSheet.race}</p>);
      }
    };
    const looks = () => {
      const looksList = this.props.characterSheet.looks.map((look) => {
        return (
          <li key={look.id}>{look.label}</li>
        )
      });

      if(this.props.characterSheet.looks.length > 0){
        return (
          <div>
            <p>Traits</p>
            <ul>
              {looksList}
            </ul>
          </div>
        );
      }
    };
    const stats = () => {
      const statsList = Object.keys(this.props.characterSheet.stats).map((stat) => {
        const currentStat = this.props.characterSheet.stats[stat];
        return (
          <li key={currentStat.id}>{currentStat.label}{currentStat.value ? ' : ' + currentStat.value : ''}</li>
        )
      });
      return (
        <div>
          <p>Stats</p>
          <ul>
            {statsList}
          </ul>
        </div>
      );
    }
    return(
      <div>
        <p>{this.props.characterSheet.description}</p>
        <p>{this.props.characterSheet.name}</p>
        {race()}
        {looks()}
        {stats()}
      </div>
    )
  }
}

export default CharacterSheet;
