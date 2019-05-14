// npm install request@2.88.0
// Hemdashboard
// const yargs = require("yargs");

const argv = process.argv[2];

const request = require("request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

<<<<<<< HEAD
geocode(argv, (error, data) => {
  if (error) {
    return console.log(error);
  }
=======
const city = process.argv[2]

if(city.length > 1) {

  
  geocode(city, (error, data)=>{
    if(error){
      return console.log(error)
    }
    // console.log("Error: ", error);
    // console.log("Data: ", data);
    
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      
      if(error){
        return console.log(error)
      }
      // console.log('Error', error)
      // console.log('Data', data)
      console.log(data.location)
      console.log(forecastData)
      
      
    })
    
  })
  
}else {
  console.log("please provide a city name")
}
>>>>>>> 382830bf0e28ad61b79d4fc062d0c4c1d7fa16a3

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.location);
    console.log(forecastData);
  });
});
