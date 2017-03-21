import React, {Component} from 'react';

class Looks extends Component {

  onSelect(choice, row) {
    choice.row = row;
    return this.props.onSelect.bind(this, choice);
  }

  render(){
    const choicesList = (look, row) => {
      return look.map((choice, index) => {
        return (
          <div className={'col-md-' + (12 / look.length)} key={index}>
            <button className={'btn btn-block ' + (choice.selected ? 'btn-primary' : 'btn-default')} onClick={this.onSelect(choice, row)}>{choice.label}</button>
          </div>
        )
      });
    };
    const looksList = this.props.looks.map((look, index) =>
      <div className='row' key={index}>
        {choicesList(look, index)}
      </div>
    );

    return(
      <div>
        <h3>Choisissez vos traits</h3>
        {looksList}
      </div>
    )
  }
}

export default Looks;
