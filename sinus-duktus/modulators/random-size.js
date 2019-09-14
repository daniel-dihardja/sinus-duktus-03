/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderEntity} from "../render-entity";

export class RandomSize {
  mod(data) {
    return data.map(e => new RenderEntity(e.x, e.y, Math.random() * 10));
  }
}