//drop down menu js
console.log("drop down menu js loaded");

// shows the drop down menu
function dropMenu() {
  document.getElementById("catagoriesDropdown").classList.toggle("show");
  console.log("menu shown");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
		console.log("menu hidden");
      }
    }
  }
}
