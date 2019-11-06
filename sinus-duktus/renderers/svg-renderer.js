import { panel, ckbox, slider } from "../ui-util";

export class SVGRenderer {
  constructor() {
    this.active = true;
  }

  ui() {
    const con = panel('MSize');
    const a = ckbox(this.active, v => {
      this.active = v;
      this.onChange();
    });
    con.appendChild(a);
    return con;
  }

  render(data) {

  }
}