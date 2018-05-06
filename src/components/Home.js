/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the Home component rendered in the index.js entry point
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

import React, { Component } from 'react'
import { Nav } from './containers'

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
          Home Container
        </div>
      </div>
    )
  }
}

export default Home
