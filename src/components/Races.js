import React, {Component} from 'react';

class Races extends Component {

  render(){
    if (!this.props.races) {
      return null;
    }

    const racesList = this.props.races.map((race) =>
      <option key={race.id} value={race.label}>{race.label}</option>
    );

    return(
      <div>
        <h3>Choisissez une race</h3>
        <select name='race' className='form-control' onChange={e => this.props.onChange(e.target.value)}>
          {racesList}
        </select>
      </div>
    )
  }
}

export default Races;
