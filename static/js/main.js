window.onload = function() {
    var km = pythagorasEquirectangular( 16.30077 ,48.15054 , 16.501423166734703,48.25113105446648);
    //alert(km);

var manager =  new DogBagManager();
    manager.getDogBagPoints(function(list){
     alert(list[0]);   
    });
}