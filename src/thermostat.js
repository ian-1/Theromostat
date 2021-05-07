class Thermostat {
  constructor() {
   this._temperature = 20;
   this._minimumTemperature = 10;
  };

  temperature() {
    return this._temperature;
  };

  up(increase) {
    this._temperature += increase
  };

  down(decrease) {
    this._temperature -= decrease
    if(this._temperature < this._minimumTemperature) {
      this._temperature = this._minimumTemperature
    };
  };
};
