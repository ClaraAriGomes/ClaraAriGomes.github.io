const button = document.querySelector('.randomBackground'); 
button.addEventListener('click', function() {
    document.body.style.backgroundColor = randomHexColor(); 
});


function randomHexColor() {
	return '#' + Math.floor(Math.random()*16777215).toString(16)
}