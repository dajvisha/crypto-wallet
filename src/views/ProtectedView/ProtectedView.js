import { Navigate } from 'react-router-dom';

import { useAuth } from "../../contexts/AuthProvider";

function ProtectedView(props) {
    const { token } = useAuth();
    const { children } = props;

    if (!token) {
        return <Navigate to="/" />
    }

    return children;
}

export default ProtectedView;
