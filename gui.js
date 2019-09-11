/**
 * Created by danieldihardja on 01.09.19.
 */

import {config} from "./config";
import {dot} from "./sindu";

export class Gui {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = config.width;
    this.canvas.height = config.height;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.translate(0, config.height / 2);

    this.md = false;

    this.startPoint = {x:0, y:0};
    this.endPoint = {x:0, y:0};

    this.from = 0;
    this.to = 0;

    this.canvas.addEventListener('mousedown', e =>{
      this.startPoint = {x: e.offsetX, y: e.y};
      this.md = true;
      this.ctx.clearRect(0,0-config.height/2,config.width, config.height);
      this.ctx.strokeRect(this.startPoint.x, 0 - config.height / 2, .1, 200);
      this.from = e.offsetX;
      console.log(this.startPoint);
    });
    this.canvas.addEventListener('mouseup', e => {
      this.endPoint = {x: e.offsetX, y: e.y};
      this.md = false;
      this.ctx.strokeRect(this.endPoint.x, 0 - config.height / 2, .1, 200);
      this.to = e.offsetX;
      console.log(this.endPoint);
    });
    this.canvas.addEventListener('mousemove', e => {
      //if (this.md) console.log(e)
      if(! this.md) return;
      this.ctx.fillRect(e.offsetX, 0, 1,1);
      console.log(e);
    });

  }

  render(data) {
    //data.forEach(e => this.draw(e))
  }

  draw(ctrl) {
    this.ctx.fillRect(ctrl.x, ctrl.y, 2,2);
  }
}