import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthProvider';

function ProtectedView(props) {
  const { getToken, logout } = useAuth();
  const { children } = props;
  const navigate = useNavigate();

  useEffect(() => {
    function handleTokenRemoval() {
      if (!getToken()) {
        const callback = () => navigate('/');
        logout(callback);
      }
    }

    window.addEventListener('storage', handleTokenRemoval);

    return () => window.removeEventListener('storage', handleTokenRemoval);
  });

  if (!getToken()) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedView;
