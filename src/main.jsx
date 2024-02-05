import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Redux
import { Provider } from 'react-redux';
import Store from './Redux/Store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
  </Provider>,
)
