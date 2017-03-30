import React, { Component } from 'react';
import Steps from './components/Steps';
import CharacterSheetContainer from './containers/CharacterSheetContainer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1 className='text-center'>Dungeon World</h1>
        <div className='col-xs-6'>
          <Steps />
        </div>
        <div className='col-xs-6'>
          <CharacterSheetContainer />
        </div>
      </div>
    )
  }
}

export default App;
