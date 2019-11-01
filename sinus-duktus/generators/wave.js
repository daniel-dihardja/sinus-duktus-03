/**
 * Created by danieldihardja on 04.09.19.
 */
import {RenderEntity} from "../render-entity";

export class Wave {

  constructor() {
    this.width = 1000;
    this.d1 = 0.1;
    this.d2 = 0.1;
    this.o = .5;
    this.a = 70;

    this.onChange;
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
    const f = document.createElement('fieldset');
    f.setAttribute('class', 'panel-item');
    const l = document.createElement('legend');
    l.innerHTML = 'Generator - Wave';
    f.appendChild(l);

    const sliderD1 = this.slider('d1', 0.1, 1, .1, v => this.d1 = v);
    const sliderD2 = this.slider('d2', 0.1, 100, 1, v => this.d2 = v);
    const sliderO = this.slider('o', 0.1, 1, .1, v => this.o = v);
    const sliderA = this.slider('a', 1, 100, 1, v => this.a = v);

    f.appendChild(sliderD1);
    f.appendChild(sliderD2);
    f.appendChild(sliderO);
    f.appendChild(sliderA);

    return f;
  }

  slider(name, min, max, step, cb) {
    const e = document.createElement('input');
    e.setAttribute('type', 'range');
    e.setAttribute('min', min);
    e.setAttribute('max', max);
    e.setAttribute('step', step || 1);
    e.addEventListener('input', e => {
      cb(parseFloat(e.target.value));
      if(this.onChange) this.onChange();
    });
    return e;
  }


}