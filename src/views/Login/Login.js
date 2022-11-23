import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import View from '../../components/View';

import styles from './styles.module.css';

function Login() {
    return (
        <View>
            <Card
                shadow
                className={styles['login-card']}>
                <Logo />
                <form className={styles['login-form']}>
                    <div className={styles['login-content']}>
                        <Input
                            required
                            type="email"
                            label="Email address"
                            placeholder="email@email.com"
                        />
                        <Input
                            required
                            type="password"
                            label="Password"
                            placeholder="password"
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
