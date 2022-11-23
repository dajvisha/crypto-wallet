import { useState } from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import View from '../../components/View';

import styles from './styles.module.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    }

    return (
        <View>
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
                            type="email"
                            label="Email address"
                            placeholder="email@email.com"
                            value={email}
                            onChange={onChangeEmail}
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
                    <div className={styles['login-footer']}>
                        <Button
                            type="submit"
                            label="Log in"
                        />
                    </div>
                </form>
            </Card>
        </View>
    );
}

export default Login;
