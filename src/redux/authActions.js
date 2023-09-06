import axios from 'axios';

const initialState = {
  token: null,
  user: null,
};

/* Manage success login */
export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { token },
});

/* Manage success signup */
export const signupSuccess = () => ({
  type: 'SIGNUP_SUCCESS',
});

/* Manage success logout */
export const logoutSuccess = () => ({
  type: 'LOGOUT',
});

/* API Url */
const url = 'https://rails-b62y.onrender.com/';

/* Login request */
export const loginApi = (email, password) => async (dispatch) => {
  const requestBody = {
    user: {
      email,
      password,
    },
  };

  try {
    const response = await axios.post(`${url}login`, requestBody);
    const authorizationHeader = response.headers.authorization;
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1];
      dispatch(loginSuccess(token));
      localStorage.setItem('tokenKey', token);
    }
  } catch (error) {
    throw new Error(error);
  }
};

/* Signup request */
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

/* Destroy session */
export const logoutApi = () => (dispatch) => {
  localStorage.removeItem('tokenKey');
  localStorage.removeItem('userId');
  delete axios.defaults.headers.common.authorization;
  dispatch({ type: 'LOGOUT' });
};

/* Getting current user data */
export const fetchCurrentUser = () => async (dispatch, getState) => {
  const { token } = getState().authorization;
  try {
    const response = await axios.get(`${url}current_user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      const userData = response.data;
      localStorage.setItem('userId', userData.id);
      localStorage.setItem('userRole', userData.role);
    } else {
      console.error('Error al obtener el usuario actual');
    }
  } catch (error) {
    throw new Error(error);
  }
};

/* Reducer */
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
