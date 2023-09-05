import {
  createContext, useContext, useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user_id'));

  const login = () => {
    localStorage.setItem('userLogged', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('userLogged');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('userLogged'));
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
