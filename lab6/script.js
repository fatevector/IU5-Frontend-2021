const square = document.getElementById("square");
square.addEventListener("click", ()=>square.style.background=`#${Math.floor(Math.random() * 16777215).toString(16)}`);


const timer = document.getElementById("timer");
let time = 0;
let timerId;
timer.addEventListener("mouseenter", () => {
  timerId = setInterval(() => {
    time++;
    timer.innerHTML = `${time}`;
  }, 1000);
});
timer.addEventListener("mouseleave", () => {
  clearInterval(timerId);
});


document.getElementById("list").addEventListener("mouseenter", ()=>{document.getElementById("list-items").classList.add("visible");});
document.getElementById("list").addEventListener("mouseleave", ()=>{document.getElementById("list-items").classList.remove("visible");});


function getCoords(elem) {
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
const circle = document.getElementById("circle");
const field = document.getElementById("field");
let circleClick=false;
circle.addEventListener("click",()=>circleClick=true);
document.addEventListener("keydown", (event) => {if (event.code == "Escape") circleClick = false;});
field.addEventListener("mousemove", e=>{
  if (circleClick) {
    const rightBorder = field.offsetWidth - circle.offsetWidth;
    const bottomBorder = field.offsetHeight - circle.offsetHeight;
    let x = e.pageX - getCoords(field).left-15;
    let y = e.pageY - getCoords(field).top-15;

    if (x <= rightBorder && y <= bottomBorder && x >= 0 && y >= 0) {
      circle.style.left = x + "px";
      circle.style.top = y + "px";
    }
  }
});