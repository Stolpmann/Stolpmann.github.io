// is a comment

/*
document.getElementById("filter-Frontend").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("filter-Frontend").style.color = "white";
}
*/

/* Project NAVIGATION BAR */

// Add active class to the current button (highlight it)
var header = document.getElementById("projectnav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) {
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

function myFunction() {
  var x = document.getElementById("Project1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
