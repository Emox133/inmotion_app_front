import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import axios from 'axios'
import {AppContext} from './context/context'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'

ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
);
