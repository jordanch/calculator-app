function Calculator() {
    // constructor init values
    this.working = 0;
}

function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

Calculator.prototype = {
    constructor: Calculator,
    add: function (number) {
        this.working += number;
    },

    subtract: function (number) {
        this.working -= number;
    },

    equals: function () {
        return this.working;
    },

    clearWorking: function () {
        this.working = 0;
    },

    multiply: function (number) {
        this.working *= number;
    },

    divide: function (number) {
        this.working /= number;
    },

    setWorking: function (number) {
        this.working = number;
    },

    // this function is called before each calculation operation to validate the input datatype
    validateInput: function (inputNumberOrText) {
        // check whether all arguments are type number
        console.log(typeof inputNumberOrText === "string");
        console.log(typeof parseInt(inputNumberOrText));
        if (typeof inputNumberOrText === "string" && parseInt(inputNumberOrText) ===  ) {
                console.log("invalid input type; expected type number, got " +
                    arguments[key] + " (type: " + typeof arguments[key] + ")");
                throw new UserException("Please enter a valid input");
        }
        console.log("Input has been validated. Most likely a number");
    }
};



var calculator1 = new Calculator();

window.activeCalculator = calculator1;

// calculator1.add(1, 2, 3);
// calculator1.subtract(10);
// // calculator1.clearWorking();
// calculator1.equals();
// calculator1.add(44);
// calculator1.multiply(2);
// calculator1.equals();
// calculator1.divide(2);
// calculator1.equals();