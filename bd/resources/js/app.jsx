import './bootstrap';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";  
import ReactDOM from 'react-dom/client';
import Header from './pages/Header';        
import Home from './pages/RegisterForm';
import RegisterForm from './pages/RegisterForm';
import Login from './pages/Login';
import CVInfos from './pages/CVInfos';
import CVTemplates from './pages/CVTemplates';
import axios from './axiosConfig';


ReactDOM.createRoot(document.getElementById('app')).render(     
    <Router>
         <div>
                <Header />
                <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/cv-infos" element={<CVInfos />} />
              <Route path="/cv-templates" element={<CVTemplates />} />
              </Routes>
            </div>
        </Router>      
);
