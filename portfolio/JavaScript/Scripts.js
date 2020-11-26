
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Smart Technology//
var auth_token = 'pJQgtU0eLTE6HxNZA2l_sAkg6JnuQzky';

function get_pin(pin, element) {

fetch('https://blynk-cloud.com/' + auth_token + '/get/' + pin)
.then(response => response.json())
.then(data => {
  window[pin] = data;
  document.getElementById(element).innerHTML = data;
})
.catch(error => console.error(error))

}

get_pin('V1', "Humidity");
get_pin('V2', 'Temperature');
get_pin('V4', 'LdrValue');
get_pin('V5', 'moistValue');
 
//End Smart Technology//