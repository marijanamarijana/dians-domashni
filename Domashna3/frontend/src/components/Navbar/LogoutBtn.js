import React from 'react';
import { logout } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
