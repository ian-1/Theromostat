'use strict';

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
    it('increases the temperature by amount stated', () => {
      const defaultTemperature = thermostat.temperature();
      const increase = 3;
      thermostat.up(increase);
      expect(thermostat.temperature()).toEqual(defaultTemperature + increase);
    });
    
    it('increases the temperature 1 if no amount stated', () => {
      const defaultTemperature = thermostat.temperature();
      thermostat.up();
      expect(thermostat.temperature()).toEqual(defaultTemperature + 1);
    });

    it('wont increase the temperature beyond 25 when power save mode is on', () => {
      const defaultTemperature = thermostat.temperature();
      const increase = 25 - defaultTemperature + 1;
      thermostat.up(increase);
      expect(thermostat.temperature()).toEqual(25);
    });

    it('wont increase the temperature beyond 32 when power save mode is off', () => {
      const defaultTemperature = thermostat.temperature();
      const increase = 32 - defaultTemperature + 1;
      thermostat.togglePowerSavingMode()
      thermostat.up(increase);
      expect(thermostat.temperature()).toEqual(32);
    });
  });

  describe('#down', () => {
    it('decreases the temperature by amount requested', () => {
      const defaultTemperature = thermostat.temperature();
      const decrease = 2;
      thermostat.down(decrease);
      expect(thermostat.temperature()).toEqual(defaultTemperature - decrease);
    });

    it('decreases the temperature by 1 if no amount stated', () => {
      const defaultTemperature = thermostat.temperature();
      thermostat.down();
      expect(thermostat.temperature()).toEqual(defaultTemperature - 1);
    });

    it('wont decrease the temperature below 10 degrees', () => {
      const defaultTemperature = thermostat.temperature();
      const decrease = defaultTemperature - 10 + 1;
      thermostat.down(decrease);
      expect(thermostat.temperature()).toEqual(10);
    }); 
  });

  describe('#resetTemperature', () => {
    it('resets the temperature to 20', () => {
      const decrease = 8;
      thermostat.down(decrease);
      thermostat.resetTemperature()
      expect(thermostat.temperature()).toEqual(20);
    });
  });

  describe('#currentEnergyUsage', () => {
    it('returns low usage where temperature below 18', () => {
      const defaultTemperature = thermostat.temperature();
      const decrease = defaultTemperature - 18 + 1;
      thermostat.down(decrease);
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });

    it('returns high usage where temperature above or equal to 25', () => {
      const defaultTemperature = thermostat.temperature();
      const increase = 25 - defaultTemperature;
      thermostat.up(increase);
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });

    it('returns medium usage where temperature is in between', () => {
      const defaultTemperature = thermostat.temperature();
      const increase = 20 - defaultTemperature;
      thermostat.up(increase);
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    });
  });
});
