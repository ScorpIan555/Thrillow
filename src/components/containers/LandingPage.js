import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import actions from '../../actions'
import { connect } from 'react-redux'
import { LocationSearchInput } from '../containers'

class LandingPage extends Component {
  constructor() {
    super()
    this.state = {
      // Initialize component with address string utilized in Google Geolocate API
      address: '',
      // Initialize component with latLng object which stores latitude and longitude results from Geolocate API
      latLng: {}
    }
  }

  onButtonClick(address, event) {
    // event.preventDefault()
    console.log('Address Search Executed.event :', event)
    console.log('Address Search Executed!', address)

    this.handleSelect(address)
  }


  // Handle change for controlled component
  handleChange(address) {

    this.setState({ address })
    // Log state change
    console.log(JSON.stringify(this.state.address))
    console.log(JSON.stringify(address))
  }

  // Handle user input to search box
  handleSelect(address) {
    (address == 'null') ? address = this.state.address : address
    console.log('address: ', address)
    console.log('typeof(address):', typeof(address))
    // Call Google Maps Geolocator API, returns an object w/ a lat/lng properties
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
       // Simulatneously, asynchronously call both the dispatchToStore & the Zillow API call
      .then(latLng => this.addressCalls(latLng, address))
      .catch(error => console.error('Error', error))
  }

  // 1) Dispatch coordinates from Google Geolocate API to store for use in client
  // 2) Dispatch call to Zillow API thru the back-end
  addressCalls(latLng, address) {
    console.log('addressCalls.latLng: ', latLng)
    console.log('addressCalls.address: ', address)
    // Send coordinates from Geolocate API to store asynchronously thru Redux
    this.props.dispatchLatLngFromSearchBoxToStore(latLng)

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
    // Call Zillow 'GetSearchResults' API, return listing results
    this.props.getZillowListingResults(params)
      .then(listingResults => {
        // Capture parameters needed to call Zillow 'GetComps' API, return comp results
        params.zpid = listingResults.body.data.response.results.result[0].zpid[0]
        // Set required parameter 'count'
        params.count = 3
        // Call Zillow 'GetComps' API, return comp results
        this.props.getZillowCompsResults(params)
      })
  }

  render() {

    const addressValue = this.state.address
    const addressValueType = typeof(this.state.address)
    console.log('addressValue: ', addressValue)
    console.log('addressValueType: ', addressValueType)
    console.log('props:  ', this.props)

    return(
      <section className="bg-dark text-white space-xlg">

          <img alt="Image" src="https://lh3.googleusercontent.com/nVm77oyczOjVhgG9WKKp0YOT30gTCO7we42YJ9aCCPn2XkuLKVG__1DUZ7G4HNTagNMQ0aRkX0M2t3ocqOQsfCXfH84" className="bg-image opacity-40" />
          <div className="container">
              <div className="row text-center justify-content-center section-intro">
                  <div className="col-12 col-md-10 col-lg-8">
                      <h1 className="display-3">Welcome to Thrillow</h1>
                      <span className="lead">A Zillow Knockoff... And not even the good kind!</span>
                  </div>

              </div>

              <div className="row text-center ">
                  <div className="col">
                      <a href="#" className="btn btn-outline-secondary mb-1 text-white opacity-80">BUY</a>
                      <a href="#" className="btn btn-outline-secondary mb-1 text-white">RENT</a>
                      <a href="#" className="btn btn-outline-secondary mb-1 text-white">SELL</a>
                      <a href="#" className="btn btn-outline-secondary mb-1 text-white">ZESTIMATE</a>
                  </div>

              </div>

              <div className="row justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8">

                    <LocationSearchInput value={addressValue} onChange={this.handleChange.bind(this)} onSelect={this.handleSelect.bind(this)} onClick={this.onButtonClick.bind(this, addressValue)} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />

                  </div>
              </div>
              
          </div>

      </section>
    )

  }
}

const stateToProps = (state) => {

}

const dispatchToProps = (dispatch) => {
	return {
    // Dispatch Zillow 'GetSearchResults' API call to '/homes' route
    getZillowListingResults: (params) => dispatch(actions.getZillowListingResults(params)),
    // Dispatch Zillow 'GetSearchResults' API call to '/comps' route
    getZillowCompsResults: (params) => dispatch(actions.getZillowCompsResults(params)),
    // Dispatch latLng object returned from Google Maps Geolocate API call to store
    dispatchLatLngFromSearchBoxToStore: (latLng) => dispatch(actions.dispatchLatLngFromSearchBoxToStore(latLng))
	}
}

export default connect(stateToProps, dispatchToProps)(LandingPage)
