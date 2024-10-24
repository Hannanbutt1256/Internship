function calc(digit1: number, x: '+' | '-' | '*' | '/', digit2: number): void {
  switch (x) {
    case "+":
      console.log(digit1 + digit2);
      break;
    case "-":
      console.log(digit1 - digit2);
      break;
    case "*":
      console.log(digit1 * digit2);
      break;
    case "/":
      console.log(digit1 / digit2);
      break;
    default:
      console.log("Invalid Input");
      break;
  }
}

calc(3, '+', 4);
