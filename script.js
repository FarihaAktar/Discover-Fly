// button handler
const firstClassPlusButton = document.getElementById("plus-btn-of-firstClass");
firstClassPlusButton.addEventListener('click', function () {

    ticketButtonHandler("firstClass", true);

})

const firstClassMinusButton = document.getElementById("minus-btn-of-firstClass");
firstClassMinusButton.addEventListener('click', function () {

    ticketButtonHandler("firstClass", false);
})

const economyClassPlusButton = document.getElementById("plus-btn-of-economy");
economyClassPlusButton.addEventListener('click', function () {

    ticketButtonHandler("economy", true)
})
const economyClassMinusButton = document.getElementById("minus-btn-of-economy");
economyClassMinusButton.addEventListener('click', function () {

    ticketButtonHandler("economy", false);
})
// booking confirm
const booking = document.getElementById("booking");
booking.addEventListener('click', function () {
    const firstClassInput = getInputValue("firstClassTicket");
    const economyClassInput = getInputValue("economyTicket");
    if (firstClassInput == 0 && economyClassInput == 0) {
        alert("Fill out all the form!")
    }
    else {
        if (firstClassInput > 0 && economyClassInput == 0) {
            alert("You have selected" + " " + firstClassInput + " " + "tickets of first class")
        }
        else if (firstClassInput > 0 && economyClassInput > 0) {
            alert("You have selected  " + firstClassInput + " tickets of first class and " + economyClassInput + " tickets of economy.")
        }
        confirm("Do want to book this Flights?")
    }
})

// definition of functions
function getInputValue(id) {
    const inputValue = document.getElementById(id);
    const inputNumber = parseInt(inputValue.value);
    return inputNumber;
}

function ticketButtonHandler(flights, isIncrease) {
    const ticketNumber = getInputValue(flights + "Ticket");
    let ticketCount = ticketNumber;
    if (isIncrease == true) {
        ticketCount = ticketNumber + 1;
    }
    if (isIncrease == false && ticketNumber > 0) {
        ticketCount = ticketNumber - 1;
    }
    document.getElementById(flights + "Ticket").value = ticketCount;

    totalCalculation();
}

function totalCalculation() {
    const firstClass = getInputValue("firstClassTicket");
    const economyClass = getInputValue("economyTicket");
    const subtotal = firstClass * 150 + economyClass * 100;
    document.getElementById("subtotal").innerHTML = subtotal;
    const vat = Math.round(subtotal * 0.1);
    document.getElementById("vat").innerHTML = vat;
    const totalValue = subtotal + vat;
    document.getElementById("totalValue").innerHTML = totalValue;

}