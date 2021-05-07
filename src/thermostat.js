class Thermostat {
  constructor() {
   this._temperature = 20;
  };

  temperature() {
    return this._temperature;
  };

  up(increase) {
    this._temperature += increase
  };

  down(decrease) {
    this._temperature -= decrease
  };
};
