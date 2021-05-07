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

  describe('#powerSavingMode', () => {
    it('initialises with power saving mode on', () => {
      expect(thermostat.powerSavingMode()).toEqual(true);
    });
  });

  describe('#togglePowerSavingMode', () => {
    it('turns power saving mode off', () => {
      thermostat.togglePowerSavingMode()
      expect(thermostat.powerSavingMode()).toEqual(false);
    });

    it('turns power saving mode back on', () => {
      thermostat.togglePowerSavingMode()
      thermostat.togglePowerSavingMode()
      expect(thermostat.powerSavingMode()).toEqual(true);
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

    it('wont decrease the temperature below 10 degrees', () => {
      const defaultTemperature = thermostat.temperature();
      const decrease = defaultTemperature - 9;
      thermostat.down(decrease);
      expect(thermostat.temperature()).toEqual(10);
    }); 
  });
});
