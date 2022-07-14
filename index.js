const coordinates = document.querySelector('.coordinates');
const ballAnimation = document.querySelector('.ballAnimation');
const cssRoot = document.documentElement;


document.addEventListener("mousemove", event => {
  let mouseX = event.clientX; // Gets Mouse position X
  let mouseY = event.clientY; // Gets Mouse position Y
  coordinates.textContent = `translate( ${mouseX}px , ${mouseY}px )`; // Prints data
  cssRoot.style.setProperty('--positionX', `${mouseX}px`);
  cssRoot.style.setProperty('--positionY', `${mouseY}px`);
  
});

