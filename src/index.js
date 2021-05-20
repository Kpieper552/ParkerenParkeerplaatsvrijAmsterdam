import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthProvider from "./context/SignupContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>{/*HIERKOMT SIGNUPPROVIDER------------------- */}
                <App/>
            </AuthProvider>{/*HIERKOMT SIGNUPPROVIDER-------------------- */}
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
