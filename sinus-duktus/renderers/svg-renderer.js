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
    const s = this.svgDoc(state.config);
    state.items.forEach(i => {
      const  c = this.svgCircle(i);
      s.appendChild(c);
    });
    // document.body.appendChild(s);
  }

  svgDoc(config) {
    const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute('width', config.width);
    s.setAttribute('height', config.height);
    s.setAttribute('viewBox', `${0} -${config.height / 2} ${config.width} ${config.height}`);
    return s;
  }

  svgCircle(item) {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute('cx', item.x);
    c.setAttribute('cy', item.y);
    c.setAttribute('r', item.size);
    c.setAttribute('stroke', 'blue');
    c.setAttribute('stroke-opacity', '1');
    return c;
  }
}