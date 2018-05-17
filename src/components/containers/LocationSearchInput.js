import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import actions from '../../actions'

class LocationSearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // Initialize component with address string utilized in Google Geolocate API
      address: '',
      // Initialize component with latLng object which stores latitude and longitude results from Geolocate API
      latLng: {}
    }
  }

  // Handle change for controlled component
  handleChange(address) {

    this.setState({ address })
    // Log state change
    console.log(JSON.stringify(this.state.address))
  }

  // Handle user input to search box
  handleSelect(address) {

    // Call address object input by user on Google Maps Geolocate API
    // Returns object containing latitude & longitude coordinates
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({latLng}) )
      .then(console.log('this.state after setState for latLng: ', this.state))
      .catch(error => console.error('Error', error))

      console.log('this.state:', this.state)
      
    // Capture latLng object from component's state as parameter to be dispatched by dispatchLatLngFromSearchBoxToStore action
    const latLngFromGeocodeApi = this.state.latLng
    // Split address from search box for input into Zillow API
    const paramsAddress = address.split(',', 1)
    // Split citystatezip from search box for input into Zillow API
    const arrayFromAddressAndCitystatezip = address.split(',')
    const paramsCitystatezip = arrayFromAddressAndCitystatezip[1] + ',' + arrayFromAddressAndCitystatezip[2]

    // Store Zillow API parameters in client, to be passed into back-end
    var params = {
      address: paramsAddress,
      citystatezip: paramsCitystatezip
    }

    console.log('this.state:', params)
    console.log('this.state:', this.state)
    console.log('this.props:', this.props)

    // Send search box input params to store asynchronously thru Redux
    this.props.dispatchLatLngFromSearchBoxToStore(latLngFromGeocodeApi)

    // Call Zillow 'GetSearchResults' API, return listing results
    this.props.getZillowListingResults(params)
    .then(listingResults => {
      // Capture parameters needed to call Zillow 'GetComps' API, return comp results
      params.zpid = listingResults.body.data.response.results.result[0].zpid[0]
      params.count = 3
      // Call Zillow 'GetComps' API, return comp results
      this.props.getZillowCompsResults(params)
    })
  }

  render() {

    console.log('this.state:', this.state)
    console.log('this.props:', this.props)

    return (

        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange.bind(this)}
          onSelect={this.handleSelect.bind(this)}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input'
                })}
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'
                  // inline style for demonstration purpose
                  const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' }
                  return (
                    <div {...getSuggestionItemProps(suggestion, { className, style })}>
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

    )
  }
}

const stateToProps = (state) => {
  return {

  }
}

const dispatchToProps = (dispatch) => {
  return {
    // Dispatch Zillow 'GetSearchResults' API call to '/homes' route
    getZillowListingResults: (params) => dispatch(actions.getZillowListingResults(params)),
    // Dispatch Zillow 'GetSearchResults' API call to '/comps' route
    getZillowCompsResults: (params) => dispatch(actions.getZillowCompsResults(params)),
    // Dispatch latLng object returned from Google Maps Geolocate API call to store
    dispatchLatLngFromSearchBoxToStore: (latLngFromGeocodeApi) => dispatch(actions.dispatchLatLngFromSearchBoxToStore(latLngFromGeocodeApi))
  }
}

export default connect(stateToProps, dispatchToProps)(LocationSearchInput)
