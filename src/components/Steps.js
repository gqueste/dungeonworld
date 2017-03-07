import React, {Component} from 'react';

class Steps extends Component {

  render(){
    const classesList = this.props.classes.map((classe) =>
      <option key={classe.id} value={classe.id}>{classe.label}</option>
    );

    return(
      <div>
        <h2 className="text-center">Création de personnages</h2>
        <div>
          <h3>Choisissez une classe</h3>
            <select name='class' className='form-control'>
              {classesList}
            </select>
        </div>
      </div>
    )
  }
}

export default Steps;
