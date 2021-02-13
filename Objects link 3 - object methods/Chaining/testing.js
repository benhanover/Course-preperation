let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

ladder.up().down().up().showStep(); // 1

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
