//Change background and nav bar color randomly when the button is clicked
let button = document.querySelector('.randomBackground'); 

button.addEventListener('click', function() {
    let randomColor = randomHexColor();

    document.body.style.backgroundColor = randomColor; 
    document.querySelector(".randomBackgroundNav").style.backgroundColor = randomColor; 
});

function randomHexColor() {
	return '#' + Math.floor(Math.random()*16777215).toString(16)
}




/*

//Change background and nav bar color randomly when the button is clicked
let button = document.querySelector('.randomBackground'); 

// Check localStorage for a saved background color when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.querySelector(".randomBackgroundNav").style.backgroundColor = savedColor;
    }
});

// Change the background color and save it to localStorage
button.addEventListener('click', function() {
    let randomColor = randomHexColor();

    document.body.style.backgroundColor = randomColor; 
    document.querySelector(".randomBackgroundNav").style.backgroundColor = randomColor; 

    // Save the color to localStorage
    localStorage.setItem('backgroundColor', randomColor);
});

function randomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
*/
