var staticlist = [];

function addNumber() {
    const numberInput = document.getElementById("numberInput");
    const output = document.getElementById("output");
    const preview = document.getElementById("preview");

    const number = numberInput.value;

    try {
        staticlist.push(parseInt(number));
        output.textContent = "Number added to the array.";
        preview.textContent = staticlist ;
    } catch (error) {
        output.textContent = "Invalid input. Please enter a valid number.";
    }

    numberInput.value = "";
}

function complete() {
    staticlist.sort();
    output.textContent = "Final array: " + staticlist;
    return;
}