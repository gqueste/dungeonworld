import React, {Component} from 'react';
import ClassesContainer from '../containers/ClassesContainer';
import NamesContainer from '../containers/NamesContainer';
import TitlesContainer from '../containers/TitlesContainer';
import RacesContainer from '../containers/RacesContainer';
import LooksContainer from '../containers/LooksContainer';
import StatsContainer from '../containers/StatsContainer';
import AlignmentsContainer from '../containers/AlignmentsContainer';
import EquipmentsContainer from '../containers/EquipmentsContainer';
import BondsContainer from '../containers/BondsContainer';
import ActionsContainer from '../containers/ActionsContainer';

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
        <ActionsContainer />
        <AlignmentsContainer />
        <EquipmentsContainer />
        <BondsContainer />
      </div>
    )
  }
}

export default Steps;
