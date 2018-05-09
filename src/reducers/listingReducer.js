import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Listing reducer for state management of listing results pulled from Zillow API
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

var initialState = {
	all: null,
  // imageUrlArray: []
  // imageTestUrl: "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354
  //             &fov=90&heading=235&pitch=10
  //             &key=AIzaSyAGZkIyl-VNKwjTWBFFP_xb_R8nK2GQmzs"
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)
  const payload = action.data


	switch (action.type) {

		case constants.ZILLOW_LISTING_RECEIVED:
      // console.log('ZILLOW_LISTING_RECEIVED fired from reducer:  ' + payload)
      newState['req'] = payload.body.data.request
      newState['all'] = payload.body.data.response.results.result
      // newState['latitude'] = payload.body.data.response.results.result.address.latitude
      // newState.all.latitude = payload.body.data.response.results.result.address.latitude

      // console.log("listing reducer : " + JSON.stringify(newState))
      // console.log("listing reducer : " + JSON.stringify(newState.all))
      console.log("listing reducer REQ: " + JSON.stringify(newState.req))
      console.log("listing reducer RES: " + JSON.stringify(newState.all))
      // console.log("listing reducer LATITUDE: " + JSON.stringify(newState.all.latitude))

      return newState

  default:
    return state
	}
}
