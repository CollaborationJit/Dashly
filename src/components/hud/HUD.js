import React, { Component } from 'react';
import './hud.css';

class HUD extends Component {

	static maxPlayers;
	static numPlayers;
	static game;
    constructor(props) {
        super(props);
		
		this.maxPlayers = 4;
		this.numPlayers = 0;
		
		if(props.maxPlayers != null){
			this.maxPlayers = props.maxPlayers;
		}
		
		this.game = props.Game;
    }

    getUserHUDInput() {
        let returnVal = "";
        let currInput: string = this.game.state.currentWordInput;
        let currWord: string = this.game.state.currentWord;

        let progress = this.checkUserProgress(currInput, currWord);

        for (let key in progress) {
            let progObj = progress[key];
            returnVal += progObj["letter"];
            //returnVal += LetterCard(progObj["letter"], progObj["match"]);
        }
        
        //TODO: ask Daddy P for help
        return returnVal;
    }

    checkUserProgress(currInput: string, currWord: string) {
        let progressObj = {};
        let index = 0;
        while (index < currWord.length) {
            if (index < currInput.length) {
                progressObj[index] = { "match": (currWord[index] == currInput[index]), "letter": " "+ currInput[index]+" "};
            }
            else {
                progressObj[index] = { "match": "empty", "letter": " _ " }
            }
            index++;
        }

        return progressObj;
    }

    render() {
        return (
			<div className="hud secondary-area">
				<div className="content-container primary-text">
					<div className="challenge-area">
                        <div>Current Word:</div>
                        <div className="white-text">{this.game.state.currentWord}</div>
                        <br />
                        <div>{this.getUserHUDInput()} </div>
					</div>
					<br/>
					<div className="score-area">
						<div> Score: </div>
						<div> {this.game.state.player.currentScore} </div>
					</div>
					<br/>
					<div className="player-info">
						<div> Heylookabird </div>
						<div> Your Daily High Score: </div>
						<div> World Daily High Score: </div>
					</div>
				</div>
			</div>
        );
    }

}
/* TODO: ask Daddy P for help
const LetterCards = (letterCard) => (
    <span>
        {letterCard.map(letterObj => (
            <span className="">{letterObj.letter}</span>
        ))}
    </span>
);
*/



export default HUD;