// is a comment

/*

*/

/* Project NAVIGATION BAR */
var allproj = document.getElementById("filter-all").className;
var webdevproj = document.getElementById("filter-webdevelopment").className;
var finproj = document.getElementById("filter-finance").className;
var dataproj = document.getElementById("filter-datascience").className;

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
