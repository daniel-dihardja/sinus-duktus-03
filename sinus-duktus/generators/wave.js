/**
 * Created by danieldihardja on 04.09.19.
 */
import {RenderEntity} from "../render-entity";

export class Wave {

  constructor(params) {
    this.width = params.width || 1000;
    this.d1 = params.d1 || 0.1;
    this.d2 = params.d2 || 0.1;
    this.o = params.o || 0.5;
    this.a = params.a || 70;

    this.run();
  }

  run() {
    this.data = [];
    let t = 0;
    while(t < this.width) {
      this.data.push(new RenderEntity(t, Math.sin(t / this.d1) * Math.sin(t / this.d2) * this.a));
      t += this.o;
    }
    return this.data;
  }

  ui() {
    const e = document.createElement('div');
    return e;
  }

  mod(cb, rect) {
    this.data = cb([...this.data]);
    return this;
  }

  render(cb) {
    cb(this.data);
  }
}