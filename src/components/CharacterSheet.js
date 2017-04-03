import React, {Component} from 'react';

class CharacterSheet extends Component {

  render(){
    const race = () => {
      if(this.props.characterSheet.race){
        return (<p>{this.props.characterSheet.race}</p>);
      }
    };
    const title = () => {
      if(this.props.characterSheet.title) {
        return (<p>{this.props.characterSheet.title}</p>)
      }
    }
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
          <div className='col-xs-2' key={currentStat.id}>
            <p><strong>{currentStat.label}</strong></p>
            <p>{currentStat.value}</p>
            <p>{currentStat.modifier}</p>
          </div>
        )
      });
      return (
        <div>
          <p>Stats</p>
          <div className='row text-center'>
            {statsList}
          </div>
        </div>
      );
    }
    return(
      <div>
        <p>{this.props.characterSheet.description}</p>
        {race()}
        <p>{this.props.characterSheet.name}</p>
        {title()}
        {looks()}
        {stats()}
      </div>
    )
  }
}

export default CharacterSheet;
