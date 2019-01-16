import Grundtoleranz from './Grundtoleranz.js'

test('Grundtoleranz von N=100 IT=5', () => {
  expect(new Grundtoleranz(100,5).get()).toEqual({IT:15});
});

test('Grundtoleranz von N=50.1 IT=6', () => {
    expect(new Grundtoleranz(50.1,6).get()).toEqual({IT:19});
});

test('Grundtoleranz von N=50 IT=5', () => {
    expect(new Grundtoleranz(50,5).get()).toEqual({IT:11});
});

test('Grundtoleranz von N=3150 IT=18', () => {
    expect(new Grundtoleranz(3150,18).get()).toEqual({IT:33000});
});

test('Grundtoleranz von N=0.5 IT=1', () => {
    expect(new Grundtoleranz(0.5,1).get()).toEqual({IT:0.8});
});

test('Nennmass unterhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranz(-0.5,1).get();
      }).toThrow(RangeError);
});

test('Nennmass oberhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranz(3150.1,1).get();
      }).toThrow(RangeError);
});

test('IT unterhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranz(100,0).get();
      }).toThrow(RangeError);
});

test('IT oberhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranz(100,19).get();
      }).toThrow(RangeError);
});