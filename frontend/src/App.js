import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Sidebar from './components/Sidebar';
import ProductsPage from './pages/ProductPages';
import AddProductPage from './components/AddProduct'
import CustomersPage from './pages/CustomerPage';
import AddCustomerPage from './components/AddCustomer';
import CustomerProductsPage from './pages/CustomerProductPage'
import OrdersPage from './pages/OrderPage';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <div style={{ flexGrow: 1, padding: 16 }}>
          <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/edit-product/:product_id" element={<AddProductPage />} />
            <Route path="/add-customer" element={<AddCustomerPage/>} />
            <Route path="/edit-customer/:customer_id" element={<AddCustomerPage/>} />
            <Route path="/products/:customer_id" element={<CustomerProductsPage/>} />
            <Route path="/orders/:customer_id" element={<OrdersPage />} />
            <Route path="/customers" element={<CustomersPage />} />
          </Routes>
        </div>
      </div>
      <ToastContainer/>
    </Router>
  );
};

export default App;
