import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ExpenseContextProvider from './store/expense-context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ExpenseContextProvider>
    <App />
    </ExpenseContextProvider>
  // </React.StrictMode>
)
