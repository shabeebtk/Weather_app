import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from './constant/AuthClientId.js';

// redux 
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { configureStore } from './redux/redux-persist-config.js'

const { store, persistor } = configureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <Provider store={store} persistor={persistor}>
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
