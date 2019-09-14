/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderEntity} from "../render-entity";

export class MSize {
  constructor() {
    this.s = 2;
  }

  mod(data) {
    return data.map(e => new RenderEntity(e.x, e.y, this.s));
  }
}