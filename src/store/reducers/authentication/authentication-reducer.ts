import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../../types/authentication/authentication-types';

interface AuthState {
  loading: boolean;
  data: any;
  error: string | null;
}

const initialState: AuthState = {
  loading: false,
  data: null,
  error: null,
};

export const authReducer = (action: any, state = initialState): AuthState => {
  if (!action || !action.type) {
    return state;
  }

  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
