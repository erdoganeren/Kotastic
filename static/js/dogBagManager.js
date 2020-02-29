import DogBagPoint from './dogBagPoint';

export default class DogBagManager {

    constructor(){}

    readDogBagPoints(callback){
        var reader = new FileReader();
        reader.readAsText('../resources/HUNDESACKERLOGD.json', 'UTF-8');

        reader.onload = function(evt) {
            //document.getElementById('content').innerHTML = e.target.result;
            var text = reader.result;
            var json = JSON.parse(text);
            var features = json.features;
            var newPointList = [];

            for (let f in features) {
                //var point = new DogBagPoint();
                //point.latitude = f.geometry.coordinates[0];
                //point.longitude = f.geometry.coordinates[1];
                //point.streetname = f.properties.STRNAM;

                var longitude = f.geometry.coordinates[0];
                var latitude = f.geometry.coordinates[1];
                var streetname = f.properties.STRNAM;

                var point = new DogBagPoint(longitude, latitude, streetname);
                point.id = f.id;
                point.number = f.properties.NUMMER;
                point.onrtxt = f.properties.ONRTXT;

                console.log(point);
                newPointList.push(point);
            }

            callback(newPointList);
        }
    }

    getDogBagPoints(callback){
        var xmlhttp = new XMLHttpRequest();
        var url = "https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:HUNDESACKERLOGD&srsName=EPSG:4326&outputFormat=json";

        xmlhttp.onreadystatechange = function() {
            if (this.readyState != 4 || this.status == 200) {
                console.log(this.readyState);
                console.log(this.status);
            }

            var json = JSON.parse(this.responseText);
            var features = json.features;
            var newPointList = [];

            for (let f in features) {
                var longitude = f.geometry.coordinates[0];
                var latitude = f.geometry.coordinates[1];
                var streetname = f.properties.STRNAM;

                var point = new DogBagPoint(longitude, latitude, streetname);
                point.id = f.id;
                point.number = f.properties.NUMMER;
                point.onrtxt = f.properties.ONRTXT;

                console.log(point);
                newPointList.push(point);
            }

            callback(newPointList);
        };

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
}