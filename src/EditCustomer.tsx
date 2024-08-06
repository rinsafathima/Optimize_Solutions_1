import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCustomerContext } from './CustomerContext';

const EditCustomer: React.FC = () => {
  const { addCustomer, editCustomer, clearEditCustomer } = useCustomerContext();
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '', address: '', status: '' });
  const navigate = useNavigate();

  useEffect(() => {
    if (editCustomer) {
      setNewCustomer(editCustomer);
    }
  }, [editCustomer]);

  const handleSubmit = () => {
    addCustomer({ ...newCustomer, id: editCustomer ? editCustomer.id : Date.now() });
    clearEditCustomer();
    navigate('/');
  };

  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h1 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit Customer</h1>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={newCustomer.name}
            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-400 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="w-full">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
          <input
            type="email"
            placeholder="Email"
            value={newCustomer.email}
            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-400 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="w-full">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
          <input
            type="tel"
            placeholder="Phone"
            value={newCustomer.phone}
            onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-400 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="w-full">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>  
          <input
            type="text"
            placeholder="Address"
            value={newCustomer.address}
            onChange={(e) => setNewCustomer({ ...newCustomer, address: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-400 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <div className="w-full">
          <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <input
            type="text"
            placeholder="Status"
            value={newCustomer.status}
            onChange={(e) => setNewCustomer({ ...newCustomer, status: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-400 focus:border-blue-500 block w-full p-2.5"
          />
          </div>
      </div>
      <button
        className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold py-4 px-8 text-lg rounded m-8"
        onClick={handleSubmit}
      >
        Update Customer
      </button>
    </div>
    </section>
  );
};

export default EditCustomer;


