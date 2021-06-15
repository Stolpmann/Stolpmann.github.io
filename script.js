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

  

var allproj = btns[0];
var webdevproj = btns[1];
var finproj = btns[2];
var dataproj = btns[3];


if (allproj.className == "btn active") {
  console.log("active")
}

function projectall() {

  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");

  if (allproj.className == "btn active") {
      dw.style.display = "block";
    } else if (dw.style.display === "none") {
      dw.style.display = "block";
    }

  if (allproj.className == "btn active") {
      maps.style.display = "block";
    } else if (maps.style.display === "none") {
      maps.style.display = "block";
    }

}

function projectWebDev() {
  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");

  if (webdevproj.className == "btn active") {
      dw.style.display = "block";
    } else if (dw.style.display === "none") {
      dw.style.display = "block";
    }

  if (webdevproj.className == "btn active") {
      maps.style.display = "block";
    } else if (maps.style.display === "none") {
      maps.style.display = "block";
    }
}

function projectfin() {

  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");

  if (finproj.className == "btn active") {
      dw.style.display = "none";
    } else if (dw.style.display === "block") {
      dw.style.display = "none";
    }

  if (finproj.className == "btn active") {
      maps.style.display = "none";
    } else if (maps.style.display === "block") {
      maps.style.display = "none";
    }

}
function projectdata() {

  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");

  if (dataproj.className == "btn active") {
      dw.style.display = "none";
    } else if (dw.style.display === "block") {
      dw.style.display = "none";
    }

  if (dataproj.className == "btn active") {
      maps.style.display = "none";
    } else if (maps.style.display === "block") {
      maps.style.display = "none";
    }

}
