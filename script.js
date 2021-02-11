//TODO: 1. Create a 16x16 grid using javascript
//2. Add a hover effect that changes a grid square to black on ::hover
//3. Add a button that will create a new grid of user-defined size
//4. That's it!


//initialize variables and set a default grid size on page loading
let grid = document.getElementsByClassName('container')[0];
let initLength = 25;

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
    for (let i=0; i<boxes.length; i++) {
        boxes[i].remove();
    }
}

