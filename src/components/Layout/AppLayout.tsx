import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.tsx';

const AppLayout: React.FC = () => {
    return (
        <div style={{ display: 'flex', height:'100vh' }}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AppLayout;
