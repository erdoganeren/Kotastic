class DogBagPoint {

    constructor(longitude, latitude, streetname){
        this.longitude = longitude;
        this.latitude = latitude;
        this.streetname = streetname;
    }

    getId() {
        return this.id;
    }
    setId(x) {
        this.id = x;
    }

    getNumber() {
        return this.number;
    }
    setNumber(x) {
        this.number = x;
    }

    getOnrtxt() {
        return this.onrtxt;
    }
    setOnrtxt(x) {
        this.onrtxt = x;
    }
}