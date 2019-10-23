/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderEntity} from "../render-entity";

export class RandomSize {
  constructor() {
    this.min = 1;
    this.max = 5;
  }
  mod(data) {
    return data.map(e => new RenderEntity(e.x, e.y, Math.random() * this.max));
  }
}
