import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import actions from '../../actions'

class LocationSearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    console.log('this.state:', this.state)
    console.log('this.props:', this.props)

    return (
        <div >
          <div className="card card-sm">
              <div style={localStyle.cardBody} className="card-body row no-gutters align-items-center">
                <div className="col-1">
                    <i className="icon-magnifying-glass h4 text-body"></i>
                </div>

                <PlacesAutocomplete
                  value={this.props.value}
                  onChange={this.props.onChange}
                  onSelect={this.props.onSelect}
                  onClick={this.props.onClick}
                >
                  {({ getInputProps, suggestions, getSuggestionItemProps }) => (


                      <div className="col-8">
                        <input style={localStyle.input}
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
                <div className="col-1">

                </div>
                <div className="col-2">
                    <button className="btn btn-lg btn-success" onClick={this.props.onClicik} >Search</button>
                </div>
              </div>
          </div>
        </div>

    )
  }
}

const localStyle = {
  input: {
    width: '400px',
    height: '55px',
    border: 'none',
    padding: '0px',
    textAlign: 'bottom',
    // textAlignVerticle: 'end',
    // marginBottom: '0px'
  },
  cardBody: {
    padding: '0px'
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
