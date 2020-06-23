// Your code here

let dodger = document.getElementById("dodger");

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      let leftNumbers = dodger.style.left.replace("px", "");
      let left = parseInt(leftNumbers, 10);
   
      dodger.style.left = `${left - 1}px`;
    }
    if (e.key === "ArrowRight") {
        let lefttNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
     
        dodger.style.left = `${left + 1}px`;
      }
  });

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//       let rightNumbers = dodger.style.right.replace("px", "");
//       let right = parseInt(rightNumbers, 10);
   
//       dodger.style.right = `${left + 1}px`;
//     }
//   });

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
