const defaultSize = 50;
let defaultColor = 'black'
let colorPicked = false;
let rainbow = false;
let newColor = defaultColor;
let erase = false;
let eraseChangedBackground = 'white';
let differentBackground = false;


const gridContainer = document.querySelector('.grid-container');
const changeColorBtn = document.getElementById('changeColor');
const rainbowColorBtn = document.getElementById('rainbowColorBtn')
const gridSquare = document.querySelectorAll('div');
const resetBtn = document.getElementById('resetBtn');
const eraseBtn = document.getElementById('erase');
const backgroundColorBtn = document.getElementById('bacgroundColor');
const colorPicker = document.getElementById('colorInput');
const onLoad = document.querySelector('body');


const setColor = (color) => {
  newColor = color;
}

// activates rainbow color on click of a button
rainbowColorBtn.onclick = () => {
  setColor('rainbow');
  rainbow = true;
  colorPicked = false;
  erase = false;
}

// This lets the user to erase the unwanted coloring of the grid
eraseBtn.onclick = () => {
  erase = true;
  rainbow = false;
  colorPicked = false;
}

backgroundColor.oninput = (e) => {
  gridContainer.style.backgroundColor = e.target.value;
  differentBackground = true;
  eraseChangedBackground = e.target.value;
  
}

// This resets the grid from any coloring
resetBtn.onclick= () => {
  gridContainer.innerHTML = '';
  createGrid(defaultSize);  
}


// sets color based on choice of the user
colorPicker.oninput = (e) => {
  setColor(e.target.value);
  colorPicked = true;
  rainbow = false;
  erase = false;
  
}

const changeSize = (input) => {
  gridContainer.innerHTML = '';
  createGrid(input)
  
}

// this creates grid
function createGrid(size) {  
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++){
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridContainer.appendChild(gridElement); 
    gridElement.addEventListener('mouseover', coloring);
    gridElement.addEventListener('mousedown', coloring);  
     
  }
}

// I'm using these variable for coloring function
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// this function colors grid elements - squares
const coloring = (e) => {
  if (e.type === 'mouseover' && !mouseDown) return
  if (colorPicked) {
    e.target.style.backgroundColor = newColor;
  } else if ( rainbow) {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      const random = `rgb(${randomR}, ${randomG}, ${randomB}`
      e.target.style.background = random;
  } else if ( !colorPicked && !rainbow && !erase ){
      e.target.style.backgroundColor = 'black';
    

  } else if ( erase ) {
      if (differentBackground) {
        e.target.style.backgroundColor = eraseChangedBackground;
      } else {
        e.target.style.backgroundColor = 'white';
      }
  }  
}

// this makes sure when page is loaded Grid is created.
onLoad.addEventListener('load', createGrid(50));
