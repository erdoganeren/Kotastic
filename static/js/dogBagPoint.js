export default class DogBagPoint {

    constructor(longitude, latitude, streetname){
        this.longitude = longitude;
        this.latitude = latitude;
        this.streetname = streetname;
    }

    get id() {
        return this.id;
    }
    set id(x) {
        this.id = x;
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

    get number() {
        return this.number;
    }
    set number(x) {
        this.number = x;
    }

    get onrtxt() {
        return this.onrtxt;
    }
    set onrtxt(x) {
        this.onrtxt = x;
    }
}