// npm install request@2.88.0
// Hemdashboard

const request = require("request");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

geocode("Stockholm", (error, data)=>{
  if(error){
    return console.log(error)
  }
  console.log("Error: ", error);
  console.log("Data: ", data);
  
  forecast(data.latitude, data.longitude, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

})


