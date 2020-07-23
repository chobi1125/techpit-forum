import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './helpers/initializeApp.js'

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept()
}