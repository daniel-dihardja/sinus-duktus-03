export class Storage {

  constructor() {
    this.data = JSON.parse(localStorage.getItem('drawings')) || {};
  }

  save(name, data) {
    this.data[name] = data;
    localStorage.setItem('drawings', JSON.stringify(data));
  }

  getItem(name) {
    const obj = JSON.parse(localStorage.getItem('drawings'));
    return obj[name];
  }

  getDrawings() {
    const obj = JSON.parse(localStorage.getItem('drawings'));
    return Object.keys(obj)
  }
}