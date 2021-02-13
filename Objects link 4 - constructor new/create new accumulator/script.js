function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += Number(prompt("enter a number to add"));
  };
}
