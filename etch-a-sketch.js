const gridContainer = document.querySelector(".grid-container");
function createGrid(x) {
  for (let i = 0; i < x; i++) {
    const div = document.createElement("div");
    div.classList.add("row-container");
    for (let j = 0; j < x; j++) {
      const innerDiv = document.createElement("div");
      div.appendChild(innerDiv);
    }
    gridContainer.appendChild(div);
  }
}

function askForSize() {
  let input = prompt();
  let size = parseInt(input);
  if (input === null) {
    return;
  }
  else if (isNaN(size)) {
    alert("please enter a number");
    askForSize();
  }
  else {
    createGrid(size);
  }
}

createGrid(34);

const btn = document.querySelector("button");
btn.addEventListener("click", askForSize);

