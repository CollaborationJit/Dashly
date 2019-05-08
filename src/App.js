import React, { Component } from 'react';
import Game from './Game';
import Player from './models/player/Player';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
            player: new Player("bs@email.com", 1000, "bird")
			
        };
	}

  render() {
    return (
      <div className="App">
        <header className="App-header primary-area">
                <Game Player={this.state.player} />
        </header>

      </div>
    );
  }
}

export default App;
