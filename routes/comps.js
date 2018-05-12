const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Zillow = require('node-zillow')

router.get('/', (req, res) => {
  const zwsid = process.env.ZWSID
  const zillow = new Zillow(zwsid)
  console.log('REQ', req.query)
  // console.log('REQ', req.params)

  var address1 = req.query.address
  var citystatezip1 = req.query.citystatezip
  console.log('REQ', req.query.address)

  // var address1 = req.params.address
  // var citystatezip1 = req.params.citystatezip
  // console.log('REQ', req.params.address)


  // const params = {
  //   // zpid: 58162086,
  //   // address: "25 Anthony St",
  //   // citystatezip: "06096"
  //   address: address1,
  //   citystatezip: citystatezip1
  // }
  //
  // const apiCallType = 'GetSearchResults'
  // zillow.get(apiCallType, params)
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

  const params = {
    zpid: 58162086,
    count: 10
    // address: req.body.address,
    // citystatezip: req.body.citystatezip
  }

  const apiCallType = 'GetComps'

  zillow.get(apiCallType, parameters)
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
