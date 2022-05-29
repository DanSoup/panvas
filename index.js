import Panvas from './Panvas.js';

const panvases = {};
const panvasCanvases = [...document.getElementsByClassName('panvas')];

const inputs = {};
[...document.getElementsByTagName('input')].forEach(input => {
  inputs[input.id] = input;
});


panvasCanvases.forEach(canvas => {
  canvas.height = 200;
  canvas.width = 200;
  panvases[canvas.id] = new Panvas(canvas);
})

// drawPixel()
inputs.drawPixel_x.value = 5;
inputs.drawPixel_x.oninput = e => {
  const value = e.target.value;
  if (!isNaN(parseFloat(value))) {
    drawPixel();
  }
};
inputs.drawPixel_y.value = 5;
inputs.drawPixel_x.oninput = e => {
  const value = e.target.value;
  if (!isNaN(parseFloat(value))) {
    drawPixel();
  }
};

const drawPixel = () => {
  const x = parseFloat(inputs.drawPixel_x.value);
  const y = parseFloat(inputs.drawPixel_y.value);
  panvases.drawPixel.clearAll();
  panvases.drawPixel.drawPixel(x, y);
};

drawPixel();

panvases.drawLine.pixelSize = 8;

const drawLine = () => {
  const drawLinePointOne = [200, 10];
  const drawLinePointTwo = [10, 10];
  panvases.drawLine.drawLine(drawLinePointOne, drawLinePointTwo);
  panvases.drawLine.ctx.strokeStyle = '#00ff00';
  panvases.drawLine.ctx.beginPath();
  panvases.drawLine.ctx.moveTo(...drawLinePointOne);
  panvases.drawLine.ctx.lineTo(...drawLinePointTwo);
  panvases.drawLine.ctx.stroke();
}

drawLine();