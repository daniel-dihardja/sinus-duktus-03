/**
 * Created by danieldihardja on 04.09.19.
 */

export class RenderEntity {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size || 4;
  }
}

export class Rect {
  constructor() {
    this.x=0;
    this.y=0;
    this.width=100;
    this.height=40;
  }
}
