const luqs = require('lanuv-parser')

module.exports = async (req, res) => {
  const measurements = await luqs.aktuell()

  const measurementsOfASpecificStation = measurements.filter(measurement => measurement.kuerzel.toLowerCase() === req.query.station.toLowerCase())

  res.setHeader('Cache-Control', 's-maxage=3600')
  res.send({
    body: measurementsOfASpecificStation
  })
}