import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card, Input, Logo, View } from '../../components/UI';
import { useAuth } from '../../contexts/AuthProvider';

import styles from './styles.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = { username, password };
      const callback = () => navigate('/wallet');

      await login(credentials, callback);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View.Body className={styles['view-body']}>
        <div>
          <Card shadow className={styles['login-card']}>
            <Logo />
            <form onSubmit={onSubmit} className={styles['login-form']}>
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
              <div className={styles['login-footer']}>
                <Button type="submit" label="Log in" />
              </div>
            </form>
          </Card>
        </div>
      </View.Body>
    </View>
  );
}

export default Login;
