function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

class Calculator {
    constructor () {
        this.working = 0;
    }
    add () {
        // input: any quantity of numbers
        try {
            // check whether all arguments are type number
            for (key in arguments) {
                if (typeof arguments[key] != "number") {
                    throw new UserException("invalid input type; expected type number, got " +
                    arguments[key] + " (type: " + typeof arguments[key] + ")");
                }
            }
            // if all arguments are type number execution continues
            for (key in arguments) {
                this.working += parseInt(arguments[key]);
            }
        }
        catch (e) {
            console.log(e.name, e.message);
        }
    }
    subtract () {
        // input: any quantity of numbers
        try {
            // check whether all arguments are type number
            for (key in arguments) {
                if (typeof arguments[key] != "number") {
                    throw new UserException("invalid input type; expected type number, got " +
                        arguments[key] + " (type: " + typeof arguments[key] + ")");
                }
            }
            // if all arguments are type number execution continues
            for (key in arguments) {
                this.working -= parseInt(arguments[key]);
            }
        }
        catch (e) {
            console.log(e.name, e.message);
        }
    }
    equals () {
        console.log(this.working);
        return this.working;
    }
    clearWorking () {
        this.working = 0;
    }
    multiply (number) {
        // input: a single number
        try {
            if (typeof number != "number") {
                throw new UserException("invalid type; expected number, got " + number + " (type: " + typeof number);
            }
            else {
                this.working *= number;
            }
        }
        catch (e) {
            console.log(e.name, e.message);
        }
    }
    divide (number) {
        try {
            if (typeof number != "number") {
                throw new UserException("invalid type; expected number, got " + number + " (type: " + typeof number);
            }
            else {
                this.working /= number;
            }
        }
        catch (e) {
            console.log(e.name, e.message);
        }
    }
    setWorking (number) {
        try {
            if (typeof number != "number") {
                throw new UserException("invalid type; expected number, got " + number + " (type: " + typeof number);
            }
            else {
                this.working = number;
            }
        }
        catch (e) {
            console.log(e.name, e.message);
        }
    }
}
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