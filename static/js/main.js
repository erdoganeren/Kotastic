window.onload = function() {
    var km = pythagorasEquirectangular( 16.30077 ,48.15054 , 16.501423166734703,48.25113105446648);
    //alert(km);

var manager =  new DogBagManager();
    /*
    manager.getDogBagPoints(function(list){
        alert(list[0]);
    }); */

    manager.getDogBagPoints(setAllMarksOnMap(list));
}

function setAllMarksOnMap(list) {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: new google.maps.LatLng(48.25113105446648, 16.501423166734703),
    });

    for (var i = 0; i < list.length; i++) {
        var point = list[i];
        var pos = new google.maps.LatLng(point.latitude, point.longitude);

        var marker = new google.maps.Marker({
            position: pos,
            title: point.streetname,
            icon: 'poop',
            map: map
        });

        marker.setMap(map);
    };
}