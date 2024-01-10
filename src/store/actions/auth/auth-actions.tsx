import axios from 'axios';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginRequestClear,
} from './auth-types';

import { Dispatch } from 'redux';
import { AnyAction } from 'redux';

export const login = (username: string, password: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(loginRequest());
    axios
      .post('/login', { username, password })
      .then((response: any) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error: any) => {
        dispatch(loginFailure(error.message));
      });
  };
};

export function clearLogin() {
  return (dispatch: any) => {
    dispatch(loginRequestClear());
  };
}
