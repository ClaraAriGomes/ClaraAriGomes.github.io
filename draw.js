let canvas = document.getElementById('paintCanvas');
let ctx = canvas.getContext('2d');
let colorPicker = document.getElementById('colorPicker');
let brushSize = document.getElementById('brushSize');
let clearCanvas = document.getElementById('clearCanvas');

let painting = false;

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath(); // Ends the path, so lines aren’t continuous
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = brushSize.value;
  ctx.lineCap = 'round';
  ctx.strokeStyle = colorPicker.value;

  // Adjust the coordinates to match the canvas size
  ctx.lineTo(e.clientX - canvas.offsetLeft-50, e.clientY - canvas.offsetTop-50); //este -50 é pela border
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft-50, e.clientY - canvas.offsetTop-50);
}

// Event listeners for drawing on the canvas
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

// Clear canvas button
clearCanvas.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});