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