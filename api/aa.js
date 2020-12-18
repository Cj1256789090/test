


module.exports = (request, res) => {
  
  const { method, url } = request;
console.log(method, url)

  res.send(666)
}
