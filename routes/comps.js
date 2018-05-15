const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Zillow = require('node-zillow')

router.get('/', (req, res) => {
  // Initialize Zillow API
  const zwsid = process.env.ZWSID
  const zillow = new Zillow(zwsid)
  // Capture required query parameters for 'GetComps' Zillow API Call
  const params = {
    count: req.query.count,
    zpid: req.query.zpid
  }
  // Zillow API Call Type
  const apiCallType = 'GetComps'

  zillow.get(apiCallType, params)
  .then( data => {
    res.json({
      confirmation: 'success',
      data: data
    })
    console.log(JSON.stringify(data))
    return data
  })
  .catch(err => {
    throw err
  })

  // const parameters = {
  //   zpid: 58162086,
  //
  //   // address: req.body.address,
  //   // citystatezip: req.body.citystatezip
  // }
  // //
  // const apiCallType = 'GetUpdatedPropertyDetails'
  //
  // zillow.get(apiCallType, parameters)
  // .then( data => {
  //   res.json({
  //     confirmation: 'success',
  //     data: data
  //   })
  //   console.log(JSON.stringify(data))
  //   return data
  // })
  // .catch(err => {
  //   throw err
  // })

})

module.exports = router
