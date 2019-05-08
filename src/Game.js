import React, { Component } from 'react';
import MatchedGame from './models/matchmaker/MatchedGame';
import WordBank from './models/bank/WordBank';
import Race from './components/race/Race';
import HUD from './components/hud/HUD';

class Game extends Component {

	constructor(props){
		super(props);

		this.state = { 
			width: window.innerWidth,
			height: window.innerHeight,
            player: props.Player,
            gameActive: true,
            activeInput: [],
            players: {},
            leaderScore: 0,
            leaderName: "",
            timeRemaining: 120,
            bank: new WordBank(),
            currentWord: "start",
            currentLevel: "1",
            currentWordInput: ""
        }
		
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.readKeyInput = this.readKeyInput.bind(this);
//        this.updatePlayerScore = this.updatePlayerScore.bind(this);

	}
	
	componentDidMount(){
		this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener('keyup', this.readKeyInput);

        let simGame = new MatchedGame(this.state.player, 0, 4);
        this.setState({ players: simGame.getPlayers() })

	}
	
	componentWillUnmount(){
        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener('keyup', this.readKeyInput);

	}
	
	updateWindowDimensions(){
		this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    updatePlayerScore(points, playerName) {
        let newPlayerScore = this.state.players;
        newPlayerScore[playerName].currentScore += points;
        this.setState({ players: newPlayerScore });

    }

    updateCurrentWord(word: string) {

        this.setState({ currentWordInput: word });
    }

    readKeyInput = (event) => {
        if (this.state.gameActive) {
            let startWord = this.state.currentWordInput;
            switch (event.key) {
                case "Backspace":
                    //start blank
                    let oldWord = "";

                    //if more than 1 letter, just remove the last letter
                    if (startWord.length > 1) { oldWord = startWord.substring(0, startWord.length - 1); }
                    this.updateCurrentWord(oldWord);
                    break;

                case "Enter":

                    break;

                default:
                    if (event.code.startsWith("Key")) {
                        let testWord = startWord + event.key;
                        if (this.validateInput(testWord, this.state.currentWord)) {
                            this.updateCurrentWord(testWord);
                        }
                    }
                    break;

            }
            
       }
    }

    validateInput(input, word) {
        

        let lastLetterIndex = input.length - 1;
        //check first letter in case
        if (lastLetterIndex < 0) { lastLetterIndex = 0; }

        let lastLetter = input[lastLetterIndex];

        let checkLetter = word[lastLetterIndex];

        if (lastLetter != checkLetter) {
            return false;
        }

        return true;
    }

    getHighScore() {
        let leader = this.state.player;
        for (let name in this.state.players) {
            let player = this.state.players[name];
            if (player.currentScore >= leader.currentScore) {
                leader = player;
            }
        }

        return leader.currentScore;
    }
	
  render() {
	  
      if (this.state.width > 1000) {
		return (
			<div className="game">
                <HUD className="hud" Game={this} />
                <Race className="race" HighScore={this.getHighScore()} />
			</div>

		);
	}else{
		return(
			<div className="game">
				<HUD className="hud" Game={this} />
			</div>
		);
	}
  }
}

export default Game;
