import GrenzabmassWelle from './GrenzabmassWelle.js'

test('Grenzabmass Test 1', () => {
  expect(new GrenzabmassWelle(100,'g').get()).toEqual({es:-12});
});

test('Grenzabmass Test 2', () => {
  expect(new GrenzabmassWelle(3.1,'c').get()).toEqual({es:-70});
});

test('Grenzabmass Test 3', () => {
  expect(new GrenzabmassWelle(500,'zc').get()).toEqual({ei:2600});
});

test('Grenzabmass Test 4 == "-"', () => {
    expect(() => {
        new GrenzabmassWelle(13,'t').get();
      }).toThrow(RangeError);
});

test('Toleranzfeldlage existiert nicht', () => {
  expect(() => {
      new GrenzabmassWelle(50,'a').get();
    }).toThrow(RangeError);
});

test('Nennmass unterhalb Gültigkeit', () => {
  expect(() => {
      new GrenzabmassWelle(3,'t').get();
    }).toThrow(RangeError);
});

test('Nennmass oberhalb Gültigkeit', () => {
  expect(() => {
      new GrenzabmassWelle(500.1,'t').get();
    }).toThrow(RangeError);
});