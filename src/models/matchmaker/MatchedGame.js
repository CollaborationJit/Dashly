import Player from '.././player/Player'
export default class MatchedGame {

    static gamePlayers = {};
    constructor(localPlayer: Player, nPlayers: number, nCpu: number) {
        this.gamePlayers = {};
        let i = 0;
        while (i < nCpu) {
            let randomName = this.getRandomName();
            let cpu = new Player(randomName+"@mail.com", this.getRandomNumber(200), randomName)
            this.gamePlayers[randomName] = cpu;

            i++;
        }

    }

    getPlayers = () => {
        return this.gamePlayers;
    }

    getRandomNumber = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    getRandomName = () => {
        let nameArray = [
            "Jutta Pigg",
            "Yulanda Stronach",
            "Francesco Haliburton",
            "Minna Emigh",
            "Daina Klenke",
            "Joseph Ken-Obi",
            "Lorem Ip",
            "Sum Deenim",
            "Mary Ricardo",
            "Blake Blakenson",
            "Kahlmi Beegdatty",
            "Sophia Kingsoft"
        ];

        return nameArray[this.getRandomNumber(nameArray.length-1)];
    }
}