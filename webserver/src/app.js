const path = require('path');

const express = require('express');

const app = express();

// Paths for Express confog
const viewPath = path.join(__dirname, '../views')
const publicPath = path.join(__dirname, '../public')

// Setup handlebars and views location
app.set('view engine','hbs')

app.set('views', viewPath)

// console.log(path.join(__dirname, '../public'))
// console.log(__dirname);

// Customize the server - Serve up the public-directory  // Setup directory to serve
app.use(express.static(path.join(__dirname, '../public')))


app.get('', (req, res) => {
  res.render('index', {
      title: 'Weather App',
      name: 'Uffe Swedin'
  })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Uffe',
        helpmessage: 'You seem to need some help, yes?'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Uffe'
    })
})

app.get('/weather', (req, res) =>{
    res.send([
        {
            location: 'stockholm',
            forecast: 'it is going to be sunny all day long, time for a bath'
        },
        {
            location: 'prague',
            forecast: 'it is probably going to rain very much'
        }
    ])
})

app.get('/customers', (req, res) =>{
  res.send([
  {
      name: 'Skalbolaget AB',
      adress: 'Nullvägen 67'
  },
  { 
      name: 'Storbanken AB',
      adress: 'Storgatan 56'
  }
])
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000');
})

//



