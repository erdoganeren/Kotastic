var mapList = null;
var mainMap = null;
window.onload = function() {
    //alert(km);

var manager =  new DogBagManager();

    manager.getDogBagPoints(function(list){
        mapList = list;
        setAllMarksOnMap(list);
    });
}
function getClostest(){
    list = mapList;
    var tmpEl = null;
    var tmpMin = 0
    for (var i = 0; i < list.length; i++) {
        var point = list[i];
        tmpElLoop = pythagorasEquirectangular( point.latitude, point.longitude, 48.25113105446648, 16.501423166734703);
        if (tmpElLoop < tmpMin || tmpMin == 0){
            tmpMin = tmpElLoop;
            tmpEl =  point;
        }
    }
    mainMap.setZoom(20);
    mainMap.setCenter(new google.maps.LatLng (tmpEl.latitude, tmpEl.longitude));

}
function setAllMarksOnMap(list) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: new google.maps.LatLng(48.25113105446648, 16.501423166734703),
    });
    mainMap = map;
    icons = {
        poop: { //TODO: Change to copyright free source
            icon: '../icons/poop.png'
        }};


    for (var i = 0; i < list.length; i++) {
        var point = list[i];
        var pos = new google.maps.LatLng(point.latitude, point.longitude);

        var marker = new google.maps.Marker({
            position: pos,
            title: point.streetname,
            icon: '../icons/poop.png',
            map: map
        });

        marker.setMap(map);
    };

    directionsRenderer.setMap(map);

    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById('start').addEventListener('change', onChangeHandler);
    document.getElementById('end').addEventListener('change', onChangeHandler);
    new Basemap(map);
}