import React, {Component} from 'react';

class Classes extends Component {

  render(){
    const classesList = this.props.classes.map((classe) =>
      <option key={classe.id} value={classe.id}>{classe.label}</option>
    );

    return(
      <div>
        <h3>Choisissez une classe</h3>
        <select name='class' className='form-control' onChange={e => this.props.onChange(e.target.value)}>
          {classesList}
        </select>
      </div>
    )
  }
}

export default Classes;
