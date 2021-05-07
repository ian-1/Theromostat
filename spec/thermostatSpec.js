describe('Thermostat', () => {
  let thermostat;

  beforeEach( () => {
    thermostat = new Thermostat();
  });

  describe('#temperature', () => {
    it('initialises at 20 degrees', () => {
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('#up', () => {
    it('increases the temperature', () => {
      const defaultTemperature = thermostat.temperature();
      const increase = 3;
      thermostat.up(increase);
      expect(thermostat.temperature()).toEqual(defaultTemperature + increase);
    });
  });

  describe('#down', () => {
    it('decreases the temperature', () => {
      const defaultTemperature = thermostat.temperature();
      const decrease = 2;
      thermostat.down(decrease);
      expect(thermostat.temperature()).toEqual(defaultTemperature - decrease);
    });
  });
});
