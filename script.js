//TODO: 1. Create a 16x16 grid using javascript
//2. Add a hover effect that changes a grid square to black on ::hover
//3. Add a button that will create a new grid of user-defined size
//4. That's it!

//1.
let div = document.createElement('div');
let grid = document.getElementsByClassName('container')[0];
let length = 100;
for (let i=1;i<length+1;i++) {
    for (let j=1;j<length+1;j++) {
        div = document.createElement('div');
        div.setAttribute('class', 'box');
        div.style.cssText = `grid-column-start:${i};grid-row-start:${j}`;
        grid.appendChild(div);

    }     
}
let boxes = document.getElementsByClassName('box')

let sketchFunction = function(x) {
    boxes[x].classList.add("sketched");
}
for (let n=0; n< boxes.length; n++) {
    boxes[n].addEventListener("mouseover", function(){
        sketchFunction(n)
    });
}