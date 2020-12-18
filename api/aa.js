
const request1 = require('request');

module.exports = (request, res) => {
  
  request1('https://cyjx.cool', (err, res, body) => {
    if (err) { return console.log(err); }
    res.send(body);
  });
  
}
