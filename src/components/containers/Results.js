import React, { Component } from 'react'
import { Listing } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      location: {}
    }
  }

  componentDidMount() {
    console.log('Results componentDidMount')
    // geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   // .then(latLng => console.log('latLng', latLng) )
    //   .then(latLng => this.setState({latLng}) )
    //   .catch(error => console.error('Error', error))

    var params = {
      address: '22 Dale Street',
      citystatezip: 'Windsor Locks, CT',
      latLng: this.props.latLng
    }

    const zillowData = this.props.getZillowResults(params)

    // console.log("Results.js this.props.listing  :" + JSON.stringify(this.props.listing))
    console.log('zillowData: ', zillowData)
    console.log('zillowData: ', JSON.stringify(zillowData))

    this.setState({
      listing: zillowData
    })
  }


render() {
  // const listings = this.props.listing.all || []
  // console.log(JSON.stringify(listings))
  //
  console.log(this.state)
  console.log(this.props.listing)

  let listingLat = this.props.listing.all !== null ? this.props.listing.all.latitude : null
  let listingLng = this.props.listing.all !== null ? this.props.listing.all.longitude : null

  console.log(listingLat)
  console.log(listingLng)
  console.log(typeof(this.props.listing))
  console.log(typeof(listingLng))

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
                    <Listing lat={listingLat} lng={listingLng} />
                </li>
                <li className="row justify-content-center align-items-center">
                  <button type="button" class="btn btn-primary btn-lg">Show Listings</button>
                </li>
            </ul>
            <div className="row justify-content-center text-center section-intro">
                <div className="col-12 col-md-9 col-lg-8">
                    <span className="title-decorative">Perfect for Startups</span>
                    <h3 className="display-4">Potential rental deals</h3>
                    <span className="lead">803 rentals listed under their Rent Zestimate in New York</span>

                </div>
            </div>


            <ul className="feature-list feature-list-lg">
                <li className="row justify-content-center align-items-center">
                    <Listing lat={listingLat} lng={listingLng} />
                    <Listing lat={listingLat} lng={listingLng} />
                    <Listing lat={listingLat} lng={listingLng} />
                </li>
                <li className="row justify-content-center align-items-center">
                  <button type="button" class="btn btn-primary btn-lg">Show Listings</button>
                </li>
            </ul>
        </div>

      </section>
    )
  }
}


const stateToProps = (state) => {
  return {
    listing: state.listing
  }
}

const dispatchToProps = (dispatch) => {
  return {
    getZillowResults: (params) => dispatch(actions.getZillowResults(params)),
    // getLocation: () => dispatch(actions.getLocation())
  }
}

export default connect(stateToProps, dispatchToProps)(Results)
