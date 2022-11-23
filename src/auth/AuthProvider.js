import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export function AuthProvider(props) {
    const [token, setToken] = useLocalStorage('token', null);

    const login = async (credentials, callback) => {
        try {
            const response = await login(credentials);
            console.log(response);
            callback();
        } catch (error) {
            return error;
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
