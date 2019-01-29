import Toleranz from './Toleranz.js'

test('Abmass 100H7', () => {
    expect(new Toleranz(100, 'H7').getAbmass()).toMatchObject({
        es: 35,
        ei: 0
    });
});

test('Abmass 50P9', () => {
    expect(new Toleranz(50, 'P9').getAbmass()).toMatchObject({
        es: -26,
        ei: -88
    });
});

test('Abmass 188e8', () => {
    expect(new Toleranz(188, 'e8').getAbmass()).toMatchObject({
        es: -100,
        ei: -172
    });
});




test('Nennmass unterhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Toleranz(-0.5,'H7').getAbmass();
      }).toThrow(RangeError);
});

test('Nennmass oberhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Toleranz(400.1,'H7').getAbmass();
      }).toThrow(RangeError);
});

test('Toleranzklasse ungültig', () => {
    expect(() => {
        new Toleranz(100,'Q7').getAbmass();
      }).toThrow(RangeError);
});
