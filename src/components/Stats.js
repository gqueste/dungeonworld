import React, {Component} from 'react';

class Stats extends Component {

  onSelect(currentStat, value) {
    return this.props.onSelect(currentStat, value);
  }

  render(){
    const caracList = [16, 15, 13, 12, 9, 8];
    const choicesList = (currentStat) => caracList.map(carac =>
      <div key={carac} className='col-xs-2'>
        <button className={'btn btn-block ' + (currentStat.value === carac ? 'btn-primary' : 'btn-default')} onClick={() => {this.onSelect(currentStat, carac)}}>{carac}</button>
      </div>
    );
    const statsList = Object.keys(this.props.stats).map((stat) => {
      const currentStat = this.props.stats[stat];
      return (
        <li className={'form-group list-group-item ' + (currentStat.value ? '' : 'list-group-item-danger')} key={currentStat.id}>
            <label className='col-xs-2 control-label'>
              {currentStat.label}
            </label>
            <div className='col-xs-10'>
              {choicesList(currentStat)}
            </div>
        </li>
      );
    });

    return(
      <div>
        <div>
          <h3>Choisissez vos statistiques <a href='javascript:void(0)' onClick={this.props.onResetStats}><i className="fa fa-undo text-right" aria-hidden="true"></i></a></h3>
        </div>
        <div className='form-horizontal'>
          <ul className='list-group'>
            {statsList}
          </ul>
        </div>
      </div>
    )
  }
}

export default Stats;
