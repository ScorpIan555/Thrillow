import React, { Component } from 'react'

export default (props) => {
  console.log('LISTING COMPONENT PROPS:', props)
  const imageLat = props.lat
  const imageLng = props.lng
  // console.log(imageLat)
  // console.log(imageLng)

  // Pass image-related props into local variables which will be componsed into a full url string for use as src prop
  // Build the image path string that each listing will pull from the Google Maps Street View API
  const imagePath = 'https://maps.googleapis.com/maps/api/streetview'
  const imageSize = 'size=400x400'
  const imageQueryPathArray = [imagePath, imageSize]
  const imageQueryPath = imageQueryPathArray.join('?')
  // Compose location using the lat/long props passed in from Results.js
  const imageLocation = 'location=' + imageLat + ',' + imageLng
  const imageFOVHeadingPitchApiKey = '&fov=90&heading=235&pitch=10&key=AIzaSyAGZkIyl-VNKwjTWBFFP_xb_R8nK2GQmzs'
  // const imageFOVHeadingPitchApiKey = '&fov=90&heading=235&pitch=10&key=${process.env.IMAGE_API_KEY}'
  const imageFOVHeadingPitchApiKeyArray = [imageQueryPath, imageLocation, imageFOVHeadingPitchApiKey]
  const imageUrlComposed = imageFOVHeadingPitchApiKeyArray.join('&')
  // console.log('IMAGE_API_KEY: ', process.env.IMAGE_API_KEY)

  return (

      <div>
        <img style={localStyle}
             alt="Image"
             src={imageUrlComposed}
             className="img-fluid rounded"
            />
      </div>

  )
}

const localStyle = {
  height: '200px',
  width: '200px'
}
