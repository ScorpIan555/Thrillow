import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
  listingZwid: ''
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)
  const payload = action.data

	switch (action.type) {
    case constants.ZILLOW_COMPS_RECEIVED:
      console.log('ZILLOW_COMPS_RECEIVED!')
      // Capture request/response objects
      newState['req'] = payload.body.data.request
      // newState['all'] = payload.body.data.response.results.result
      // Console log request/response objects
      console.log("compsReducer REQ: " + JSON.stringify(newState.req))
      // console.log("compsReducer RES: " + JSON.stringify(newState.all))
      // Capture lat/long objects
      // newState.all.latitude = payload.body.data.response.results.result[0].address[0].latitude[0]
      // newState.all.longitude = payload.body.data.response.results.result[0].address[0].longitude[0]
      // Console log latitude/longitude objects
      // console.log("compsReducer LATITUDE: " + JSON.stringify(newState.all.latitude))
      // console.log("compsReducer LONGITUDE: " + JSON.stringify(newState.all.longitude))


      return newState

  default:
    return state
  }
}
