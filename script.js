//TODO: 1. Create a 16x16 grid using javascript
//2. Add a hover effect that changes a grid square to black on ::hover
//3. Add a button that will create a new grid of user-defined size
//4. That's it!

//1.
let div = document.createElement('div')
let grid = document.getElementsByClassName('container')[0]
for (let i=0;i<16;i++) {
    div = document.createElement('div')
    grid.appendChild(div);
}
    
