import Grundtoleranzgrad from './Grundtoleranzgrad.js'

test('Grundtoleranz von N=100 IT=5', () => {
  expect(new Grundtoleranzgrad(100,5).get()).toBe(15);
});

test('Grundtoleranz von N=50 IT=5', () => {
    expect(new Grundtoleranzgrad(50,5).get()).toBe(11);
});

test('Grundtoleranz von N=3150 IT=18', () => {
    expect(new Grundtoleranzgrad(3150,18).get()).toBe(33000);
});

test('Grundtoleranz von N=0.5 IT=1', () => {
    expect(new Grundtoleranzgrad(0.5,1).get()).toBe(0.8);
});

test('Nennmass unterhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranzgrad(-0.5,1).get();
      }).toThrow(RangeError);
});

test('Nennmass oberhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranzgrad(3150.1,1).get();
      }).toThrow(RangeError);
});

test('IT unterhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranzgrad(100,0).get();
      }).toThrow(RangeError);
});

test('IT oberhalb Gültigkeitsbereich', () => {
    expect(() => {
        new Grundtoleranzgrad(100,19).get();
      }).toThrow(RangeError);
});