import axios from 'axios';

const initialState = {
  token: null,
  user: null,
};

export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { token },
});

export const signupSuccess = () => ({
  type: 'SIGNUP_SUCCESS',
});

export const logoutSuccess = () => ({
  type: 'LOGOUT',
});

const url = 'http://localhost:4000/';

export const login = (email, password) => async (dispatch) => {
  const requestBody = {
    user: {
      email,
      password,
    },
  };

  console.log(requestBody);

  try {
    const response = await axios.post(`${url}login`, requestBody);
    const authorizationHeader = response.headers.authorization;
    console.log(authorizationHeader);
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];
      dispatch(loginSuccess(token));
      localStorage.setItem('tokenKey', token);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const signup = ({ name, email, password }) => async () => {
  const requestBody = {
    user: {
      name,
      email,
      password,
    },
  };
  try {
    const response = await axios.post(`${url}sign_up`, requestBody);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('tokenKey');
  delete axios.defaults.headers.common.authorization;
  dispatch({ type: 'LOGOUT' });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
