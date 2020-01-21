const luqs = require('lanuv-parser')

module.exports = async (req, res) => {

  const stations = await luqs()

  res.setHeader('Cache-Control', 's-maxage=86400')
  res.json({
    body: stations,
  })
}