function converTemperaturToCelsius(temperaturInKelvin) {
    return (temperaturInKelvin - 273.15).toFixed(1);
}

export function convertWindrichtung(deg) {
    const degStart = 360 - 337.5;
    const degStep = 45;
    const index = Math.floor(((deg + degStart) % 360) / degStep);
    const bezeichnungen = ['Nord', 'Nord-Ost', 'Ost', 'Süd-Ost', 'Süd', 'Süd-West', 'West', 'Nord-West'];
    return { bezeichnung: bezeichnungen[index], imageRotation: 45 * index };
}

export function convertWetterData(wetterdata) {
    const wetter = wetterdata.weather.map(object => ({ icon: object.icon, description: object.description, main: object.main }))
    return {
        location: {
            stadtName: wetterdata.name,
            longitude: wetterdata.coord.lon,
            latitude: wetterdata.coord.lat,
        },

        temperaturen: {
            temperatur: converTemperaturToCelsius(wetterdata.main.temp),
            mindestTemperatur: converTemperaturToCelsius(wetterdata.main.temp_min),
            maximaleTemperatur: converTemperaturToCelsius(wetterdata.main.temp_max),
        },

        luft: {
            bewoelkung: wetterdata.clouds.all,
            luftfeuchtigkeit: wetterdata.main.humidity,
            luftdruck: wetterdata.main.pressure / 1000,
        },
        wind: {
            geschwindigkeit: wetterdata.wind.speed,
            ...convertWindrichtung(wetterdata.wind.deg),
        },
        wetter,
    };
}

