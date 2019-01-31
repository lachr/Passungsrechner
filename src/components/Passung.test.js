import Toleranz from './Toleranz.js'
import Passung from './Passung.js'

test('Passung 100H7/p6', () => {
    expect(new Passung(new Toleranz(100, 'H7').getAbmass(),new Toleranz(100, 'p6').getAbmass()).get()).toMatchObject({
        GoB: "100.035",
        GuB: "100.000",
        GoW: "100.059",
        GuW: "100.037",
        TB: 35,
        TW: 22,
        Po: "-0.002",
        Pu: "-0.059",
        PT: "0.057",
        passungsart: 'Übermasspassung'
    });
});

test('Passung 8F8/e8', () => {
    expect(new Passung(new Toleranz(8, 'F8').getAbmass(),new Toleranz(8, 'e8').getAbmass()).get()).toMatchObject({
        GoB: "8.035",
        GuB: "8.013",
        GoW: "7.975",
        GuW: "7.953",
        TB: 22,
        TW: 22,
        Po: "0.082",
        Pu: "0.038",
        PT: "0.044",
        passungsart: 'Spielpassung'
    });
});