// npm install request@2.88.0
const request = require("request")

const url = "https://api.darksky.net/forecast/6c902bf517d835f075c66ac105f093d4/37.8267,-122.4233?units=si&lang=sv"

// Make request
request({url: url, json: true}, (error, response)=>{
  const tempdata = response.body.currently.temperature
  const probdata = response.body.currently.precipProbability

  
    //console.log(response);
  // console.log(data)
  console.log("------------");
  
  console.log(response.body.daily.data[0].summary)
  console.log("It is currently: " + tempdata + " degrees out");
  console.log("There is a " + probdata + "% chance of rain.");
  
  
})

