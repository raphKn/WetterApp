import { convertWetterData, convertWindrichtung } from '../../../src/sagas/wetter/wetterConverter';

const fullJsonResponse = {
    coord: {
        lon: 8.27,
        lat: 50,
    },
    weather: [
        {
            id: 521,
            main: 'Rain',
            description: 'shower rain',
            icon: '09d',
        },
    ],
    base: 'stations',
    main: {
        temp: 277.17,
        pressure: 1005,
        humidity: 86,
        temp_min: 276.15,
        temp_max: 278.15,
    },
    visibility: 10000,
    wind: {
        speed: 2.1,
        deg: 190,
    },
    clouds: {
        all: 40,
    },
    dt: 1511968800,
    sys: {
        type: 1,
        id: 4881,
        message: 0.0027,
        country: 'DE',
        sunrise: 1511938916,
        sunset: 1511969325,
    },
    id: 2874225,
    name: 'Mainz',
    cod: 200,
};

describe('SagaUnderTest', () => {
    it('does anything', async () => {
        const expectedWetterData = {
            location: {
                latitude: 50,
                longitude: 8.27,
                stadtName: 'Mainz',
            },
            luft: {
                bewoelkung: 40,
                luftdruck: 1.005,
                luftfeuchtigkeit: 86,
            },
            temperaturen: {
                maximaleTemperatur: '5.0',
                mindestTemperatur: '3.0',
                temperatur: '4.0',
            },
            wetter: [
                {
                    description: 'shower rain',
                    icon: '09d',
                    main: 'Rain',
                },
            ],
            wind: {
                bezeichnung: 'Süd',
                geschwindigkeit: 2.1,
                imageRotation: 180,
            },
        };
        expect(convertWetterData(fullJsonResponse)).toEqual(expectedWetterData);
    });

    const n = { bezeichnung: 'Nord', imageRotation: 0 };
    const no = { bezeichnung: 'Nord-Ost', imageRotation: 45 };
    const o = { bezeichnung: 'Ost', imageRotation: 90 };
    const so = { bezeichnung: 'Süd-Ost', imageRotation: 135 };
    const s = { bezeichnung: 'Süd', imageRotation: 180 };
    const sw = { bezeichnung: 'Süd-West', imageRotation: 225 };
    const w = { bezeichnung: 'West', imageRotation: 270 };
    const nw = { bezeichnung: 'Nord-West', imageRotation: 315 };

    it('converts Windrichtung correctly', () => {
        expect(convertWindrichtung(0)).toEqual(n);
        expect(convertWindrichtung(45)).toEqual(no);
        expect(convertWindrichtung(90)).toEqual(o);
        expect(convertWindrichtung(135)).toEqual(so);
        expect(convertWindrichtung(180)).toEqual(s);
        expect(convertWindrichtung(225)).toEqual(sw);
        expect(convertWindrichtung(270)).toEqual(w);
        expect(convertWindrichtung(315)).toEqual(nw);
    });
});
