
function beepBoop(number) {
  if (number.trim().length === 0) { //If inputted number, after being stripped of whitespace, is equal to zero it will return zero

  return 0;
}
  const beep = ("Beep!");

  const boop = ("Boop!");

  const neighbor = ("Won't you be my neighbor?");
  let robotArray = [];

  for(let i = 0; i <= number; i++) { //We start our loop at an index of zero, we will iterate this loop through each if,else if, or else statement until the index is equal to the inputted number
    let string = i.toString(); // All iterations will become strings
    if (string.includes(3)) {
      robotArray.push(neighbor);
    } else if (string.includes(2)) {
      robotArray.push(boop);
    } else if(string.includes(1)) {
      robotArray.push(beep);
    } else {
      robotArray.push(string + ".");
    }
  }
  return robotArray;

}

$(document).ready(function() {
  $('form#userInput').submit(function(event) {
    event.preventDefault();
    const numberInput = $("input#number").val(); // Variable assigned to user input
    let response = beepBoop(numberInput).join(" "); // Variable assigned to the result of our joined function that passes the user inputs as an argument
    $("ul").text(response); // The translation of our jQuery result into our html
    $("#robogerReturn").show(); //Show our once hidden roboger result field
    
  })
})