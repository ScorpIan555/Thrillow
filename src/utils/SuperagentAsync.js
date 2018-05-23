import superagent from 'superagent'

const asyncGet = (url, params, actionType) => {
  return dispatch => superagent
                      .get(url)
                      .query(params)
                      .set('Accept', 'application/json')
                      .then(data => {

                        // if(url == '/comps' && data.body.data.response.results.result == undefined) {
                        //   console.log('blank comps', JSON.stringify(data))
                        //   data.body.data.response.results.result = '1'
                        // } else {
                          if(actionType != null) {
                            dispatch({
                              type: actionType,
                              params: params,
                              data: data
                            })
                            // console.log(params)
                            console.log(data)
                            console.log(JSON.stringify(data.body.data.response.results))
                            return data
                          }
                        // }
                      })
                      .catch( err => {
                        console.log(err.message)
                        console.log(err)
                      })
}

const asyncSend = (latLng, actionType) => {
  return dispatch => superagent
                      .get('homes/addressCall')
                      .query(latLng)
                      .set('Accept', 'application/json')
                      .then(data => {
                        // console.log('superagent log - res:  ', data)
                        // console.log('superagent log - res:  ' + JSON.stringify(data))
                        if(actionType != null) {
                          dispatch({
                            type: actionType,
                            latLng: latLng,
                            data: data
                          })
                          // console.log(params)
                          console.log(data)
                          return data
                        }
                      })
                      .catch( err => {
                        console.log(err.message)
                        console.log(err)
                      })
}


export default {

  asyncGet: asyncGet,
  asyncSend: asyncSend

}
