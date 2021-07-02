describe: beepBoop()
test: "It should reutrn an array with a 0 if the number 0 is inputted"
Expect(beepBoop(0).toEqual([0]);

test: "It should return an array with 'beep!' if the number one is inputted."
Expect(beepBoop(1).toEqual(['Beep!']);

Test: "It should return an array with 'boop!' if the number 2 is inputted."
Expect(beepBoop(2).toEqual(['Boop!']);

Text: "It should return an array with 'Won't you be my neighbor?"
Expect(beepBoop(3).toEqual(["Won't you be my neighbor?'])