import React, {Component} from 'react';
import ClassesContainer from '../containers/ClassesContainer';
import NamesContainer from '../containers/NamesContainer';
import RacesContainer from '../containers/RacesContainer';

class Steps extends Component {
  render(){
    return(
      <div>
        <h2 className="text-center">Création de personnages</h2>
        <ClassesContainer />
        <NamesContainer />
        <RacesContainer />
      </div>
    )
  }
}

export default Steps;
