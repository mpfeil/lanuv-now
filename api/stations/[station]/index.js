const luqs = require('lanuv-parser')

module.exports = async (req, res) => {
  const station = await luqs.station(req.query.station.toLowerCase())

  res.setHeader('Cache-Control', 's-maxage=3600')
  res.send({
    body: station
  })
}