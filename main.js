const defaultSize = 50;
let defaultColor = 'black'
let colorPicked = false;
let rainbow = false;
let newColor = defaultColor;
let erase = false;





const gridContainer = document.querySelector('.grid-container');
const changeColorbtn = document.getElementById('changeColor');
const rainbowColorbtn = document.getElementById('rainbowColorBtn')
const resetBtn = document.getElementById('resetBtn');
const eraseBtn = document.getElementById('erase');
const backgroundColorBtn = document.getElementById('bacgroundColorBtn');
const colorPicker = document.getElementById('colorInput');
const onLoad = document.querySelector('body');

const setColor = (color) => {
  newColor = color;
}

// activates rainbow color on click of a button
rainbowColorbtn.onclick = () => {
  setColor('rainbow');
  rainbow = true;
}

// sets color based on choice of the user
colorPicker.oninput = (e) => {
  setColor(e.target.value);
  rainbow = false;
  colorPicked = true;
}

// This lets the user to erase the unwanted coloring of the grid
eraseBtn.onclick = () => {
  erase = true;
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
  if (colorPicked && !rainbow && !erase) {
    e.target.style.backgroundColor = newColor;
    console.log('1')
  } else if ( rainbow) {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      const random = `rgb(${randomR}, ${randomG}, ${randomB}`
      e.target.style.background = random;
      console.log('2')
  } else if ( !colorPicked && !rainbow && !erase){
      e.target.style.backgroundColor = 'black';
      console.log('3')
  } else if ( erase && !rainbow ) {
      e.target.style.backgroundColor = 'white';
      console.log('4')
  }
  
}




const changeSize = (input) => {
  createGrid(input)
  
}


resetBtn.onclick= () => {
  gridContainer.innerHTML = '';
  createGrid(defaultSize);
}

// this makes sure when page is loaded Grid is created.
onLoad.addEventListener('load', createGrid(50));
