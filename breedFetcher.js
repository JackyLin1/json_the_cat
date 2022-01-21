const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (response.statusCode !== 200 && body === null) {
      console.log('error:', error)
      return;
    }
    
    if (body === '[]') {
      console.log('This breed does not exist try another one');
      return;
    }
    
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      console.log(data[0].description);
      
    }
  });
};

module.exports = {fetchBreedDescription};