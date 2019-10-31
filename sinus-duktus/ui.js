export class UI {
  constructor(elId) {
    this.con = document.getElementById(elId);
  }

  add(el) {
    this.con.appendChild(el);
  }
}
