// is a comment

/*
is a multi-line comment
*/


function myFunction() {
    var element = document.body;

    element.classList.toggle("dark-mode");
    if (document.getElementById("demo").innerHTML === "Dark") {
            document.getElementById("demo").innerHTML ="Light";
        } else {document.getElementById("demo").innerHTML = "Dark";
    }



}


window.onload = function() {
    dropdown1();
    dropdown2();
    dropdown3();
    dropdown4();
    dropdown5();
    dropdown6();
    dropdown7();

}

function dropdown1() {
  var x = document.getElementById("1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropdown2() {
  var x = document.getElementById("2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropdown3() {
  var x = document.getElementById("3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function dropdown4() {
  var x = document.getElementById("4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function dropdown5() {
  var x = document.getElementById("5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function dropdown6() {
  var x = document.getElementById("6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function dropdown7() {
  var x = document.getElementById("7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
