const luqs = require('lanuv-parser')

module.exports = async (req, res) => {
  const measurements = await luqs.aktuell()

  res.setHeader('Cache-Control', 's-maxage=3600')
  res.send({
    body: measurements
  })
}