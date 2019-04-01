// Controller
var Q1 = new Vue({
    el:'#appendixTwoOne', 
    data: {
        game: new Game(),
        randomNum: 0,
        count: 0,
        txtInput: '',
        result: '',
        seen: true
    },
    methods: {
        compareNumbers: function () {
            this.randomNum = this.game.generateNumberByGame()
            console.log("User input is " + this.txtInput)
            console.log("Generated number is " + this.randomNum)
            this.result = this.game.compareNumbersQ1(this.txtInput, this.randomNum)
            this.count = this.game.getCountValue()
        }
    }
});