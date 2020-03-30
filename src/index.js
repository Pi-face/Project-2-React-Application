import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import {MonstersProvider} from './context/MonstersContext'
import { useEffect, useState } from 'react';

ReactDOM.render(
    
    <Router>
    <MonstersProvider>
    <App />
    </MonstersProvider>,
    </Router>,
   
    document.getElementById('root'),
);
