import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignupContextProvider from "./context/SignupContext";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            {/*HIERKOMT SIGNUPPROVIDER------------------- */}
                <App/>
            {/*HIERKOMT SIGNUPPROVIDER-------------------- */}
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
