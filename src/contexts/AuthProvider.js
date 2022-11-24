import { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { userLogin } from './api';
import { useMessages } from './MessagesProvider';

const AuthContext = createContext();

export function AuthProvider(props) {
  const [_token, setToken] = useLocalStorage('token', null);
  const { addMessage, removeMessage } = useMessages();

  const getToken = () => {
    try {
      const item = window.localStorage.getItem('token');
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  };

  const login = async (credentials, callback) => {
    try {
      const data = await userLogin(credentials);

      if (data) {
        const { access_token } = data;
        setToken(access_token);
        removeMessage();
        callback();
      }
    } catch (error) {
      addMessage('error', error.message);
    }
  };

  const logout = (callback) => {
    setToken(null);
    addMessage('default', '👋 Have a nice day!');
    callback();
  };

  const value = {
    getToken,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
