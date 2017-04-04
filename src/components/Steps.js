import React, {Component} from 'react';
import ClassesContainer from '../containers/ClassesContainer';
import NamesContainer from '../containers/NamesContainer';
import TitlesContainer from '../containers/TitlesContainer';
import RacesContainer from '../containers/RacesContainer';
import LooksContainer from '../containers/LooksContainer';
import StatsContainer from '../containers/StatsContainer';
import EquipmentsContainer from '../containers/EquipmentsContainer';

class Steps extends Component {
  render(){
    return(
      <div>
        <h2 className="text-center">Création de personnages</h2>
        <ClassesContainer />
        <RacesContainer />
        <NamesContainer />
        <TitlesContainer />
        <LooksContainer />
        <StatsContainer />
        <EquipmentsContainer />
      </div>
    )
  }
}

export default Steps;
