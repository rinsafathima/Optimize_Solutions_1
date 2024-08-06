import { Link, useNavigate } from 'react-router-dom';
import { useCustomerContext } from './CustomerContext';

const CustomerList = () => {
  const { customers, deleteCustomer, setEditCustomer } = useCustomerContext();
  const navigate = useNavigate();

  return (
    <section>
    <div>
      <div>
        <h1>Customer List</h1>
      </div>
      <div>
        <Link to="/add-customer">
          <button className="bg-indigo-400 hover:bg-indigo-700 text-white font-bold text-lg py-2 px-4 rounded m-8">
            Add Customer
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {customers.map((customer) => (
          <div key={customer.id} className="border border-indigo-500/100 p-4 rounded text-left">
            <p><strong>ID:</strong> {customer.id}</p>
            <p><strong>Name:</strong> {customer.name}</p>
            <p><strong>Email:</strong> {customer.email}</p>
            <p><strong>Phone:</strong> {customer.phone}</p>
            <p><strong>Address:</strong> {customer.address}</p>
            <p><strong>Status:</strong> {customer.status}</p>

            <button onClick={() => {
              setEditCustomer(customer);
              navigate('/edit-customer');
            }}>
              Edit Customer
            </button>
            <button onClick={() => deleteCustomer(customer.id)}>Delete Customer</button>
            <hr />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default CustomerList;


