const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Zillow = require('node-zillow')

router.get('/', (req, res) => {
  // Zillow Web Service Identifier (ZWSID), required for every request to Zillow web services
  const zwsid = process.env.ZWSID
  // Initialize Zillow API object
  const zillow = new Zillow(zwsid)
  // Capture required query parameters for 'GetSearchResults' Zillow API Call
  const params = {
    address: req.query.address,
    citystatezip: req.query.citystatezip,
  }
  // Zillow API Call Type
  const apiCallType = 'GetSearchResults'
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
    throw err
  })
})

router.get('/addressCall', (req, res) => {
  console.log('addressCall')
})

module.exports = router
