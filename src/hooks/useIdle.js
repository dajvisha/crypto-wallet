import { useState } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../contexts/AuthProvider';
import { useMessage } from '../contexts/MessagesProvider';

export default function useIdle() {
  const [isIdle, setIsIdle] = useState();
  const { logout } = useAuth();
  const { addMessage } = useMessage();
  const navigate = useNavigate();
  
  const onIdle = () => {
    const callback = () => navigate('/');
    logout(callback);
    addMessage('info', 'Logged out due to inactivity.');
  };

  const handleOnIdle = () => {
    setIsIdle(true);
    onIdle();
  };

  const handleOnActive = () => {
    setIsIdle(false);
  };

  const handleOnAction = () => {
    setIsIdle(false);
  };

  useIdleTimer({
    timeout: 20000,
    debounce: 500,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction
  });

  return {
    isIdle
  };
}
