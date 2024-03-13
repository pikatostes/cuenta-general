import React, { useState, useEffect } from 'react';
import UserForm from './User/UserForm';
import UserDropdown from './User/UserDropdown';
import ProductSection from './Product/ProductSection';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(sessionStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    useEffect(() => {
        const storedProducts = JSON.parse(sessionStorage.getItem(selectedUser)) || [];
        setProducts(storedProducts);
    }, [selectedUser]);

    const handleUserSubmit = (name) => {
        setUsers([...users, name]);
        sessionStorage.setItem('users', JSON.stringify([...users, name]));
    };

    const handleUserSelect = (event) => {
        setSelectedUser(event.target.value);
    };

    const handleProductSubmit = (name, price, quantity) => {
        if (name.trim() !== '' && !isNaN(price) && parseFloat(price) > 0 && !isNaN(quantity) && parseInt(quantity) > 0) {
            const newProduct = {
                productName: name,
                productPrice: parseFloat(price),
                productQuantity: parseInt(quantity)
            };
            setProducts([...products, newProduct]);
            sessionStorage.setItem(selectedUser, JSON.stringify([...products, newProduct]));
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        sessionStorage.setItem(selectedUser, JSON.stringify(updatedProducts));
    };

    const handleEditProduct = (index, name, price, quantity) => {
        if (name.trim() !== '' && !isNaN(price) && parseFloat(price) > 0 && !isNaN(quantity) && parseInt(quantity) > 0) {
            const updatedProducts = [...products];
            updatedProducts[index] = {
                productName: name,
                productPrice: parseFloat(price),
                productQuantity: parseInt(quantity)
            };
            setProducts(updatedProducts);
            sessionStorage.setItem(selectedUser, JSON.stringify(updatedProducts));
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    return (
        <div className="container">
            <h2 className="mt-5 mb-4">Home</h2>
            <div className="row">
                <div className="col-md-6">
                    <UserForm onSubmit={handleUserSubmit} />
                    <UserDropdown users={users} selectedUser={selectedUser} onSelect={handleUserSelect} />
                </div>
                <div className="col-md-6">
                    {selectedUser && (
                        <ProductSection
                            selectedUser={selectedUser}
                            products={products}
                            onDelete={handleDeleteProduct}
                            onEdit={handleEditProduct}
                            onSubmit={handleProductSubmit}
                        />
                    )}</div>
            </div>
        </div>
    );
};

export default Home;
