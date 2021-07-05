const beep = ["Beep!"];

const boop = ["Boop!"];

const neighbor = ["Won't you be my neighbor?"];
function beepBoop(number) {
  if (number.trim().length === 0) {

  return 0;
}
  let robotArray = [];

  for(let i = 0; i <= number; i++) {
    string = i.toString();
    console.log(string);
    if (string.includes(3)) {
      robotArray.push(neighbor);
    } else if (string.includes(2)) {
      robotArray.push(boop);
    } else if(string.includes(1)) {
      robotArray.push(beep);
    } else {
      robotArray.push(string);
    }
  }
  return robotArray.join(" ");
}
beepBoop("0");

$(document).ready(function() {
  $('form#userInput').submit(function(event) {
    event.preventDefault();
    let response = beepBoop(numberInput);
    response.forEach(function(element) {
      if(element === neighbor) {
        $("#robogerReturn").prepend("<li>Won't you be my neighbor?</li>")
      } else if (element === boop) {
        $("#robogerReturn").append("<li>Boop!</li>")
      } else if (element === beep) {
        $("#robogerReturn").append("<li>Beep!</li>")
      }    
    })
    $("#robogerReturn").show();
  })
})