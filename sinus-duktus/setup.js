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

  run(filterRect) {
    const d = this.generator.run();
    return this.modulators.reduce((acc, m) => {
      if(m.active) return m.mod(acc);
      return acc;
    }, d);
  }
}