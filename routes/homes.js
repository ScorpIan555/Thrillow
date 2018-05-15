const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const Zillow = require('node-zillow')

router.get('/', (req, res) => {
  const zwsid = process.env.ZWSID
  const zillow = new Zillow(zwsid)
  // console.log('REQ', req.query)
  // console.log('REQ', req.params)

  var address = req.query.address
  var citystatezip = req.query.citystatezip
  // var latLng =  {
  //   lat: req.query.latLng.lat,
  //   lng: req.query.latLng.lng
  // }
  // var count = req.query.count
  // var zpid = req.query.zpid
  // console.log('REQ', req.query.address)
  // console.log('REQ', req.query.citystatezip)
  // console.log('REQ', req.query.latLng.lat)
  // console.log('REQ', req.query.latLng.lng)
  // console.log('REQ', req.query.latLng.count)
  // console.log('REQ', req.query.latLng.zpid)


  const params = {
    address: address,
    citystatezip: citystatezip,
    // latLng: {
    //   lat: latLng.lat,
    //   lng: latLng.lng
    // },
    // count: count,
    // zpid: zpid
  }

  const apiCallType = 'GetSearchResults'
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
  //
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
