import React, { Component } from 'react'
import actions from '../../actions'
import { connect } from 'react-redux'
import { LocationSearchInput } from '../containers'

class LandingPage extends Component {
  constructor() {
    super()
    this.state = {}
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
                                  <LocationSearchInput className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" />
                              </div>

                              <div className="col-auto">
                                  <button className="btn btn-lg btn-success" type="submit">Search</button>
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
		// getZillowRequest: () => dispatch(actions.getZillowRequest())
	}
}

export default connect(stateToProps, dispatchToProps)(LandingPage)
