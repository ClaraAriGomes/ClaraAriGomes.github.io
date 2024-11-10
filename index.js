//Little disappearing line that follows the cursor in the .draw class section
let drawLine = document.querySelector('.draw');

drawLine.addEventListener('mousemove', function(drawing) { //tipo o event é "drawing" pq faz sentido na minha cabeca, o ato de "desenhar" vai nos dar a info da posicao do rato pra desenhar
    let dots = document.createElement('div'); //aqui esta div vai ser os nossos circulos que vao desenhar
    dots.classList.add('line'); //isto vai nos por a class no css !TER O MESMO NOME DA CLASSE!

    dots.style.left = `${drawing.pageX}px`; //so literalmente ir buscar os pontinhos css e apanhar a coordenada deles no js
    dots.style.top = `${drawing.pageY}px`;

    document.body.appendChild(dots); //isto é pra pormos os pontinhos mesmo no ecra

    setTimeout(() => { //isto é kinda como em IPRP e p2
        dots.style.opacity = '0';
        setTimeout(() => dots.remove(), 700, 700); 
    });
});