// npm install request@2.88.0
// Hemdashboard
// const yargs = require("yargs");

const argv = process.argv[2];

const request = require("request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

geocode(argv, (error, data) => {
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecastData);
  });
});
