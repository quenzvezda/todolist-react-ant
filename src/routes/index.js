import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<PublicRoute />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
