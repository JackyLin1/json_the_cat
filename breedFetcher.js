const arg = process.argv.slice(2);
const request = require('request');



request(`https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`, (error, response, body) => {
  
  if (response.statusCode !== 200) {
    console.log(error);
    return;
  }
  
  if (body === '[]') {
    console.log('This breed does not exist try another one');
    return;
  }
  
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body);
    console.log(data[0]);
    return;
  }
});