import React, {Component} from 'react';

class Names extends Component {

  render(){
    const namesList = this.props.names.map((name) =>
      <option key={name.id} value={name.label}>{name.label}</option>
    );

    return(
      <div>
        <h3>Choisissez un nom</h3>
        <select name='name' className='form-control' onChange={e => this.props.onChange(e.target.value)}>
          {namesList}
        </select>
      </div>
    )
  }
}

export default Names;
