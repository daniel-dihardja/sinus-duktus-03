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
    this.ctx = this.canvas.getContext('2d');
  }

  render(state) {
    this.canvas.width = state.config.width;
    this.canvas.height = state.config.height;
    this.ctx.translate(0, 100);

    this.ctx.fillStyle = '#FFF';
    state.items.forEach(e => {
      dot(this.ctx, e.x, e.y, e.size);
    });
  }
}