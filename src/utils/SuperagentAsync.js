import superagent from 'superagent'

const asyncGet = (url, params, actionType) => {
  return dispatch => superagent
                      .get(url)
                      .query(params)
                      .set('Accept', 'application/json')
                      .then(data => {
                        console.log('superagent log - res:  ', data)
                        console.log('superagent log - res:  ' + JSON.stringify(data))
                        if(actionType != null) {
                          dispatch({
                            type: actionType,
                            params: params,
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

  asyncGet: asyncGet

}
