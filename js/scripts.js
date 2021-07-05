
function beepBoop(number) {
  if (number.trim().length === 0) {

  return 0;
}
  const beep = ("Beep!");

  const boop = ("Boop!");

  const neighbor = ("Won't you be my neighbor?");
  let robotArray = [];

  for(let i = 0; i <= number; i++) {
    let string = i.toString();
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
    const numberInput = $("input#number").val();
    let response = beepBoop(numberInput).join(" ");

    $("#robogerReturn").text(response);
    $("#robogerReturn").show();
    
  })
})