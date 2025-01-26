import React from 'react';
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
    const [action,setAction] = React.useState('Sign Up');
    const navigate = useNavigate();
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="user_icon" />
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="input">
                    <img src={email_icon} alt="email_icon" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="password_icon" />
                    <input type="password" placeholder='Password'/>
                </div>
                <div className="forgot-password">
                    <div>Forgot Password? <span onClick={() => navigate('/forgetPassword')}>Click Here</span></div>
                </div>
                <div className="submit-container">
                    <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>SignUp</div>
                    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;