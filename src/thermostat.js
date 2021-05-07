class Thermostat {
  constructor() {
   this._temperature = 20;
   this._minimumTemperature = 10;
   this._powerSavingMode = true;
   this._maximumTemperaturePowerSavingMode = 25;
  };

  temperature() {
    return this._temperature;
  };

  powerSavingMode() {
    return this._powerSavingMode;
  };

  togglePowerSavingMode() {
    this._powerSavingMode = !this._powerSavingMode;
  };

  up(increase) {
    this._temperature += increase
    const maxTemperature = this._maximumTemperaturePowerSavingMode;
    if(this._temperature > maxTemperature) {
      this._temperature = maxTemperature;
    };
  };

  down(decrease) {
    this._temperature -= decrease
    if(this._temperature < this._minimumTemperature) {
      this._temperature = this._minimumTemperature
    };
  };
};
