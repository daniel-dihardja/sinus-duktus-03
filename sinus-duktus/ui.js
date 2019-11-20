export class UI {
  constructor(elId) {
    this.con = document.getElementById(elId);
    this.con.setAttribute('class', 'ui-con');
    //this.con.appendChild(this.ui());
    this.ui();
    this.panel;
  }

  ui() {

  }

  comp(className) {
    const e = document.createElement('div');
    e.setAttribute('class', className);
    return e;
  }

  add(el) {
    if(el) this.con .appendChild(el);
    return this;
  }
}
