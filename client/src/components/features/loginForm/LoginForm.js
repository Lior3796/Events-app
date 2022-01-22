import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/style.css';

export const LoginForm = () => {
    const [user, setUser] = useState({ userPassword: null, userName: null });
    const navigate = useNavigate();
    const userHandler = (e, name) => {
        const userValue = { ...user, [name]: e.target.value };
        setUser(userValue);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch("http://localhost:5000/user/loginUser", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(user)
            });
            result = await result.json();
            document.cookie = `jwtLogin=${result.token};`;
            document.cookie = `userName=${user.userName};`

            navigate({ pathname: "/weather-app/favorites" });

        } catch (err) {
            toast("Server error can't login user");
        }

    }

    return (
        <form className="form-container">
            <h1 className="form-header">Login</h1>
            <h2 className="userName-label label">Email</h2>
            <input onChange={(e) => userHandler(e, "userName")} className="userName-input" name="userName" />
            <h2 className="password-label label">Password</h2>
            <input onChange={(e) => userHandler(e, "userPassword")} className="userPassword-input input" name="password" />
            <input onClick={(e) => submitForm(e)} className="form-login-btn" type="submit" value="Login" />
            <input onClick={(e) => submitForm(e)} className="form-login-btn skip" type="submit" value="skip" />
            <ToastContainer />
        </form>

    )
}
