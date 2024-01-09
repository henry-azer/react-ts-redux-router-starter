
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_CLEAR = 'LOGIN_REQUEST_CLEAR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user: any) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginRequestClear = () => ({
    type: LOGIN_REQUEST_CLEAR,
    payload: null,
  });