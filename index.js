const coordinates = document.querySelector('.coordinates');
const ballAnimation = document.querySelector('.ballAnimation');
const cssRoot = document.querySelector(':root');
let mousex;
let mousey;

/*function setPositionX(){
    cssRoot.style.setProperty('--positionX', ' ')*/

document.addEventListener("mousemove", () => {
  let mousex = event.clientX; // Gets Mouse X
  let mousey = event.clientY; // Gets Mouse Y
  coordinates.textContent = `translate( ${mousex}px , ${mousey}px )`; // Prints data
  ballAnimation.style.transform = `translate( ${mousex}px , ${mousey}px )`;
  
  
});

