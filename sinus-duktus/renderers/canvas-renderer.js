/**
 * Created by danieldihardja on 05.09.19.
 */

const dot = (ctx, x, y, r, stroke = true) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();

  if (! stroke) return;

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
};

export class CanvasRenderer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvas.width = 1000;
    this.canvas.height = 200;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.translate(0, 100);
  }

  render(data) {
    this.ctx.fillStyle = '#FFF';
    data.forEach(e => {
      dot(this.ctx, e.x, e.y, e.size);
    });
  }
}