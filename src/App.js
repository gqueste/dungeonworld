import React, { Component } from 'react';
import StepsContainer from './containers/StepsContainer';
import CharacterSheetContainer from './containers/CharacterSheetContainer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 className='text-center'>Dungeon World</h1>
        <div className='col-md-6'>
          <StepsContainer />
        </div>
        <div className='col-md-6'>
          <CharacterSheetContainer />
        </div>
      </div>
    )
  }
}

export default App;
