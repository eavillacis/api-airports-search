# Quick description
This is a test project in Nodejs for searching airports based on latitude and longitude. The airports come from a small database that I found online.

# Mongo DB - Docker
I used this image for mongodb: 
- sudo docker run -d -p 27017:27017 -v /Users/evillacis/Documents/Esteban/data-mongo:/data/db mongo

# Data 
The data can be found in the folder data -> airports.json

# Call example
POST - http://localhost:3000/airports
Body: 
````
{
	"latitude": 40.6913403,
	"longitude": -74.1006117,
	"area": 300
}
````

