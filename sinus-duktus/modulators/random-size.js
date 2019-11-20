/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderItem} from "../render-item";
import {panel, ckbox, slider} from "../ui-util";

export class RandomSize {
  constructor() {
    this.min = 1;
    this.max = 10;
    this.value = this.max;
    this.active = true;
    this.onChange;
  }

  mod(data) {
    return data.map(e => new RenderItem(e.x, e.y, Math.random() * this.value));
  }

  ui() {
    const con = panel('Random Size');
    const a = ckbox(this.active, v => {
      this.active = v;
      this.onChange();
    });

    con.appendChild(a);

    const max = slider(this.value, this.min, this.max, 1, v => {
      this.value = v;
      this.onChange();
    });

    con.appendChild(max);
    return con;
  }
}
