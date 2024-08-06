import React from 'react';
import CustomerList from './CustomerList';
import AddCustomer from './AddCustomer';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <CustomerList />
    </div>
  );
}

export default App;
