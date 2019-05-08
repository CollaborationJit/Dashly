export default class WordBank {

    static wordFactory = {};
    static bank = [];
    constructor(bank: Array<string>) {
        if (bank != null && bank.length > 50) {
            this.bank = bank;
        } else {
            this.bank = [
                "dog",
                "cat",
                "mad",
                "ore",
                "sad",
                "main",
                "fore",
                "four",
                "dare",
                "lair",
                "pear",
                "pile",
                "flea",
                "crime",
                "robin",
                "static",
                "manga",
                "utopia",
                "light",
                "saber",
                "opera",
                "sound",
                "health",
                "market",
                "mount",
                "leave",
                "leaves",
                "pieced",
                "lament",
                "foreign",
                "lively",
                "basically",
                "crystal",
                "express",
                "essentially",
                "moments",
                "lillac",
                "skiing",
                "airplane",
                "yacht",
                "gingerly",
                "masculine",
                "feminine",
                "mountain",
                "severance",
                "retirement"
            ];
            //generate different levels
            this.generateLevels();
        }

    }

    getWord = (level) => {
        return this.wordFactory[level][this.getRandomNumber(this.wordFactory[level].length - 1)];
    }

    getRandomNumber = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    generateLevels() {
        this.wordFactory = {};
        for (let index in this.bank) {
            let word = this.bank[index];
            let wordLength = word.length;
            //if this level is null, go ahead and create an array for it
            if (this.wordFactory[wordLength] == null) {
                this.wordFactory[wordLength] = [word];
            } else {
                let levelArray = this.wordFactory[wordLength];
                if (!levelArray.includes(word)) {
                    levelArray = [...levelArray, word];
                    this.wordFactory[wordLength] = levelArray;
                }

            }
        }
    }
}