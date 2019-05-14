// Darksky Weather Forecast
const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/6c902bf517d835f075c66ac105f093d4/" +
    longitude +
    "," +
    latitude +
    "?units=si&lang=sv";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("There was a low level error retrieving your info dude!");
    } else if (response.body.error) {
      callback("Unable to find your data in response data");
<<<<<<< HEAD
    } else {
      // console.log(response.body)
      callback(
        undefined,
        response.body.daily.data[0].summary +
          "Temperaturen är: " +
          response.body.currently.temperature
      );
=======
    } 
    else {
      //console.log(response.body)
      callback(undefined, response.body.daily.data[0].summary + "Temperaturen är: " + response.body.currently.temperature)
>>>>>>> 382830bf0e28ad61b79d4fc062d0c4c1d7fa16a3
    }
  });
};

module.exports = forecast;

//     {
//     const tempdata = response.body.currently.temperature;
//     const probdata = response.body.currently.precipProbability;
//     console.log();
//     console.log("It is currently: " + tempdata + " degrees out");
//     console.log("There is a " + probdata + "% chance of rain.");
