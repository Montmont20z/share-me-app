import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <App/>
        </GoogleOAuthProvider>
    </Router>
);

