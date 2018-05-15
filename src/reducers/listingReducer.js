import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

const initialState = {
	all: [
			{ address: '22 Dale Street' },
			{ citystatezip: 'Windsor Locks, CT' },
			{ latLng: {
							lat: 41.9334208,
							lng: -72.6571319
						}
					},
			{ count: 3 },
			{ zpid: '58162520' },
	]
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)
  const payload = action.data

	switch (action.type) {

		case constants.ZILLOW_LISTING_RECEIVED:
			console.log('ZILLOW_LISTING_RECEIVED!')

      // Capture request/response objects
      newState['req'] = payload.body.data.request
      newState['all'] = payload.body.data.response.results.result
      // Console log request/response objects
      console.log("listingReducer REQ: " + JSON.stringify(newState.req))
      console.log("listingReducer RES: " + JSON.stringify(newState.all))

      // Capture lat/long objects
      newState.all.latitude = payload.body.data.response.results.result[0].address[0].latitude[0]
      newState.all.longitude = payload.body.data.response.results.result[0].address[0].longitude[0]
      // Console log latitude/longitude objects
      console.log("listingReducer LATITUDE: " + JSON.stringify(newState.all.latitude))
      console.log("listingReducer LONGITUDE: " + JSON.stringify(newState.all.longitude))

      return newState

		case constants.ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:
			// Capture address object input by user into search box
			newState['userInputAddress'] = payload.body.data.response.results.result
			// Console log response objects
			console.log('ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ', newState['userInputAddress'])
			console.log('ADDRESS_INPUT_RECEIVED_FROM_USER_INPUT:  ', JSON.stringify(newState['userInputAddress']))



		// case constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX:
		// 	// Capture latLng object input by user into search box
		// 	console.log('LAT_LONG_RECEIVED_FROM_SEARCH_BOX!')
		// 	return newState

  default:
    return state
	}
}
