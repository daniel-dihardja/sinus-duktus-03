/**
 * Created by danieldihardja on 04.09.19.
 */
import {RenderEntity} from "./render-entity";

export class Wave {

  constructor(start, end, d1, d2, o, a) {
    this.data = [];
    let t = start;
    while(t < end) {
      this.data.push(new RenderEntity(t, Math.sin(t/d1) * Math.sin(t/d2) * a));
      t += o;
    }
  }

  mod(rect, cb) {
    this.data = cb(this.data);
    return this;
  }

  render(cb) {
    cb(this.data);
  }
}