import React, { useState } from 'react';
import { LoginForm } from '../features/loginForm/LoginForm';
import '../styles/style.css';

export const Login = () => {
    return (
        <div className="login-container">
            <LoginForm />
        </div>
    )
}
