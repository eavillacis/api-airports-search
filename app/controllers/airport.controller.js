const Airport = require('../models/airport.model.js');

exports.findAll = (req, res) => {
  Airport.find()
  .then(airports => {
      res.send(airports);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving airports."
      });
  });
};

exports.findByLocation = (req, res) => {
    // Validate Request
    if(!req.body.latitude) {
        return res.status(400).send({
            message: "Latitude is required"
        });
    }
    if(!req.body.longitude) {
        return res.status(400).send({
            message: "Longitude is required"
        });
    }

    var area = 100;
    if(req.body.area) {
        area = req.body.area;
    }

    // Find by lat and lon: 
    // Earth radius: 6371 considered for the calculation of the searched area
    // TODO: change where to aggregate query for mongoDB
    function test() { 
        return `
            Math.acos(Math.sin((Math.PI * ${req.body.latitude}) / 180) * Math.sin((Math.PI * this.latitude) / 180) + 
            Math.cos((Math.PI * ${req.body.latitude}) / 180) * Math.cos((Math.PI * this.latitude) / 180) * Math.cos(((Math.PI * this.longitude) / 180) - 
            ((Math.PI * ${req.body.longitude}) / 180))) * 6371 <= ${req.body.area}
        `
    }

    var query = { 
        $where: test()
    }
    
    Airport.find(query)
    .then(airports => {
        res.send(airports);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving airports."
        });
    });
}