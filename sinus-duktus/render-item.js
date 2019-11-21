/**
 * Created by danieldihardja on 04.09.19.
 */

export class RenderItem {
  constructor(params) {
    this.x = params.x || 0;
    this.y = params.y || 0;
    this.size = params.size || 4;
    this.fill = 'white';
    this.stroke = 'black'
  }
}
