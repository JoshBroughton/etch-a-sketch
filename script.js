//TODO: 1. Create a 16x16 grid using javascript
//2. Add a hover effect that changes a grid square to black on ::hover
//3. Add a button that will create a new grid of user-defined size
//4. That's it!

//1.
let div = document.createElement('div');
let grid = document.getElementsByClassName('container')[0];
let length = 4;
for (let i=1;i<length+1;i++) {
    for (let j=1;j<length+1;j++) {
        div = document.createElement('div')
        div.style.cssText = `grid-column-start:${i};grid-row-start:${j}`;
        div.addEventListener("mouseover", function() {
            div.classList.add("sketched"); 
        })
        grid.appendChild(div);

    }     
}
  

