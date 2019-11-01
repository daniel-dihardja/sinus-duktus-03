/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderItem} from "../render-item";

export class SimpleSize {
  constructor() {
    this.min = 1;
    this.max = 10;
    this.value = 4;
    this.active = true;
    this.onChange;
  }

  mod(data) {
    return data.map(e => new RenderItem(e.x, e.y, this.value));
  }

  ui() {
    const con = document.createElement('fieldset');
    con.setAttribute('class', 'panel-item');
    const l = document.createElement('legend');
    l.innerHTML = 'Simple Size';
    con.appendChild(l);

    const a = document.createElement('input');
    a.setAttribute('type', 'checkbox');
    a.setAttribute('checked', this.active);
    a.addEventListener('change', e => {
      this.active = e.target.checked;
      if (this.onChange) this.onChange();
    });
    con.appendChild(a);

    const max = document.createElement('input');
    max.setAttribute('type', 'range');
    max.setAttribute('min', this. min);
    max.setAttribute('max', this. max);

    max.addEventListener('input', e => {
      this.value = e.target.value;
      if (this.onChange) this.onChange();
    });

    con.appendChild(max);
    return con;
  }
}
