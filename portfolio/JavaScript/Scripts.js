
//Smart Technology//
var auth_token = 'pJQgtU0eLTE6HxNZA2l_sAkg6JnuQzky';

function get_pin(pin, element) {

fetch('http://blynk-cloud.com/' + auth_token + '/get/' + pin)
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