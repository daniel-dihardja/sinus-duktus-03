/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderItem} from "../render-item";

export class MSize {
  constructor() {
    this.s = 2;
    this.min = 1;
  }

  mod(data) {
    let s = this.min;
    let t = 0;
    return data.map(e => {

      return new RenderItem(e.x, e.y, s);
    });
  }
}