'use strict';

class Thermostat {
  constructor() {
    this._DEFAULTTEMPERATURE = 20;
    this._MINTEMPERATURE = 10;
    this._MAXTEMPERATURE = 32;
    this._MAXTEMPERATUREPOWERSAVINGMODE = 25;
    this._temperature = this._DEFAULTTEMPERATURE;
    this._powerSavingMode = true;
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
    if(this._temperature < this._MINTEMPERATURE) {
      this._temperature = this._MINTEMPERATURE;
    };
  };

  resetTemperature() {
    this._temperature = this._DEFAULTTEMPERATURE;
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
      return this._MAXTEMPERATUREPOWERSAVINGMODE;
    } else {
      return this._MAXTEMPERATURE;
    }
  };
};
