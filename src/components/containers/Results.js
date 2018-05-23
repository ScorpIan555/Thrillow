import React, { Component } from 'react'
import { Listing } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      // location: {}
    }
  }

  componentDidMount() {
    console.log('Results componentDidMount, this.props: ', this.props)
    // geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   // .then(latLng => console.log('latLng', latLng) )
    //   .then(latLng => this.setState({latLng}) )
    //   .catch(error => console.error('Error', error))

    var params = {
      address: this.props.listing.all[0].address,  //
      citystatezip: this.props.listing.all[1].citystatezip, //
      count: this.props.listing.all[2].count, //
      zpid: this.props.listing.all[3].zpid
    }

    this.props.getZillowListingResults(params)
    .then(
      this.props.getZillowCompsResults(params)
    )
    console.log('ZPID:  ', JSON.stringify(params.zpid))
  }

render() {
  // Capture principal listing
  // Capture latitude and longitude from stateToProps (Zillow)
  let listingLat = this.props.latLng || []
  let listingLng = this.props.latLng || []
  // Capture latitude and longitude from stateToProps (Google Maps)
  // let listingLat = this.props.listing.all[0].latLng[0].lat || []
  // let listingLng = this.props.listing.all[0].latLng[0].lng || []
  // Logs
  console.log('this.props:  ', this.props)
  console.log('this.props.listing:  ', this.props.listing)
  console.log('this.props.comps:  ', this.props.comps)
  console.log('this.props.listing.latLng:  ', this.props.listing.latLng)
  console.log('this.props.latLng:  ', this.props.latLng)
  console.log('listingLat ', listingLat)
  console.log('listingLng ', listingLng)
  // console.log(typeof(this.props.listing))
  // console.log(typeof(listingLng))

  // Capture comps array
  let comps = this.props.comps.all.comparables || []

  console.log('comps: ', comps)

  return (
      <section>
        <div className="container">
            <div className="row justify-content-center text-center section-intro">
                <div className="col-12 col-md-9 col-lg-8">
                    <span className="title-decorative">Perfect for Startups</span>
                    <h3 className="display-4">Potential rental deals</h3>
                    <span className="lead">803 rentals listed under their Rent Zestimate in New York</span>

                </div>
            </div>


            <ul className="feature-list feature-list-lg">
                <li className="row justify-content-center align-items-center">

                    <Listing lat={listingLat.lat} lng={listingLng.lng} />

                </li>
                <li className="row justify-content-center align-items-center">
                  <button type="button" class="btn btn-primary btn-lg">Show Listings</button>
                </li>
            </ul>

            {
              comps !== null ?
              <div>
                <div className="row justify-content-center text-center section-intro">

                    <div className="col-12 col-md-9 col-lg-8">
                        <span className="title-decorative">Perfect for Startups</span>
                        <h3 className="display-4">Potential rental deals</h3>
                        <span className="lead">803 rentals listed under their Rent Zestimate in New York</span>

                    </div>
                </div>


                <ul className="feature-list feature-list-lg">
                    <li className="row justify-content-center align-items-center">

                      { comps.map((comp, i) => {
                          return (
                            <div className="col-sm">
                              <Listing key={comp.zpid} lat={comp.address[0].latitude[0]} lng={comp.address[0].longitude[0]} />
                            </div>
                          )
                        })
                      }

                    </li>
                    <li className="row justify-content-center align-items-center">
                      <button type="button" class="btn btn-primary btn-lg">Show Listings</button>
                    </li>
                </ul>
              </div>


              : null


            }


        </div>

      </section>
    )
  }
}


const stateToProps = (state) => {
  return {
    listing: state.listing,
    comps: state.comps,
    latLng: state.listing.latLng
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getZillowListingResults: (params) => dispatch(actions.getZillowListingResults(params)),
    getZillowCompsResults: (params) => dispatch(actions.getZillowCompsResults(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Results)
