import React, {Component} from 'react';

class CharacterSheet extends Component {

  render(){
    const title = () => {
      if(this.props.characterSheet.title) {
        return (<span>{this.props.characterSheet.title}</span>)
      }
    };
    const looks = () => {
      const looksList = this.props.characterSheet.looks.map((look) => {
        return (
          <li key={look.id}>{look.label}</li>
        )
      });

      if(this.props.characterSheet.looks.length > 0){
        return (
          <div>
            <ul>
              {looksList}
            </ul>
          </div>
        );
      }
    };
    const stats = () => {
      const statsList = Object.keys(this.props.characterSheet.stats).map((stat) => {
        const currentStat = this.props.characterSheet.stats[stat];
        return (
          <div className='col-xs-4' key={currentStat.id}>
            <p><strong>{currentStat.label}</strong></p>
            <p>{currentStat.value}</p>
            <p>{currentStat.modifier}</p>
          </div>
        )
      });
      return (
        <div>
          <div className='row text-center'>
            {statsList}
          </div>
        </div>
      );
    };
    const equipments = () => {
      const equipmentsList = this.props.characterSheet.equipments.map((equipment, index) => {
        return (
          <li key={`equipment${index}`}>{equipment.label}</li>
        )
      });

      if(this.props.characterSheet.equipments.length > 0){
        return (
          <div>
            <ul>
              {equipmentsList}
            </ul>
          </div>
        );
      }
    };
    const bonds = () => {
      const bondsList = this.props.characterSheet.bonds.map((bond) => {
        if (bond.selected) {
          return (
            <div key={bond.label}>{bond.label}</div>
          );
        }
      });

      return (
        <div>
          <p><strong>Liens</strong></p>
            {bondsList}
        </div>
      );
    };

    const raceStartingAction = () => {
      if (this.props.characterSheet.raceStartingAction) {
        return (
          <div>
            <div>
              <strong>{this.props.characterSheet.raceStartingAction.title}</strong>
            </div>
            <div>
              {this.props.characterSheet.raceStartingAction.description}
            </div>
          </div>
        )
      }
    };

    const actions = () => {
      //TODO need multiple select possible (Barbare / startingActions / Appétits Herculéens)
      const startingActions = this.props.characterSheet.actions.map((action) => {
        if (action.choices) {
          const actionChoices = action.choices.map((choice) => {
            if (choice.selected && action.title) {
              return (
                <li key={choice.id}>
                  {(choice.title || choice.description)}
                  <p>{(choice.title && choice.description) ? choice.description : null}</p>
                </li>
              );
            } else if (choice.selected && !action.title) {
              return (
                <div key={choice.id}>
                  <div><strong>{(choice.title || choice.description)}</strong></div>
                  <div>{(choice.title && choice.description) ? choice.description : null}</div>
                </div>
              )
            }
            return null;
          });
          return (
            <div key={action.id}>
              <div><strong>{action.title}</strong></div>
              <div dangerouslySetInnerHTML={{__html: (action.title) ? action.description : null}}></div>
              <div>
                {actionChoices}
              </div>
            </div>
          );
        } else {
          return (
            <div key={action.id}>
              <div><strong>{action.title}</strong></div>
              <div dangerouslySetInnerHTML={{__html: action.description}}></div>
            </div>
          );
        }
      });
      console.log(this.props.characterSheet.actions);

      return (
        <div>
          <div><strong>ACTIONS</strong></div>
            {startingActions}
        </div>
      );
    };
    return(
      <div>
        <div className="row align-container">
          <div className="col-md-1">
            <h1 className="vertical-text">{this.props.characterSheet.label}</h1>
          </div>
          <div className="col-md-11">
            <div className="row characterSheet-row">
              <small className="italic-font" dangerouslySetInnerHTML={{__html: this.props.characterSheet.description}}></small>
            </div>
            <div className="row characterSheet-row">
              <div className="col-xs-8">
                <strong>NAME</strong> {this.props.characterSheet.name} {title()}
              </div>
              <div className="col-xs-2">
                <strong>LEVEL</strong>
              </div>
              <div className="col-xs-2">
                <strong>XP</strong>
              </div>
            </div>
            <div className="row characterSheet-row">
              <div className="col-xs-4">
                <div><strong>LOOK</strong></div>
                {looks()}
              </div>
              <div className="col-xs-4">
                <div><strong>ARMOR</strong></div>
                <div><strong>HIT POINTS</strong> {this.props.characterSheet.baseHP}</div>
                <div><strong>DAMAGE</strong> d{this.props.characterSheet.damage}</div>
              </div>
              <div className="col-xs-4">
                <div><strong>ALIGNEMENT</strong></div>
                <div>{this.props.characterSheet.alignment.title}</div>
                <div><small>{this.props.characterSheet.alignment.description}</small></div>
              </div>
            </div>
            <div className="row characterSheet-row">
              <div className="col-xs-8">
                {stats()}
              </div>
              <div className="col-xs-4">
                {bonds()}
              </div>
            </div>
            <div className="row characterSheet-row">
              <div className="col-xs-8">
                {actions()}
              </div>
              <div className="col-xs-4">
                <div><strong>RACE</strong></div>
                {raceStartingAction()}
              </div>
            </div>
            <div className="row characterSheet-row">
              <div><strong>EQUIPEMENTS</strong></div>
              <p>Max Weight: {this.props.characterSheet.maxWeight}</p>
              {equipments()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterSheet;
