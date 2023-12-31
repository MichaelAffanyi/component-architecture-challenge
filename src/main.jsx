import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { persistStore } from 'reduxjs-toolkit-persist'
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react'

const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>,
)
