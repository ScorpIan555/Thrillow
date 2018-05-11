import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import actions from '../../actions'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      latLng: ''
    }
  }

  handleChange(address) {
    this.setState({ address })
    console.log(this.state.address)
  }

  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ latLng }) )
      .catch(error => console.error('Error', error))

    console.log(address)
    console.log("ADDRESS:  ", JSON.stringify(address))

    const paramsAddress = address.split(',', 1)

    const arrayFromAddressAndCitystatezip = address.split(',')
    const citystatezip = arrayFromAddressAndCitystatezip[1] + ',' + arrayFromAddressAndCitystatezip[2]

    console.log(paramsAddress)
    console.log("PARAMS ADDRESS:  ", JSON.stringify(paramsAddress))
    console.log(citystatezip)
    console.log("CITYSTATEZIP:  ", JSON.stringify(citystatezip))

    var params = {
      address: paramsAddress,
      citystatezip: citystatezip
    }
    this.props.dispatchUserInputAddressAndLatLng(params)
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
  }
}

export default connect(stateToProps, dispatchToProps)(LocationSearchInput)
