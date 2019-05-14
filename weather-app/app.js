// npm install request@2.88.0
// Hemdashboard

const request = require("request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

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

