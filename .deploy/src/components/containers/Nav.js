import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import Dropzone from 'react-dropzone'
import actions from '../../actions'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      showEditModal: false,
      showLoginModal: false,
      showSignupModal: false
    }
  }

  componentDidMount() {
    console.log('Nav component did mount!')
  }

  render() {
    return(
      <div className="nav-container">
          <div className="bg-light navbar-light" data-sticky="top">
              <div className="container">
                  <nav className="navbar navbar-expand-lg">
                      <a className="navbar-brand" href="/">
                          <img alt="Wingman" src="dist/assets/img/logo-white.svg" />
                      </a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <i className="icon-menu h4"></i>
                      </button>
                      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a className="nav-link">Buy</a>
                              </li>
                              <li className="nav-item">
                                  <a href="index.html" className="nav-link">Rent</a>
                              </li>
                              <li className="nav-item">
                                  <a href="index.html" className="nav-link">Sell</a>
                              </li>
                              <li className="nav-item">
                                  <a href="index.html" className="nav-link">Mortgages</a>
                              </li>
                              <li className="nav-item">
                                  <a href="index.html" className="nav-link">Agent Finder</a>
                              </li>
                          </ul>
                          <ul className="navbar-nav">
                              <li className="nav-item">
                                  <a href="#">Sign up</a>
                                  <span>&nbsp;or&nbsp;</span><a href="#">Sign in</a>
                              </li>
                          </ul>
                      </div>
                  </nav>
              </div>
          </div>
      </div>
    )
  }
}

const localStyle = {
  input: {
    border: '1px solid #ddd',
    marginBottom: 12
  },
  dropzone: {
    marginRight: 16
  },
  textarea: {
    border: '1px solid #ddd',
    height: 160
  },
  icon: {
    width:32, borderRadius:24, float: 'right'
  },
  modal: {
    padding: 20
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

export default connect(stateToProps, dispatchToProps)(Nav)
