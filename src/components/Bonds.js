import React, {Component} from 'react';

class Bonds extends Component {

  render(){
    const bondsList = this.props.bonds.map((bond) => {
        return (
          <div key={bond.label} className="checkbox">
            <label>
              <input type="checkbox" value={bond.label} checked={bond.selected} onChange={e => this.props.onSelect(bond)}/> {bond.label}
            </label>
          </div>
        );
      }
    );

    return(
      <div>
        <h3>Choisissez un ou plusieurs Liens</h3>
        {bondsList}
      </div>
    )
  }
}

export default Bonds;
