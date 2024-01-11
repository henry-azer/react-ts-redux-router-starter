import axios from 'axios';
import { Dispatch } from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../types/authentication/authentication-types';

export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await axios.post('/api/login', { username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (error: any) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};
