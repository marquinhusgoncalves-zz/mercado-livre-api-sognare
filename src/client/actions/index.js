import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const fetch_users = () => async dispatch => {
  const res = await axios.get('https://react-ssr-api.heroku.com/')

  dispatch({
    type: FETCH_USERS,
    payload: res
  })
}