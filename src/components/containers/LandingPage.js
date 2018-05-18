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

  buttonClick() {
    // event.preventDefault()

    this.executeAddressSearch()
  }

  executeAddressSearch() {
    // event.preventDefault()

    console.log('Address Search Executed!')
    this.handleSelect()
  }

  // Handle change for controlled component
  handleChange(address) {

    this.setState({ address })
    // Log state change
    console.log(JSON.stringify(this.state.address))
  }

  // Handle user input to search box
  handleSelect(address) {
    // need to capture the return value 'latLng', probably by calling this from Results.js, then
    // passing the value down a promise chain

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      // .then(latLng => console.log('Success', latLng))
      .then(latLng => latLng)
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))


    // Call address object input by user on Google Maps Geolocate API
    // Returns object containing latitude & longitude coordinates
    // geocodeByAddress(address)
    //   // .then(results => getLatLng(results[0]))
    //   .then(results => getLatLng(results[0])) )
    //   .then(latLng => this.setState({latLng}) )
    //   .then(console.log('this.state after setState for latLng: ', this.state))
    //   .then(
    //     // Send search box input params to store asynchronously thru Redux
    //     this.props.dispatchLatLngFromSearchBoxToStore(this.state.latLng)
    //   )
    //   .catch(error => console.error('Error', error))
    //
    //   console.log('this.state:', this.state)

    // // Capture latLng object from component's state as parameter to be dispatched by dispatchLatLngFromSearchBoxToStore action
    // const latLngFromGeocodeApi = this.state.latLng
    // // Split address from search box for input into Zillow API
    // const paramsAddress = address.split(',', 1)
    // // Split citystatezip from search box for input into Zillow API
    // const arrayFromAddressAndCitystatezip = address.split(',')
    // const paramsCitystatezip = arrayFromAddressAndCitystatezip[1] + ',' + arrayFromAddressAndCitystatezip[2]
    //
    // // Store Zillow API parameters in client, to be passed into back-end
    // var params = {
    //   address: paramsAddress,
    //   citystatezip: paramsCitystatezip
    // }
    //
    // console.log('this.state:', params)
    // console.log('this.state:', this.state)
    // console.log('this.props:', this.props)
    //
    //
    //
    // // Call Zillow 'GetSearchResults' API, return listing results
    // this.props.getZillowListingResults(params)
    // .then(listingResults => {
    //   // Capture parameters needed to call Zillow 'GetComps' API, return comp results
    //   params.zpid = listingResults.body.data.response.results.result[0].zpid[0]
    //   params.count = 3
    //   // Call Zillow 'GetComps' API, return comp results
    //   this.props.getZillowCompsResults(params)
    // })
  }

  render() {

    return(
      <section className="bg-dark text-white space-xlg">

          <img alt="Image" src="dist/assets/img/laith-abdulkareem-96120-unsplash.jpg" className="bg-image opacity-40" />
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
                      <form className="card card-sm">
                          <div className="card-body row no-gutters align-items-center">
                              <div className="col-auto">
                                  <i className="icon-magnifying-glass h4 text-body"></i>
                              </div>

                              <div className="col">
                                  <LocationSearchInput value={this.state.address} onChange={this.handleChange.bind(this)} onSelect={this.handleSelect.bind(this)} searchHandler={this.executeAddressSearch.bind(this)} className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                              </div>

                              <div className="col-auto">
                                  <button className="btn btn-lg btn-success" type="submit" onClick={this.buttonClick.bind(this)} >Search</button>
                              </div>

                          </div>
                      </form>
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
    dispatchLatLngFromSearchBoxToStore: (latLngFromGeocodeApi) => dispatch(actions.dispatchLatLngFromSearchBoxToStore(latLngFromGeocodeApi))
	}
}

export default connect(stateToProps, dispatchToProps)(LandingPage)
