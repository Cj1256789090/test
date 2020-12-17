module.exports = (req, res) => {
  const {
    query: { name },
  } = req

  res.send(`Hello  sdfdfdfdf ${name}!`)
}