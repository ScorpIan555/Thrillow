import React, { Component } from 'react'

export default (props) => {
  console.log(props)
  const imageLat = props.lat
  const imageLng = props.lng
  console.log(imageLat)
  console.log(imageLng)

  // Pass image-related props into local variables which will be componsed into a full url string for use as src prop
  // Build the image path string that each listing will pull from the Google Maps Street View API
  const imagePath = 'https://maps.googleapis.com/maps/api/streetview'
  const imageSize = 'size=400x400'
  const imageQueryPathArray = [imagePath, imageSize]
  const imageQueryPath = imageQueryPathArray.join('?')
  console.log(imageQueryPath)
  // Compose location using the lat/long props passed in from Results.js
  const imageLocation = 'location=' + imageLat + ',' + imageLng
  const imageFOVHeadingPitchApiKey = '&fov=90&heading=235&pitch=10&key=AIzaSyAGZkIyl-VNKwjTWBFFP_xb_R8nK2GQmzs'
  const imageFOVHeadingPitchApiKeyArray = [imageQueryPath, imageLocation, imageFOVHeadingPitchApiKey]
  const imageUrlComposed = imageFOVHeadingPitchApiKeyArray.join('&')
  console.log(imageUrlComposed)

  // const imageLocation = props.imageLocation
  // const imageFOV = props.imageFOV
  // const imageHeading = props.imageHeading
  // const imagePitch = props.imagePitch
  // const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY

  // const imagePath = 'https://maps.googleapis.com/maps/api/streetview'
  // const imageSize = 'size=400x400'
  // const imageLocation = 'location=40.720032,-73.988354'
  // const imageFOV = 'fov=90'
  // const imageHeading = 'heading=235'
  // const imagePitch = 'pitch=10'
  // const googleMapsApiKey = 'key=
  //
  // // Compose url string for src
  // const imageUrlQueryArray = [imageSize, imageLocation, imageFOV, imageHeading, imagePitch, googleMapsApiKey]
  // const imageUrlQueryString = imageUrlArray.join('&')
  // const imageUrlArray = [imagePath, imageUrlQueryString]
  // const fullyComposedImageUrlString = imageUrlArray.join('?')

  const imageUrl = "https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=AIzaSyAGZkIyl-VNKwjTWBFFP_xb_R8nK2GQmzs"


  return (

      <div className="col-sm">
            <img style={localStyle}
                  alt="Image"
                  src={imageUrlComposed}
                  className="img-fluid rounded" />
      </div>

  )
}

const localStyle = {
  height: '200px',
  width: '200px'
}
