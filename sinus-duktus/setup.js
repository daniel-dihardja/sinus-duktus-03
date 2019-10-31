export class Setup {
  constructor() {
    this.generator;
    this.modulators = [];
  }

  addGenerator(g) {
    this.generator = g;
  }

  addModulator(m) {
    this.modulators.push(m);
  }

  run() {
    const d = this.generator.run();
  }
}