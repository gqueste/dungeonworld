import React, {Component} from 'react';

class Actions extends Component {

  render(){
    const actionsList = this.props.actions.map((action) => {
      if (action.choices) {
        const actionChoices = action.choices.map((choice) =>
          <div key={choice.id} className="radio">
            <label>
              <input type="radio" value={choice.id} checked={choice.selected} onChange={e => this.props.onSelectChoice(action, choice)}/><strong>{choice.title}</strong>{choice.title ? ' : ': ''}{choice.description}
            </label>
          </div>
        );
        return (
          <li key={action.id}><strong>{action.title}{action.title ? ' : ': ''}</strong> {action.description}
            {actionChoices}
          </li>
        );
      } else {
        return (
          <li key={action.id}><strong>{action.title}</strong> : {action.description}</li>
        );
      }
    }
    );

    return(
      <div>
        <h3>Vos actions</h3>
        <ul>
          {actionsList}
        </ul>
      </div>
    )
  }
}

export default Actions;
