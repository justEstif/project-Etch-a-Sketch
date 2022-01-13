// get variables
const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector("#reset");
const btnBlack = document.querySelector("#black");
const btnRgb = document.querySelector("#rgb");
const btnGray = document.querySelector("#gray");
const btnRed = document.querySelector("#red");
const btnBlue = document.querySelector("#blue");
const btnGreen = document.querySelector("#green");
const btnYellow = document.querySelector("#yellow");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";

  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

const square = document.querySelector("div");

// make color be dependent on the button clicked
square.addEventListener("mouseover", function (event) {
  
  if (options[0] === true) {
    event.target.style.backgroundColor = "black";
  };
  if (options[1] === true) {
    event.target.style.backgroundColor = "gray";
  };
  if (options[2] === true) {
    event.target.style.backgroundColor = "red";
  };
  if (options[3] === true) {
        event.target.style.backgroundColor = "blue";
  };
  if (options[4] === true) {
    event.target.style.backgroundColor = "green";
  };
  if (options[5] === true) {
    event.target.style.backgroundColor = "yellow";
  };
  if (options[6] === true) {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    const RGB = `rgb(${R},${G},${B})`;
    event.target.style.backgroundColor = RGB;
  }
});

userInput.addEventListener("change", updateGrid);
reset = () => {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
};
resetButton.addEventListener("click", reset);

//black, grayscale, red, blue, green, yellow, rgb 
let options = [true,false,false, false,false, false, false];  
btnBlack.addEventListener("click", function(){
  options = [true,false,false, false,false, false, false];
});
btnGray.addEventListener("click", function(){
    options = [false,true,false, false,false, false, false];
});
btnRed.addEventListener("click", function(){
    options = [false,false,true, false,false, false, false];
});
btnBlue.addEventListener("click", function(){
    options = [false,false, false,true,false, false, false];
});
btnGreen.addEventListener("click", function(){
    options = [false,false, false,false,true, false, false];
});
btnYellow.addEventListener("click", function(){
    options = [false,false, false,false, false,true, false];
});
btnRgb.addEventListener("click", function(){
  options = [false,false, false,false, false, false, true];
});

createGrid();
