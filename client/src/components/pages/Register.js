import React, { useState } from 'react';
import { RegisterUser } from '../features/loginForm/RegisterUser';
import '../styles/style.css';

export const Login = () => {
    return (
        <div className="login-container">
            <RegisterUser />
        </div>
    )
}
