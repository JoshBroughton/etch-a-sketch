//TODO: 1. Create a 16x16 grid using javascript
//2. Add a hover effect that changes a grid square to black on ::hover
//3. Add a button that will create a new grid of user-defined size
//4. That's it!


//initialize variables and set a default grid size on page loading
let grid = document.getElementsByClassName('container')[0];
let initLength = 50;

//takes the specified length of one side of the grid and generates a square grid
//divs which are appended under the grid container and assigned column and row 
//starts which creates a square grid
function drawGrid(length) {
    for (let i=1;i<length+1;i++) {
        for (let j=1;j<length+1;j++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'box'); //so we can edit them on mouseenter below
            div.style.cssText = `grid-column-start:${i};grid-row-start:${j}`;
            grid.appendChild(div);
        }     
    }
}
drawGrid(initLength);
function sketchFunction(x) {
    let boxes = document.getElementsByClassName('box')
    boxes[x].classList.add("sketched");//sketched class turns boxes black
}
function gridListener() {
    let boxes = document.getElementsByClassName('box')//array-like object of grid boxes
    for (let n=0; n<boxes.length; n++) {
        boxes[n].addEventListener("mouseenter", function(){
            sketchFunction(n)
        });
    }
}   
gridListener();
//reset button function: need delete current divs and then simply call previous
//functions with the user-defined length parameter
function deleteGrid() {
    let boxes = document.getElementsByClassName('box')
    let loops = boxes.length;
    for (let i=0; i<loops; i++) {
        boxes[0].remove();
    }
}
function resetGrid() {
    deleteGrid();
    let newLength = Number(prompt('Enter the new length of each side as a number, max 100', '50'));
    if (newLength > 100 || isNaN(newLength)) {
        alert("You didn't enter a valid number, so the length was defaulted to 50");
        drawGrid(50);
    } else {
        drawGrid(newLength);
    }
    gridListener();
}
document.getElementById('resetBtn').addEventListener('click', resetGrid);
