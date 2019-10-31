/**
 * Created by danieldihardja on 04.09.19.
 */
import {RenderEntity} from "../render-entity";

export class Wave {

  constructor() {
    this.width = 1000;
    this.d1 = 0.1;
    this.d2 = 0.1;
    this.o = 0.5;
    this.a = 70;

    this.onChange;
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
    const sliderD1 = this.slider('d1', 0.1, 1, e => console.log(e));
    const sliderD2 = this.slider('d2', 0.1, 100, e => console.log(e));
    const sliderO = this.slider('o', 0.1, 100, e => console.log(e));
    const a = this.slider('a', 1, 100, e => console.log(e));

    e.appendChild(sliderD1);
    e.appendChild(sliderD2);
    e.appendChild(sliderO);
    e.appendChild(a);

    return e;
  }

  slider(name, min, max, cb) {
    const e = document.createElement('input');
    e.setAttribute('type', 'range');
    e.setAttribute('min', min);
    e.setAttribute('max', max);
    e.addEventListener('input', e => cb(e));
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