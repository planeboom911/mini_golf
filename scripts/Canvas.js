

let Canvas__elem = document.createElement('canvas');

let Canvas = {
  
  elem: Canvas__elem,
  ctx: Canvas__elem.getContext("2d"),

  width: Canvas__elem.width,
  height: Canvas__elem.height,
  
  size: function (width, height) {
    this.elem.width = width;
    this.elem.height = height;
    this.width = width;
    this.height = height;
  },

  clear: function(x = 0, y = 0, w = this.width, h = this.height) {
    this.ctx.clearRect(x, y, w, h);
  },

  fill: function(path, color, fillRule = undefined) {
    this.ctx.fillStyle = color
    this.ctx.fill(path, fillRule)
  },

  stroke: function(path, color, width = 1) {
    this.ctx.beginPath()
    this.ctx.fillStyle = color
    this.ctx.lineWidth = width
    this.ctx.stroke(path)
  }
}

Canvas.size(1000, 600);

document.body.appendChild(Canvas.elem)