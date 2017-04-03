import React, {Component} from 'react';

class Titles extends Component {

  render(){
    if (!this.props.titles || this.props.titles.length === 0) {
      return null;
    }

    const titlesList = this.props.titles.map((title) =>
      <option key={title.id} value={title.label}>{title.label}</option>
    );

    return(
      <div>
        <h3>Choisissez un titre</h3>
        <select name='name' className='form-control' onChange={e => this.props.onChange(e.target.value)}>
          {titlesList}
        </select>
      </div>
    )
  }
}

export default Titles;
