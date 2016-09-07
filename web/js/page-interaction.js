/**
 * Created by Jordan Cole Hunt on 2016/09/07.
 */

// variables that reference dom elements
var workingInput = document.getElementById("working-input"),
    addButton = document.getElementById("add-button");


addButton.addEventListener("click", function () {
    workingInput.value = "";
    var workingInputPlaceholderState = workingInput.attributes.placeholder.nodeValue;
    workingInput.attributes.placeholder.nodeValue = "Enter a value to add";
});
