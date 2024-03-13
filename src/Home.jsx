import React, { useState, useEffect } from 'react';
import UserForm from './User/UserForm';
import UserDropdown from './User/UserDropdown';
import ProductSection from './Product/ProductSection';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [products, setProducts] = useState('');

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(selectedUser)) || [];
        setProducts(storedProducts);
    }, [selectedUser]);

    const handleUserSubmit = (name) => {
        setUsers([...users, name]);
        localStorage.setItem('users', JSON.stringify([...users, name]));
    };

    const handleUserSelect = (event) => {
        setSelectedUser(event.target.value);
    };

    const handleProductSubmit = (name, price) => {
        if (name.trim() !== '' && !isNaN(price) && parseFloat(price) > 0) {
            const newProduct = {
                productName: name,
                productPrice: parseFloat(price)
            };
            setProducts([...products, newProduct]);
            localStorage.setItem(selectedUser, JSON.stringify([...products, newProduct]));
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
        localStorage.setItem(selectedUser, JSON.stringify(updatedProducts));
    };

    const handleEditProduct = (index, name, price) => {
        if (name.trim() !== '' && !isNaN(price) && parseFloat(price) > 0) {
            const updatedProducts = [...products];
            updatedProducts[index] = {
                productName: name,
                productPrice: parseFloat(price)
            };
            setProducts(updatedProducts);
            localStorage.setItem(selectedUser, JSON.stringify(updatedProducts));
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    return (
        <div className="container">
            <div className="row">
                <h2 className="mt-5 mb-4">Home</h2>
                <UserForm onSubmit={handleUserSubmit} />
                <UserDropdown users={users} selectedUser={selectedUser} onSelect={handleUserSelect} />
                {selectedUser && (
                    <ProductSection
                        selectedUser={selectedUser}
                        products={products}
                        onDelete={handleDeleteProduct}
                        onEdit={handleEditProduct}
                        onSubmit={handleProductSubmit}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;