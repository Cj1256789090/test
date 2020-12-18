
const request = require('request');

module.exports = (request, res) => {
  
  request('https://cyjx.cool', (err, res, body) => {
    if (err) { return console.log(err); }
    res.send(body);
  });
  
}
