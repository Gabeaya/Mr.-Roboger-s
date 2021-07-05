
function arrayForInput(number) {
  let newArray = [];
  let start = 0;
  while (start <= number) {
    newArray.push(start)
    start++;
  }
    return newArray;
}
function beepBoop(number) {
  if (number.trim().length === 0) {
    
  return 0;
}
  const beep = ["Beep!"];

  const boop = ["Boop!"];

  const phraseForThree = ["Won't you be my neighbor?"];
  for(let i = 0; i < number.length; i++) {
    if (number.includes(3)) {
      return phraseForThree;
    } else if (number.includes(2) {
      return boop;
    } else if(number.includes(1) {
      return beep;
    } else {
      return number;
    };
  }
}
beepBoop("3");