import React, {Component} from 'react';
import ClassesContainer from '../containers/ClassesContainer';
import NamesContainer from '../containers/NamesContainer';
import RacesContainer from '../containers/RacesContainer';
import LooksContainer from '../containers/LooksContainer';
import StatsContainer from '../containers/StatsContainer';

class Steps extends Component {
  render(){
    return(
      <div>
        <h2 className="text-center">Création de personnages</h2>
        <ClassesContainer />
        <RacesContainer />
        <NamesContainer />
        <LooksContainer />
        <StatsContainer />
      </div>
    )
  }
}

export default Steps;
