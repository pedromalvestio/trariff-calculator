const { productA, productB, calulator } = require('../../src/services/TariffService');

test('Product A should return 830 EUR for 3500kWh/year', () => {
    const result = productA(3500);
    expect(result.name).toBe('basic electricity tariff');
    expect(result.annualCost).toBe(830);
});

test('Product B should return 800 EUR for 3500kWh/year', () => {
    const result = productB(3500);
    expect(result.name).toBe('Packaged tariff');
    expect(result.annualCost).toBe(800);
});

test('Product A should return 1320 EUR for 6000kWh/year', () => {
    const result = productA(6000);
    expect(result.name).toBe('basic electricity tariff');
    expect(result.annualCost).toBe(1380);
});

test('Product B should return 1400 EUR for 6000kWh/year', () => {
    const result = productB(6000);
    expect(result.name).toBe('Packaged tariff');
    expect(result.annualCost).toBe(1400);
});