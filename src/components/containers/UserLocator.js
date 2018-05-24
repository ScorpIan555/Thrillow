import React, { Component } from 'react'

class UserLocator extends Component {
  constructor() {
    super()
    this.state = {
      regionName: '',
      zipCode: ''
    }
  }

  componentDidMount() {
    // https://ipstack.com/quickstart
    // https://ipstack.com/documentation
    const baseUrl = 'http://api.ipstack.com/check'
    const accessKey = 'access_key=32795b80a1f644674d7ae6ecfaa713da'  // const accessKey = process.env.IPSTACK_API_KEY
    console.log('URL: ' + JSON.stringify(accessKey))

    const joinUrl = [baseUrl, accessKey]

    const url = joinUrl.join('?')
    console.log('URL: ' + JSON.stringify(url))

    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        console.log(JSON.stringify(responseJson))
        this.setState({
          regionName: responseJson.region_name,
          zipCode: responseJson.zip
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>User Locator Component </div>
    )
  }
}

export default UserLocator
