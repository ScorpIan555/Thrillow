/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the Home component rendered in the index.js entry point
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

import React, { Component } from 'react'
import { Nav, LandingPage, Results } from './containers'
import { Footer } from './presentation'

class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {

    return(
      <div>

        <Nav />

        <div className="main-container">

          <LandingPage />

          <Results />

          <Footer />

        </div>
      </div>
    )
  }
}

export default Home
