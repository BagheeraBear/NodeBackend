// npm install request@2.88.0
const request = require("request");

const url =
  "https://api.darksky.net/forecast/6c902bf517d835f075c66ac105f093d4/37.8267,-122.4233?units=si&lang=sv";

// Make request
request({ url: url, json: true }, (error, response) => {
  const tempdata = response.body.currently.temperature;
  const probdata = response.body.currently.precipProbability;
  if (error) {
    ("There was an error retrieving your info dude!");
  } else if (response.body.error) {
    console.log("Unable to find your data");
  } else {
    //console.log(response);
    // console.log(data)
    console.log("------------");

    console.log(response.body.daily.data[0].summary);
    console.log("It is currently: " + tempdata + " degrees out");
    console.log("There is a " + probdata + "% chance of rain.");
  }

  // Mapbox geocoding

  const mapurl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/stockholm.json?access_token=pk.eyJ1IjoidWxmc3dlZGluIiwiYSI6IkE1RVlzQnMifQ.0Pa-8iFRqrLbZp4Tl2uLyw";

  request({ url: mapurl, json: true }, (error, response) => {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];

    console.log("Long: " + longitude + "\nLat: " + latitude);
  });
});

/*
Stockholm
18.06861 59.32944
*/
