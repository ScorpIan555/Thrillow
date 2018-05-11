import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)
  const payload = action.data


	switch (action.type) {

		case constants.ZILLOW_LISTING_RECEIVED:
      // Capture request/response objects
      newState['req'] = payload.body.data.request
      newState['all'] = payload.body.data.response.results.result
      // Console log request/response objects
      console.log("listing reducer REQ: " + JSON.stringify(newState.req))
      console.log("listing reducer RES: " + JSON.stringify(newState.all))
      // Capture lat/long objects
      newState.all.latitude = payload.body.data.response.results.result[0].address[0].latitude[0]
      newState.all.longitude = payload.body.data.response.results.result[0].address[0].longitude[0]
      // Console log latitude/longitude objects
      console.log("listing reducer LATITUDE: " + JSON.stringify(newState.all.latitude))
      console.log("listing reducer LONGITUDE: " + JSON.stringify(newState.all.longitude))

      return newState

		case constants.ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:
			// Capture address object input by user into search box
			newState['userInputAddress'] = payload
			console.log('ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ', newState['userInputAddress'])

  default:
    return state
	}
}
