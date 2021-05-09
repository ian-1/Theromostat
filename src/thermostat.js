'use strict';

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

  up(increase = 1) {
    this._temperature += increase
    const maxTemperature = this._maximumTemperature();
    if(this._temperature > maxTemperature) {
      this._temperature = maxTemperature;
    };
  };

  down(decrease = 1) {
    this._temperature -= decrease;
    if(this._temperature < this._minTemperature) {
      this._temperature = this._minTemperature;
    };
  };

  resetTemperature() {
    this._temperature = this._defaultTemperature;
  };

  currentEnergyUsage() {
    if (this._temperature < 18) {
      return 'low-usage';
    } else if (this._temperature < 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    };
  };

  _maximumTemperature() {
    if (this.powerSavingMode()) {
      return this._maxTemperaturePowerSavingMode;
    } else {
      return this._maxTemperature;
    }
  };
};
