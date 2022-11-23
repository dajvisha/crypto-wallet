import { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { userLogin } from './api';

const AuthContext = createContext();

export function AuthProvider(props) {
    const [token, setToken] = useLocalStorage('token', null);

    const login = async (credentials, callback) => {
        try {
            const response = await userLogin(credentials);
            const { status, data } = response;

            if (status === 200) {
                const { access_token } = data;
                setToken(access_token);
                callback();
            }
        } catch (error) {
            throw error;
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
