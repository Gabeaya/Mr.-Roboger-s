
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
  let userInput = parseInt(number);

  for(let i = 0; i < userInput.length; i++) {
    if (userInput[0] === 3) {
      if(userInput !== 2) {
      return phraseForThree;
      } else if (userInput ===2)
      return phraseForThree;
    } else if (userInput[0] === 2) {
        if(userInput[1] !== 1) {
        return boop;
        } else if(userInput[1] === 1) {
        return boop;
      };
    } else if(userInput[0] === 1) {
      if(userInput[1] !== 3) {
      return beep;
      } else if(userInput[1] === 3) {
        return phraseForThree;
      };
    } else {
      return userInput
    };
  }
}
beepBoop("3");