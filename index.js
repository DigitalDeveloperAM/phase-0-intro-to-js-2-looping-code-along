// Code your solutions in this file

function writeCards(namesArray, eventName) {
    const messages = [];
    for (let i = 0; i < namesArray.length; i++) {
        messages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}

//const namesArray = ["Charlie", "Samip", "Ali"];
//const eventName = "birthday";

function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber -= 1;
    }

}