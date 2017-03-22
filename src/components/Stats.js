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
        <div className='row' key={currentStat.id}>
          <div className='col-xs-2'>
            {currentStat.label}
          </div>
          <div className='col-xs-10'>
            {choicesList(currentStat)}
          </div>
        </div>
      );
    });

    return(
      <div>
        <h3>Choisissez vos statistiques</h3>
        {statsList}
      </div>
    )
  }
}

export default Stats;
