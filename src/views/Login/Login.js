import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Card,
    Input,
    Logo,
    Message,
    View,
} from '../../components/UI';
import { useAuth } from "../../contexts/AuthProvider";

import styles from './styles.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        setErrorMessage('');
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        setErrorMessage('');
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const credentials = { username, password };
            const callback = () => navigate('/wallet');

            await login(credentials, callback);
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <View>
            <View.Body>
                <Card
                    shadow
                    className={styles['login-card']}>
                    <Logo />
                    <form
                        onSubmit={onSubmit}
                        className={styles['login-form']}>
                        <div className={styles['login-content']}>
                            <Input
                                required
                                type="text"
                                label="Username"
                                placeholder="username"
                                value={username}
                                onChange={onChangeUsername}
                            />
                            <Input
                                required
                                type="password"
                                label="Password"
                                placeholder="password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        {errorMessage && <Message type="error" message={errorMessage} />}
                        <div className={styles['login-footer']}>
                            <Button
                                type="submit"
                                label="Log in"
                            />
                        </div>
                    </form>
                </Card>
            </View.Body>
        </View>
    );
}

export default Login;
