// 1. Select all boxes with the class "box":
const boxes = document.getElementsByClassName("box");

// 2. Loop through each box and modify its style:
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.height = "100px";
  boxes[i].style.width = "100px";
  boxes[i].style.backgroundColor = "darkseagreen";
}
