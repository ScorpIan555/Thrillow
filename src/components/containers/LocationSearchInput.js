import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import actions from '../../actions'

class LocationSearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      latLng: [] 
    }
  }
  // Handle change for controlled component
  handleChange(address) {
    this.setState({ address })
    console.log(this.state.address)
  }
  // Handle select for controlled component
  handleSelect(address) {
    console.log('address: ', address)
    console.log('this.state: ', this.state)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({latLng}) )
      .catch(error => console.error('Error', error))

    //Log latLng
    console.log('this.state after setState for latLng: ', this.state)
    // Split address from search box for input into Zillow API
    const paramsAddress = address.split(',', 1)
    // Split citystatezip from search box for input into Zillow API
    const arrayFromAddressAndCitystatezip = address.split(',')
    const citystatezip = arrayFromAddressAndCitystatezip[1] + ',' + arrayFromAddressAndCitystatezip[2]
    // Store Zillow API parameters in client, to be passed into back-end
    var params = {
      address: paramsAddress,
      citystatezip: citystatezip,
      latLng: this.state.latLng
    }
    // Send search box input params to back-end thru Redux
    this.props.dispatchUserInputAddressAndLatLng(params)

    // this.setState({
    //
    // })
  }

  render() {

    console.log(this.state)
    console.log(this.props)

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
    dispatchUserInputAddressAndLatLng: (params) => dispatch(actions.dispatchUserInputAddressAndLatLng(params)),
    // dispatchLatLngFromSearchBoxToStore: (params) => dispatch(actions.dispatchLatLngFromSearchBoxToStore(params))
  }
}

export default connect(stateToProps, dispatchToProps)(LocationSearchInput)
