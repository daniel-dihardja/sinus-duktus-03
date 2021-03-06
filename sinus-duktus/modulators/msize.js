/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderItem} from "../render-item";
import {panel, ckbox, slider} from "../ui-util";

export class MSize {
  constructor() {
    this.active = true;
    this.s = 2;
    this.min = 1;
    this.max = 20;
    this.value = 5;
    this.reverse = true;
  }

  mod(data, config) {
    const h = config.height / 2;
    return data.map(e => {
      const ey = e.y < 0 ? e.y * -1 : e.y;
      let d =  ey / h;
      if (this.reverse) d = 1 - d;
      const s = d * this.value;
      // return new RenderItem(e.x, e.y, s);
      return new RenderItem({
        x: e.x,
        y: e.y,
        size: s
      });
    });
  }

  ui() {
    const con = panel('MSize');
    const a = ckbox(this.active, v => {
      this.active = v;
      this.onChange();
    });
    con.appendChild(a);

    const max = slider(this.value, this.min, this.max, .5, v => {
      this.value = v;
      this.onChange();
    });

    con.appendChild(max);

    const r = ckbox(this.reverse, v => {
      this.reverse = v;
      this.onChange();
    });
    con.appendChild(r);

    return con;
  }
}
