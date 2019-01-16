import GrenzabmassBohrung from './GrenzabmassBohrung.js'

test('Grenzabmass Test 1', () => {
  expect(new GrenzabmassBohrung(100,'G').get()).toEqual({EI:12});
});

test('Grenzabmass Test 2', () => {
  expect(new GrenzabmassBohrung(3.1,'C').get()).toEqual({EI:70});
});

test('Grenzabmass Test 3', () => {
  expect(new GrenzabmassBohrung(500,'ZC').get()).toEqual({ES:-2600});
});

test('Grenzabmass == "-"', () => {
    expect(() => {
        new GrenzabmassBohrung(13,'T').get();
      }).toThrow(RangeError);
});

test('Toleranzfeldlage existiert nicht', () => {
  expect(() => {
      new GrenzabmassBohrung(50,'A').get();
    }).toThrow(RangeError);
});

test('Nennmass unterhalb Gültigkeit', () => {
  expect(() => {
      new GrenzabmassBohrung(3,'T').get();
    }).toThrow(RangeError);
});

test('Nennmass oberhalb Gültigkeit', () => {
  expect(() => {
      new GrenzabmassBohrung(500.1,'T').get();
    }).toThrow(RangeError);
});