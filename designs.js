// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function makeGrid() {

// // Your code goes here!

// }

/*
*
* Create some initial variables
*
*/
let rows = 0;
let columns = 0;
let color = document.getElementById('colorPicker').value;
let colored = 'background-color: #000000;';
let getPixelCanvas = document.querySelector('#pixelCanvas');
let emptyTable = '<table id="pixelCanvas"></table>';


/*
*
* Create table from Choose Grid Size section
*
*/

// Set listeners from the form
let form = document.querySelector('#sizePicker');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  function makeGrid(submit) {

    // Receive values for columns and rows
    rows = document.getElementById('inputHeight').value;
    columns = document.getElementById('inputWeight').value;

    // Select the table to insert rows and columns
    let theRows = document.getElementById('pixelCanvas');


    // Reset any existing table
    theRows.innerHTML = emptyTable;

    // Create the rows from #inputHeight
      for (let rowNumber = 0; rowNumber < rows; rowNumber++ ) {
        // Create element tr
        let createTr = document.createElement('tr');

        // Create the columns from #inputWidth
        for (let columnNumber = 0; columnNumber < columns; columnNumber++ ) {

          // Create element td
          let createTd = document.createElement('td');

          // Insert the columns td into the rows tr
          createTr.appendChild(createTd);
        }
      // Insert the rows tr into the table
      theRows.appendChild(createTr);
    }

  }

  makeGrid();
});


/*
*
* Create a paint feature
*
*/

// Function to paint the cells from the grid
function paintCell(event){

  // Set a Let to save the event + target cell (nodeName TD)
  let cellTarget = event.target.nodeName === 'TD';

  //  Set style to the clicked cell
  colored = event.target.style.cssText = 'background-color: ' + color + ';';
}

// Call the function
getPixelCanvas.addEventListener('click', paintCell);


/*
*
* Get color from Pick A Color section
*
*/

  // Set listeners for color
  let getColorPicker = document.querySelector('#colorPicker');

  getColorPicker.addEventListener('input', function(event) {

    // Get color value from user
    color = document.getElementById('colorPicker').value;
  });