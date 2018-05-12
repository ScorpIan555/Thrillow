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

      return newState

  default:
    return state
  }
}
