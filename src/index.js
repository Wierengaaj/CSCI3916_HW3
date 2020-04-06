import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Loaded into index.html - this root is the same
);


serviceWorker.unregister();
