import React from 'react';
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useNavigate } from 'react-router-dom';
import './ForgetPassword.css';

const ForgetPassword = () => {
    const [action,setAction] = React.useState('Sign Up');
    return (
        <div className="container">
            <div className="header">
                <div className="text">Password Change</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="email_icon" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="password_icon" />
                    <input type="password" placeholder='New Password'/>
                </div>
                <div className="submit-container">
                    <div className="change-password" >Change Pass</div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;