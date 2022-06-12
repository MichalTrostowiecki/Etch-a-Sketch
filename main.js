const size = 30;

createGrid(size);

const gridContainer = document.querySelector('.grid-container'); 
const squares = gridContainer.querySelectorAll('div');


// we pass and event from mouseover to this function to change color of grid

const changeSize = (input) => {
  createGrid(input)
  colorSquares();
}

// This function create a grid based on the size we chooose.
function createGrid(size) {  
  let amount = size * size
  for (let i = 0; i < amount; i++){
    const gridElement = document.createElement('div');
    const gridContainer = document.querySelector('.grid-container');
    
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    gridContainer.appendChild(gridElement);
    gridElement.classList.add('grid-element');      
  }
}

const changeColor = (event) => {
  event.target.style.backgroundColor = 'green';
}

const reset = () => {
  let grid = document.querySelector('.grid-container');
  let squares = grid.querySelectorAll('div');

  squares.forEach((div) => {
    div.style.backgroundColor = 'white';
  })
}

const changeBackground = () => {
  let grid = document.querySelector('.grid-container');
  let squares = grid.querySelectorAll('div');

  squares.forEach((div) => {
    div.style.backgroundColor = 'blue';
  })
}

const colorSquares = () => {
  let grid = document.querySelector('.grid-container');
  let squares = grid.querySelectorAll('div');
  
  squares.forEach((div) => {
    div.addEventListener('mousedown', changeColor);
    div.addEventListener('mouseover', changeColor);
    })
}

const randomColor = () => {
  let grid = document.querySelector('.grid-container');
  let squares = grid.querySelectorAll('div');
  squares.forEach((div) => {
    div.addEventListener('mouseover', changeColor);
  })
}

createGrid(size);
