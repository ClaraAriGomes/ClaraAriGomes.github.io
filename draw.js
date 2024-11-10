let canvas = document.getElementById('paintCanvas');
let colorPicker = document.getElementById('colorPicker');
let brushSize = document.getElementById('brushSize');
let clearCanvas = document.getElementById('clearCanvas');
let context = canvas.getContext('2d');

let painting = false;

function startPosition(dot) { //funcao para comecar a desenhar quando eu clicar
  painting = true;
  draw(dot);
}

function endPosition() { //funcao para eu parar de desenhar quando deixar o click
  painting = false;
  context.beginPath();
}
 
function movingPosition(dot) { //funcao para "desenhar" enquanto o rato move
  if (painting == false){
    return;
  }

  context.lineWidth = brushSize.value;
  context.lineCap = 'round';
  context.strokeStyle = colorPicker.value;


  context.lineTo(dot.clientX - canvas.offsetLeft-50, dot.clientY - canvas.offsetTop-50); //este -50 é pela border
  context.stroke();
  context.beginPath();
  context.moveTo(dot.clientX - canvas.offsetLeft-50, dot.clientY - canvas.offsetTop-50);
}

//todos os event listeners ne
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', movingPosition);

// e aqui so usar o metodo pra limpar whoosh
clearCanvas.addEventListener('click', () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});