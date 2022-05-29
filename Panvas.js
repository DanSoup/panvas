class Panvas {
  constructor (canvasElement, options = {}) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.pixelSize = options.pixelSize || 8;
    this.xOffset = 0;
    this.yOffset = 0;
  };

  clearAll () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };

  drawPixel (x, y, options = {}) {
    const pixelSize = options.pixelSize || this.pixelSize
    const dx = pixelSize * Math.floor(x / pixelSize);
    const dy = pixelSize * Math.floor(y / pixelSize);
    this.ctx.fillRect(dx, dy, pixelSize, pixelSize);
  };

  drawLine (firstPoint, secondPoint, options = {}) {
    const x1 = firstPoint[0];
    const y1 = firstPoint[1];
    const x2 = secondPoint[0];
    const y2 = secondPoint[1];

    // y = ax + b
    const a = (y1 - y2) / (x1 - x2);
    const b = y1 - (a * x1);

    const lowerXLimit = Math.floor((Math.min(x1, x2) + (this.pixelSize / 2)) / this.pixelSize) * this.pixelSize + this.pixelSize / 2;
    const upperXLimit = Math.floor((Math.max(x1, x2) + (this.pixelSize / 2)) / this.pixelSize) * this.pixelSize - this.pixelSize / 2;
    const lowerYLimit = Math.floor((Math.min(y1, y2) + (this.pixelSize / 2)) / this.pixelSize) * this.pixelSize + this.pixelSize / 2;
    const upperYLimit = Math.floor((Math.max(y1, y2) + (this.pixelSize / 2)) / this.pixelSize) * this.pixelSize - this.pixelSize / 2;

    if (Math.abs(upperXLimit - lowerXLimit) >= Math.abs(upperYLimit - lowerYLimit)) {
      for (let x = lowerXLimit; x <= upperXLimit; x += this.pixelSize) {
        this.drawPixel(x, a * x + b);
      }
    } else {
      for (let y = lowerYLimit; y <= upperYLimit; y += this.pixelSize) {
        if (x1 === x2) this.drawPixel(x1, y);
        else this.drawPixel((y - b) / a, y);
      }
    }
  };
}

export default Panvas;