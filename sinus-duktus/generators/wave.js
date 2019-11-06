/**
 * Created by danieldihardja on 04.09.19.
 */
import {RenderItem} from "../render-item";
import {panel, slider} from "../ui-util";

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
      this.data.push(new RenderItem(t, Math.sin(t / this.d1) * Math.sin(t / this.d2) * this.a));
      t += this.o;
    }
    return this.data;
  }

  ui() {

    const f = panel('Wave');

    const sliderD1 = slider(.5, 0.1, 1, .1, v => {
      this.d1 = v;
      this.onChange();
    });
    const sliderD2 = slider(1, 0.1, 100, 1, v => {
      this.d2 = v;
      this.onChange();
    });
    const sliderO = slider(.5, 0.1, 1, .1, v => {
      this.o = v;
      this.onChange();
    });
    const sliderA = slider(70, 1, 100, 1, v => {
      this.a = v;
      this.onChange();
    });

    f.appendChild(sliderD1);
    f.appendChild(sliderD2);
    f.appendChild(sliderO);
    f.appendChild(sliderA);

    return f;
  }
}