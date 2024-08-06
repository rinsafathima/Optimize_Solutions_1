import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCustomer from './AddCustomer.tsx';
import EditCustomer from './EditCustomer';
import { CustomerProvider } from './CustomerContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/edit-customer" element={<EditCustomer />} />
        </Routes>
      </Router>
    </CustomerProvider>
  </React.StrictMode>
);
