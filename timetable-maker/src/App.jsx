import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup.jsx';
import ForgetPassword from './components/ForgetPassword/ForgetPassword.jsx'; 
import MainPage from './components/MainPage/mainpage.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginSignup />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/mainpage" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;