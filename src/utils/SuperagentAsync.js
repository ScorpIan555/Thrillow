import superagent from 'superagent'

const asyncGet = (url, params, actionType) => {
  return dispatch => superagent
                      .get(url)
                      .set('Accept', 'application/json')
                      .then(data => {
                        // console.log('superagent log - res:  ' +JSON.stringify(res))
                        if(actionType != null) {
                          dispatch({
                            type: actionType,
                            params: params,
                            data: data
                          })
                          console.log(data)
                          return data
                        }
                      })
                      .catch( err => {
                        console.log(err.message)
                      })
}

export default {

  asyncGet: asyncGet

}
