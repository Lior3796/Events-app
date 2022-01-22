import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterUser = () => {
    const [user, setUser] = useState({ userPassword: null, userName: null, keys: [] });

    const userHandler = (e, name) => {
        const userValue = { ...user, [name]: e.target.value };
        setUser(userValue);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch("http://localhost:5000/user/registerUser", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(user)
            });
            result = await result.json();
            document.cookie = `jwtRegister=${result.token}`;
            toast("user add successfully");
        } catch (err) {
            toast("user can't added");
        }
    }

    return (
        <form className="form-container">
            <h1 className="form-header">Register</h1>
            <h2 className="userName-label label">Email</h2>
            <input onChange={(e) => userHandler(e, "userName")} className="userName-input" name="userName" />
            <h2 className="password-label label">Password</h2>
            <input onChange={(e) => userHandler(e, "userPassword")} className="userPassword-input input" name="password" />
            <input onClick={(e) => submitForm(e)} className="form-login-btn" type="submit" value="Login" />
            <ToastContainer />
        </form>

    )
}
