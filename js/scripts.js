function beepBoop(number) {
  if (number.trim().length === 0) {
  return 0;
}
  const beep = ["Beep!"];

  const boop = ["Boop!"];

  const phraseForThree = ["Won't you be my neighbor?"];

  let userInputString = number.split("");
  
  let userInputNumber = parseInt(userInputString)

  for(let i = 0; i < userInputString.length; i++) {
    if(userInputString === 1)
    console.log(userInputString[1]);
    return beep;
  };
}
beepBoop("1");