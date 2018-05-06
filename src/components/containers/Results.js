import React, { Component } from 'react'
import { Listing } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Results extends Component {
  constructor() {
    super()
    this.state = {
      listing: [],
      location: {}
    }
  }

  componentDidMount() {
    console.log('Results componentDidMount')
  }


render() {
  // const listings = this.props.listing.all || []
  // console.log(JSON.stringify(listings))
  //
  // console.log(this.state)

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
                    <Listing />
                    <Listing />
                    <Listing />
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
    // listing: state.listing
  }
}

const dispatchToProps = (dispatch) => {
  return {
    // getZillowResults: (params) => dispatch(actions.getZillowResults(params)),
    // getLocation: () => dispatch(actions.getLocation())
  }
}

export default connect(stateToProps, dispatchToProps)(Results)
