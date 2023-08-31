import axios from 'axios';

const initialState = {
  token: null,
  user: null,
};

export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { token },
});

export const signupSuccess = (token) => ({
  type: 'SIGNUP_SUCCESS',
  payload: { token },
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

/* export const signup = ({ name, email, password }) => async (dispatch) => {
  try {
    const response = await axios.post(`${url}/login`, { name, email, password });
    const authorizationHeader = response.headers.authorization;
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1]; // Extract the token from the "Bearer" prefix
      dispatch(signupSuccess(token));
    }
  } catch (error) {
    // Dispatch error action
  }
}; */

export const logout = () => (dispatch) => {
  // Clear token from localStorage
  localStorage.removeItem('tokenKey');
  // You might also want to remove the authorization header
  delete axios.defaults.headers.common.authorization;
  // Dispatch logout action if needed
  dispatch({ type: 'LOGOUT' }); // You can define a LOGOUT action type if you want
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
