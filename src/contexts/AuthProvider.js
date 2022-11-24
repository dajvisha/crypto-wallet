import { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { userLogin } from './api';
import { useMessage } from './MessagesProvider';

const AuthContext = createContext();

export function AuthProvider(props) {
    const [token, setToken] = useLocalStorage('token', null);
    const { addMessage, removeMessage } = useMessage();

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
        callback();
    };

    const value = {
        token,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
