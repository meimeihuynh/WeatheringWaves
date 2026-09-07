# WeatheringWaves


## Prosjektbeskrivelse

WeatheringWaves er en vær nettside med data fra API.

## Funksjonelle Krav

- Vise vær for en område.
- Vise område
- Handle loading

## Funksjoner

- Viser en loading-melding mens data hentes
- Viser temperatur
- Viser luftfuktighet
- Viser vindstyrke
- Viser vindretning med en pil
- Viser værdata for et valgt område 

## Teknologier

Jeg har valgt disse teknologiene fordi at jeg vil utvikle meg med disse og kunne bruke flere andre teknologier i sammenheng.

- React
- Vite
- JavaScript
- CSS
- MET Norway Locationforecast API

# Slik kjører du det

1. Klon repository
2. Åpne prosjektmappen i VS Code
3. Kjør `npm install`
4. Kjør `npm run dev`
5. Åpne den lokale URL-en som vises i terminalen

## API

Dette prosjektet bruker MET Norway Locationforecast API for å hente værdata.

API documentation:
https://api.met.no/weatherapi/locationforecast/2.0/documentation


# Dokumentasjon
## Økt 1
- ### Planlegging

Jeg har planlagt å lage en værside som heter WeatheringWaves som henter data fra API.
API valg: I valgte MET Norway Locationforecast API fordi den gir data om være som kan bli brukt i min app og det var en anbefaling.
I documentation for api, forklarer den hvordan den brukes og hva slags data den gir.

- ### API endpoint

I locationforcast documentation fant jeg denne api endpoint som ble brukt for denne prosjekten 
"https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58".

Gjennom den prosessen har jeg lært:

- lat = latitute
- lon = longitute

Disse koordinatene bestemmer hvilket sted API-et gir værinformasjon for.

## Økt 2

- ### API testing

Før jeg testet det i REACT, åpnet jeg endpoint i nettleser og så på tilbakemeldingen.
API-et returnerte JSON.
Jeg inspiserte JSON-filen og fant informasjon som:

air_temperature
relative_humidity
wind_speed
wind_from_direction
air_pressure_at_sea_level

Jeg fikk vite hvor informasjonen ligger i JSON.
API-er returnerer ikke alle data i nøyaktig samme struktur, så man må vanligvis se på dokumentasjonen og/eller inspisere JSON-svaret.

- ### testing med javaScript

Det generelle ide var:

    fetch(API_URL)
        .then(response => response.json())  /*konverterte svaret til JSON*/
        .then(data => {
            console.log(data); /*logget dataene slik at jeg kunne se hva jeg fikk*/
         });

Dette gjorde slik at jeg kunne se vær data i console på nettleseren.

- ### weatherapi.js
Jeg lagde en seperat fil for weatherapi istedet for å ha det direkte i App.jsx; dette var for å ha api-relatert kode seperat fra UI koden.

    src/
        App.jsx
        weatherApi.js
        main.jsx
        index.css

- ### Handle loading
En av kravene jeg satt opp for denne prosjektet.

Jeg brukte en betinget operatør: 

    {weatherData ? (
          // show weather
        ) : (
         <p>Loading weather...</p>
        )}

Når weatherData er "null" vil brukere se "Loading weather..." istedet.
Med engang API responderer vises vær informasjonen.


## Økt 3

- ### Vær verdier

Jeg lærte hvordan å navigere gjennom JSON API sturktur.
For eksempel: 

    weatherData.properties.timeseries[0].data.instant.details.air_temperature

Til slutt hentet jeg ut detaljene

    const details = 
        weatherData?.properties?.timeseries?.[0]?.data?.instant?.details;

sånn at jeg kunne skrive:
    
    <p>
        Temperature:{" "}
        {details?.air_temperature}
        °C
    </p>

- ### vise område

I koden la jeg til en område variable

    const location = "test location"

og viste det

    <h2>{location}</h2>

Jeg lærte at API-et fra metapi bruker longitute og latitute for å bestemme værposisjonen, mens navnet man viser er noe jeg oppgir selv.

- ### Lage vind retning visuell

Jeg tenkte at å bare vise vind retningen var ikke like intuitivt som å ha en pil.
Derfor lagde jeg seperat react komponent:

    src/
        components/
            arrow.jsx

Komponenten mottar vindretningen som en propell:

    function Arrow({direction}) {
        return (   
        <div
        className="wind-arrow"
            style={{ transform: `rotate(${direction}deg)` }}
        >
        ↑
        </div>
        );
    }

    export default Arrow

Jeg importerer komponenten i App.jsx og setter den i koden.

    <WindArrow direction={details?.wind_from_direction} />

- ### Testing og Feilsøking

Før jeg koblet API-et til React-prosjektet, testet jeg API-endepunktet separat i nettleseren. Dette gjorde jeg for å se hvilken type data API-et returnerte og for å finne ut hvor i JSON-strukturen informasjonen jeg trengte lå.

Jeg testet også API-et med fetch() og response.json() for å kontrollere at dataene kunne hentes og brukes i JavaScript.

- Testet API-endepunktet direkte i nettleseren.
- Testet API-data med fetch() og console.log().
- Undersøkte JSON-strukturen for å finne riktige værverdier.
- Testet loading-melding før API-dataene ble lastet inn.
- Testet at værdata og område ble vist riktig.

- ### Forbedringer


# Videre utvikling

- La brukere søke etter forskjellige steder
- Legg til en stedsvelger
- Vis en lengre værmelding
- Forbedre det visuelle designet
- Legg til værikoner