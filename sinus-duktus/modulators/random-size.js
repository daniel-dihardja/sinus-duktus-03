/**
 * Created by danieldihardja on 14.09.19.
 */
import {RenderEntity} from "../render-entity";

export class RandomSize {
  constructor() {
    this.min = 1;
    this.max = 5;
    this.value = this.max;
    this.active = true;
    this.onChange;
  }

  mod(data) {
    return data.map(e => new RenderEntity(e.x, e.y, Math.random() * this.value));
  }

  ui() {
    const con = document.createElement('fieldset');
    con.setAttribute('class', 'panel-item');
    const l = document.createElement('legend');
    l.innerHTML = 'Modulator - Random Size';
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
