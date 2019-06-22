import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../constants';
import axios from 'axios';

const getUsers = () => {
  return dispatch => {
    dispatch({
      type: GET_USERS_REQUEST,
    })

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({
          type: GET_USERS_SUCCESS,
          payload: response.data.slice(0, 6),
        });
      })

      .catch(err => {
        dispatch({
          type: GET_USERS_FAILED,
          payload: err.message,
        });
      });
  }
}

export default getUsers;
