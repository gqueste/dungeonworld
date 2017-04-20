import React, {Component} from 'react';

class Alignments extends Component {

  render(){
    if (!this.props.alignments) {
      return null;
    }

    const alignmentsList = this.props.alignments.map((alignment, index) =>
      <option key={alignment.id} value={alignment.title}>{alignment.title} - {alignment.description}</option>
    );

    return(
      <div>
        <h3>Choisissez un alignement</h3>
        <select name='alignement' className='form-control' onChange={e => this.props.onChange(e.target.value)}>
          {alignmentsList}
        </select>
      </div>
    )
  }
}

export default Alignments;
