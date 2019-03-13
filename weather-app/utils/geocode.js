// Mapbox Geocoding

const request = require("request")

const geocode=(address, callback)=>{

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoidWxmc3dlZGluIiwiYSI6IkE1RVlzQnMifQ.0Pa-8iFRqrLbZp4Tl2uLyw";

    request({url: url, json:true}, (error, response)=> {
       if(error){
         callback("Low level error (WiFI ok?)")  // implicit undefined if second parameter not given back
       } else if(response.body.features.length===0){
         callback("No location found with that name")
       } else {
         callback(undefined, {
           longitude: response.body.features[0].center[0],
           latitude: response.body.features[0].center[1],
           location: response.body.features[0].place_name 
         })
       }
    })

}

module.exports = geocode

