/**
 * Created by Jordan Cole Hunt on 2016/09/07.
 */

// global state
var currentOperation = "ce";
// TODO: ce start state

// variables that reference dom elements
var workingInput = document.getElementById("working-input"),
    addButton = document.getElementById("add-button"),
    equalsButton = document.getElementById("equals-button"),
    buttonsDiv = document.getElementById("buttons");


buttonsDiv.addEventListener("click", function(e) {
    // this element handles click events that bubble up from any of the buttons and changes visual state
    // first set the calculator's working number before changing visual state

    // change visual state and execute operations based on whichever button is clicked
    switch (e.target.id) {
        case "add-button":
            // set the calculator's working value
            performCalculatorOperation(window.activeCalculator, "set");
            // set current working operation
            currentOperation = "add";
            workingInput.value = "";
            workingInput.attributes.placeholder.nodeValue = "Enter value to add";
            break;
        case "equals-button":
            // equal button executes the previous operation
            performCalculatorOperation(window.activeCalculator, currentOperation);
            workingInput.value = performCalculatorOperation(window.activeCalculator, "equals");
            currentOperation = "ce";
            break;
    }
});


// hoisted functions
function performCalculatorOperation (calc, operation) {
    switch (operation) {
        case "add":
            calc.add(parseInt(workingInput.value));
            break;
        case "subtract":
            calc.add(parseInt(workingInput.value));
            break;
        case "divide":
            calc.add(parseInt(workingInput.value));
            break;
        case "multiply":
            calc.add(parseInt(workingInput.value));
            break;
        case "set":
            calc.setWorking(parseInt(workingInput.value));
            break;
        case "equals":
            return calc.equals();
            break;
    }

}

