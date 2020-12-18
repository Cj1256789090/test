
const request1 = require('request');

module.exports = (request, res) => {
  
  request1('https://cyjx.cool', (err, res1, body) => {
    if (err) { return console.log(err); }
    res.send(body);
  });
  
}
