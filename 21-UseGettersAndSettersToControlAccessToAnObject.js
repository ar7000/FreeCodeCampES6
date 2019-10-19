class Thermostat{
    constructor(fTemp){
        this.celsius = (5/9) * (fTemp - 32);
    }

    get temperature(){
        return this.celsius;
    }

    set temperature(newTemp){
        this.celsius = newTemp;
    }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
