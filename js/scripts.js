function beepBoop(number) {
  if (number.trim().length === 0) {
  return 0;
}
  const beep = ["Beep!"];

  const boop = ["Boop!"];

  const phraseForThree = ["Won't you be my neighbor?"];

  let userInputString = number.split("");
  let userInputNumber = parseInt(userInputString);

  for(let i = 0; i < userInputString.length; i++) {
    if(userInputNumber === 1) {
      return beep;
  } else if (userInputNumber === 2) {
    return boop;
    };
  }
}
beepBoop("2");