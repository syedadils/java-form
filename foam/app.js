function save() {
    var fn = document.getElementById("fn").value;
    var error = document.getElementById("nameError");
    if(fn === " ")
    {error.style.color = "red"
    error.innerText = "Please enter correct name";
}

else {
    error.innerText = ""
}

var pass = document.getElementById("pass").value;
var error = document.getElementById("na");
if(pass === " ")
{error.style.color = "red"
error.innerText = "Please enter correct name";
}

}