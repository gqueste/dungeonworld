import React, {Component} from 'react';

class Equipments extends Component {

  render(){
    if (!this.props.equipments) {
      return null;
    }

    const equipmentList = this.props.equipments.map((equipment, equipmentIndex) => {
      if(equipment.label) {
        return (
            <p key={`equipment${equipmentIndex}`}>{equipment.label}</p>
        )
      }

      const choicesList = equipment.choices.map((choice, index) => {
        return (
          <option key={choice.id} value={equipmentIndex + ',' + choice.id}>{choice.label}</option>
        )
      });

      return (
        <select key={`select${equipmentIndex}`} className='form-control' onChange={e => this.props.onSelect(e.target.value)}>
          {choicesList}
        </select>
      )

    });

    return(
      <div>
        <h3>Equipements</h3>
        {equipmentList}
      </div>
    )
  }
}

export default Equipments;
