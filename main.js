





// we pass and event from mouseover to this function to change color of grid

const changeSize = (input) => {
  createGrid(input)
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
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor); 
    gridElement.style.backgroundColor ='grey';
  }
}

const changeColor = (event) => {
  event.target.style.backgroundColor = 'green';
}

const changeColorBackground = () => {
  const divs = document.querySelectorAll('.grid-container');
  divs.style.backgroundColor = 'red';
}
