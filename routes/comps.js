const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Zillow = require('node-zillow')

router.get('/', (req, res) => {
  // https://www.zillow.com/howto/api/GetComps.htm
  // Zillow Web Service Identifier (ZWSID), required for every request to Zillow web services
  const zwsid = process.env.ZWSID
    // Initialize Zillow API
  const zillow = new Zillow(zwsid)
  // Capture required query parameters for 'GetComps' Zillow API Call
  const params = {
    count: req.query.count,
    zpid: req.query.zpid
  }
  // Zillow API Call Type
  const apiCallType = 'GetComps'
  // Zillow API Call
  zillow.get(apiCallType, params)
  .then( data => {
    res.json({
      confirmation: 'success',
      data: data
    })
    // console.log(JSON.stringify(data))
    return data
  })
  .catch(err => {
    console.log('err', err)
    throw err
  })
})

module.exports = router
