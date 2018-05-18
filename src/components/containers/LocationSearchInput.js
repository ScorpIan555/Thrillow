import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import actions from '../../actions'

class LocationSearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // // Initialize component with address string utilized in Google Geolocate API
      // address: '',
      // // Initialize component with latLng object which stores latitude and longitude results from Geolocate API
      // latLng: {}
    }
  }

  render() {

    console.log('this.state:', this.state)
    console.log('this.props:', this.props)

    return (
      

        <PlacesAutocomplete
          value={this.props.value}
          onChange={this.props.onChange}
          onSelect={this.props.onSelect}

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

  }
}

export default connect(stateToProps, dispatchToProps)(LocationSearchInput)
