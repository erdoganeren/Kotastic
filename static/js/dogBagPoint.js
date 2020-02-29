class DogBagPoint {

    constructor(longitude, latitude, streetname){
        this.latitude = latitude;
        this.longitude = longitude;
        this.streetname = streetname;
    }

    get longitude() {
        return this.longitude;
    }
    set longitude(x) {
        this.longitude = x;
    }

    get latitude() {
        return this.latitude;
    }
    set latitude(x) {
        this.latitude = x;
    }

    get streetname() {
        return this.streetname;
    }
    set streetname(x) {
        this.streetname = x;
    }

}