function beepBoop(number) {
  if (number.trim().length === 0) {
    
  return 0;
}
  let robotArray = [];
  const beep = ["Beep!"];

  const boop = ["Boop!"];

  const neighbor = ["Won't you be my neighbor?"];

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
beepBoop("3", "4");