import { panel, ckbox, button } from "../ui-util";

export class SVGRenderer {

  constructor() {
    this.active = true;
    this.onExport;
  }

  ui() {
    const con = panel('SVG');
    const a = ckbox(this.active, v => {
      this.active = v;
      this.onChange();
    });
    con.appendChild(a);

    const b = button('Export', () => {
      this.onExport();
    });
    con.appendChild(b);

    return con;
  }

  render(state) {
    console.log('render svg');
    // create svg doc;
    const s = document.createElement('svg');
    s.setAttribute('width', state.config.width);
    s.setAttribute('height', state.config.height);
    s.setAttribute('viewBox', `${0} ${state.config.height / 2} ${state.config.width} ${state.config.height}`);
    console.log(s);
    // state.items.forEach(e => console.log(e));
  }
}