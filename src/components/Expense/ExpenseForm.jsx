import React, { useState } from 'react';
import { Check } from 'react-bootstrap-icons';

const ExpenseForm = ({ onSubmit }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleProductQuantityChange = (event) => {
        setProductQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(productName, productPrice, productQuantity);
        setProductName('');
        setProductPrice('');
        setProductQuantity('');
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex">
            <div className="mb-3 me-2">
                <input type="text" placeholder='Name' className="form-control" value={productName} onChange={handleProductNameChange} required />
            </div>
            <div className="mb-3 me-2">
                <input type="number" placeholder='Price' className="form-control" value={productPrice} onChange={handleProductPriceChange} step="0.01" min="0" required />
            </div>
            <div className="mb-3 me-2">
                <input type="number" placeholder='Quantity' className="form-control" value={productQuantity} onChange={handleProductQuantityChange} min="1" required />
            </div>
            <button type="submit" className="btn btn-primary h-100"><Check /></button>
        </form>
    );
};

export default ExpenseForm;
