class Thermostat {
  constructor() {
   this._temperature = 20;
   this._minimumTemperature = 10;
   this._powerSavingMode = true
  };

  temperature() {
    return this._temperature;
  };

  powerSavingMode() {
    return this._powerSavingMode
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
