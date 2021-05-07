class Thermostat {
  constructor() {
    this._defaultTemperature = 20;
    this._temperature = this._defaultTemperature;
    this._minTemperature = 10;
    this._maxTemperature = 32;
    this._powerSavingMode = true;
    this._maxTemperaturePowerSavingMode = 25;
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
    const maxTemperature = this._maximumTemperature();
    if(this._temperature > maxTemperature) {
      this._temperature = maxTemperature;
    };
  };

  down(decrease) {
    this._temperature -= decrease;
    if(this._temperature < this._minTemperature) {
      this._temperature = this._minTemperature;
    };
  };

  resetTemperature() {
    this._temperature = this._defaultTemperature;
  };

  _maximumTemperature() {
    if (this.powerSavingMode()) {
      return this._maxTemperaturePowerSavingMode;
    } else {
      return this._maxTemperature;
    }
  };
};
