// is a comment

/*

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

var x = document.getElementById("Project1");

var y = document.getElementById("Project2");


function myFunction() {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunction() {
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
