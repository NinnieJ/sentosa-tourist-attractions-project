# Sentosa SmartPick

Sentosa SmartPick is a simple HTML, CSS, and JavaScript attraction recommender for Sentosa.
It uses user preferences and live weather data from data.gov.sg to recommend suitable attractions.

## Features

- Recommends Sentosa attractions based on interest, budget, time available, and group type.
- Uses the data.gov.sg 2-hour weather forecast API.
- Adjusts recommendations when the weather is rainy or stormy.
- Shows the top 5 recommended attractions with reasons and suitability scores.
- Runs as a static website with no build tools required.

## Files

- `index.html` - Page structure and form controls.
- `styles.css` - Layout, responsive design, and visual styling.
- `script.js` - Attraction data, API call, scoring logic, and recommendation display.
- `README.md` - Project explanation.

## API Used

The project uses this public data.gov.sg API:

```text
https://api.data.gov.sg/v1/environment/2-hour-weather-forecast
```

The program searches the API response for the Sentosa forecast. If Sentosa is unavailable, it falls back to another forecast and still lets the recommender work.

## How To Run

Open `index.html` in a browser.

If the live API request is blocked by the browser or network, the website will still recommend attractions using the user's selected preferences.

## How The Recommendation Works

Each attraction has information such as:

- categories
- budget level
- suitable visit duration
- suitable group types
- indoor, outdoor, or mixed weather suitability

The JavaScript gives points when an attraction matches the user's choices. It also gives extra points to indoor attractions during rainy weather and reduces points for outdoor attractions when rain or thunderstorms are detected.

## Possible Improvements

- Add attraction ticket prices.
- Add opening hours.
- Add images for each attraction.
- Add a map link for each attraction.
- Save the user's last selected preferences with local storage.
