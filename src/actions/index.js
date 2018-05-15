import constants from '../constants'
import { TurboClient, SuperagentAsync } from '../utils'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	Application actions dispatched from Components for API calls and Redux, state management
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

export default {

	fetchUsers: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
		}
	},

	addUser: (params) => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
		}
	},

	// Unlike addUser, register() also maintains a session for login state. After calling
	// TurboClient.createUser(), the new user is logged in as well:
	register: (params) => {
		return dispatch => {
			return dispatch(TurboClient.createUser(params, constants.USER_CREATED))
		}
	},

	loginUser: (credentials) => {
		return dispatch => {
			return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
		}
	},

	currentUser: () => {
		return dispatch => {
			return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
		}
	},

	getZillowListingResults: (params) => {
		return dispatch => {
			// console.log('getZillowResults from actions/index.js - url:  ' + console.log(url))
			// console.log('getZillowListingResults from actions/index.js - params:  ', params)
			return dispatch(SuperagentAsync.asyncGet('/homes', params, constants.ZILLOW_LISTING_RECEIVED))
		}
	},

	getZillowCompsResults: (params) => {
		return dispatch => {
			// console.log('getZillowCompsResults from actions/index.js - params:  ', params)
			return dispatch(SuperagentAsync.asyncGet('/comps', params, constants.ZILLOW_COMPS_RECEIVED))
		}
	},

	dispatchLatLngFromSearchBoxToStore: (latLngFromGeocodeApi) => {
			return {
				type: constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX,
				data: latLngFromGeocodeApi
			}
		}

	// sendAddress: (latLngFromGeocodeApi) => {
	// 	return {
	// 		type: constants.LAT_LONG_RECEIVED_FROM_SEARCH_BOX,
	// 		data: latLngFromGeocodeApi
	// 	}
	// }
	// }

}
