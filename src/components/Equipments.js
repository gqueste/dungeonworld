import React, {Component} from 'react';

class Equipments extends Component {

  render(){
    if (!this.props.equipments) {
      return null;
    }

    const equipmentList = this.props.equipments.map((equipment, index) => {
      if(equipment.label) {
        return (
            <p key={`equipment${index}`}>{equipment.label}</p>
        )
      }

      const choicesList = equipment.choices.map((choice, index) => {
        return (
          <option key={`choice${index}`}>{choice.label}</option>
        )
      });

      return (
        <select key={`select${index}`} className='form-control'>
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
