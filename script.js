// is a comment

/*
is a multi-line comment
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

// create an active variable for each project section
  var allproj = btns[0];
  var webdevproj = btns[1];
  var finproj = btns[2];
  var dataproj = btns[3];


// individual Projects variables
var dw = document.getElementById("dw");
var maps = document.getElementById("maps");
var wc = document.getElementById("word_cloud");
var ap = document.getElementById("ap");


// initial display style for projects
dw.style.display = "block";
maps.style.display = "block";
wc.style.display = "block";
ap.style.display = "block";

// function for displaying all projects
function projectall() {

  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");
  var wc = document.getElementById("word_cloud");
  var ap = document.getElementById("ap");

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

  if (allproj.className == "btn active") {
      wc.style.display = "block";
    } else if (wc.style.display === "none") {
      wc.style.display = "block";
    }

  if (allproj.className == "btn active") {
      ap.style.display = "block";
    } else if (ap.style.display === "none") {
      ap.style.display = "block";
    }

}

// function for displaying all Web Dev projects
function projectWebDev() {
  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");
  var wc = document.getElementById("word_cloud");
  var ap = document.getElementById("ap");

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

  if (webdevproj.className == "btn active") {
      wc.style.display = "none";
    } else if (wc.style.display === "block") {
      wc.style.display = "none";
    }

  if (webdevproj.className == "btn active") {
      ap.style.display = "none";
    } else if (ap.style.display === "block") {
      ap.style.display = "none";
    }
}

// function for displaying all Finance projects
function projectfin() {

  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");
  var wc = document.getElementById("word_cloud");
  var ap = document.getElementById("ap");


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

  if (finproj.className == "btn active") {
      wc.style.display = "none";
    } else if (wc.style.display === "block") {
      wc.style.display = "none";
    }

  if (finproj.className == "btn active") {
      ap.style.display = "none";
    } else if (ap.style.display === "block") {
      ap.style.display = "none";
    }

}

// function for displaying all Data Science Projects
function projectdata() {

  var dw = document.getElementById("dw");
  var maps = document.getElementById("maps");
  var wc = document.getElementById("word_cloud");
  var ap = document.getElementById("ap");

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

  if (dataproj.className == "btn active") {
      wc.style.display = "block";
    } else if (wc.style.display === "none") {
      wc.style.display = "block";
    }

  if (dataproj.className == "btn active") {
      ap.style.display = "block";
    } else if (ap.style.display === "none") {
      ap.style.display = "block";
    }

}

