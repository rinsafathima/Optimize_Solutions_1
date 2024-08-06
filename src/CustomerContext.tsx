import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

interface CustomerContextProps {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
  deleteCustomer: (id: number) => void;
  editCustomer: Customer | null;
  setEditCustomer: (customer: Customer) => void;
  clearEditCustomer: () => void;
}

const CustomerContext = createContext<CustomerContextProps | undefined>(undefined);

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: "Kate",
      email: "kate@example.com",
      phone: "123-456",
      address: "Main St, Galle",
      status: "Active"
    },
    {
      id: 2,
      name: "Smith",
      email: "smith@example.com",
      phone: "678-567",
      address: "new St, Colombo",
      status: "Inactive"
    }
  ]);

  const [editCustomer, setEditCustomer] = useState<Customer | null>(null);

  const addCustomer = (customer: Customer) => {
    if (editCustomer) {
        setCustomers(customers.map(c => (c.id === editCustomer.id ? customer : c)));
        setEditCustomer(null);
      } else {
        setCustomers([...customers, customer]);
      }
  };

  const deleteCustomer = (id: number) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  const clearEditCustomer = () => setEditCustomer(null);

  return (
    <CustomerContext.Provider value={{ customers, addCustomer, deleteCustomer, editCustomer, setEditCustomer, clearEditCustomer  }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
};
