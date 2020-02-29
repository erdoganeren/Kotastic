//Sources: https://stackoverflow.com/questions/21279559/geolocation-closest-locationlat-long-from-my-position

// Callback function for asynchronous call to HTML5 geolocation
function UserLocation(position) {
  NearestCity(position.coords.latitude, position.coords.longitude);
}


// Convert Degress to Radians
function Deg2Rad(deg) {
  return deg * Math.PI / 180;
}

function pythagorasEquirectangular(lat1, lon1, lat2, lon2) {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}

var lat = 20; // user's latitude
var lon = 40; // user's longitude

var cities = [
  ["city1", 10, 50, "blah"],
  ["city2", 40, 60, "blah"],
  ["city3", 25, 10, "blah"],
  ["city4", 5, 80, "blah"]
];

function NearestCity(latitude, longitude) {
  var minDif = 99999;
  var closest;

  for (index = 0; index < cities.length; ++index) {
    var dif = pythagorasEquirectangular(latitude, longitude, cities[index][1], cities[index][2]);
    if (dif < minDif) {
      closest = index;
      minDif = dif;
    }
  }
}