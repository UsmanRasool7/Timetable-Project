import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup.jsx';
import ForgetPassword from './components/ForgetPassword/ForgetPassword.jsx'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
            </Routes>
        </Router>
    );
}

export default App;