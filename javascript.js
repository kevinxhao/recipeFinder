//image carousel
console.log("javascript js loaded");

//new request
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
    }
};

xhttp.open("GET", "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken", true);
xhttp.send();

