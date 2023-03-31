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

function clearGrid() {
  let rows = document.querySelectorAll(".row-container");
  rows.forEach((row) => row.remove());
}

function askForSize() {
  let input = prompt(
    "Please enter the number of squares by squares the grid should be:"
  );
  let size = parseInt(input);
  if (input === null) {
    return;
  } else if (isNaN(size)) {
    alert("Please enter a number:");
    askForSize();
  } else if (size > 100) {
    alert("Please choose a size of max 100!");
    askForSize();
  } else {
    clearGrid();
    createGrid(size);
  }
}

createGrid(16);

const btn = document.querySelector("button");
btn.addEventListener("click", askForSize);
