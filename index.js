let drawLine = document.querySelector('.draw');

drawLine.addEventListener('mousemove', function(drawing) { 
    let dots = document.createElement('div'); 
    dots.classList.add('line'); 

    dots.style.left = `${drawing.pageX}px`; 
    dots.style.top = `${drawing.pageY}px`;

    document.body.appendChild(dots); 

    setTimeout(() => {
        dots.style.opacity = '0';
        setTimeout(() => dots.remove(), 700, 700); 
    });
});