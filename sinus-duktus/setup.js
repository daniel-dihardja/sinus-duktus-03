export class Setup {
  constructor() {
    this.generator;
    this.modulators = [];
  }

  setGenerator(g) {
    this.generator = g;
    return this;
  }

  addModulator(m) {
    this.modulators.push(m);
    return this;
  }

  run() {
    const d = this.generator.run();
  }
}