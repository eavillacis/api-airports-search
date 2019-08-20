module.exports = (app) => {
  const airports = require('../controllers/airport.controller.js');

  // Retrieve all Airports
  app.get('/airports', airports.findAll);

  // Retrieve all Airports by Latitude and Longitude
  app.post('/airports', airports.findByLocation);

}