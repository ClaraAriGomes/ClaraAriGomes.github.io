let canvas = document.getElementById('paintCanvas');
let colorPicker = document.getElementById('colorPicker');
let brushSize = document.getElementById('brushSize');
let clearCanvas = document.getElementById('clearCanvas');
let context = canvas.getContext('2d');

let painting = false;

function startPosition(dot) { 
  painting = true;
  draw(dot);
}

function endPosition() { 
  painting = false;
  context.beginPath();
}
 
function movingPosition(dot) {
  if (painting == false){
    return;
  }

  context.lineWidth = brushSize.value;
  context.lineCap = 'round';
  context.strokeStyle = colorPicker.value;

  context.lineTo(dot.clientX - canvas.offsetLeft-50, dot.clientY - canvas.offsetTop-50); 
  context.stroke();
  context.beginPath();
  context.moveTo(dot.clientX - canvas.offsetLeft-50, dot.clientY - canvas.offsetTop-50);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', movingPosition);

clearCanvas.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});