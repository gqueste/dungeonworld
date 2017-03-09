import React, {Component} from 'react';
import ClassesContainer from '../containers/ClassesContainer';

class Steps extends Component {
  render(){
    return(
      <div>
        <h2 className="text-center">Création de personnages</h2>
        <ClassesContainer />
      </div>
    )
  }
}

export default Steps;
