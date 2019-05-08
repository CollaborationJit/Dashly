import React, { Component } from 'react';
import './race.css';

class Race extends Component {
    static currentWindowStyle;
    static highscore;

    constructor(props) {
        super(props);
        this.highscore = props.HighScore;
    }
	
    componentDidMount() {
        this.updateRaceDimensions();
        window.addEventListener('resize', this.updateRaceDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateRaceDimensions);

    }
	
	updateRaceDimensions(){
		const winWidth = window.innerWidth - 400;
		this.currentWindowStyle = {
			width: winWidth
		};
    }

    render() {
        return (
			<div className="race" style={this.currentWindowStyle}>
				<div className="content-container">
                    <div className="primary-text">The high score is {this.highscore}</div>
				</div>
			</div>
        );
    }
}

export default Race;