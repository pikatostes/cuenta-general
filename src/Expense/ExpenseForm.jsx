import React, { useState } from 'react';
import { Check } from 'react-bootstrap-icons';

const ExpenseForm = ({ onSubmit }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleProductPriceChange = (event) => {
        setProductPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(productName, productPrice);
        setProductName('');
        setProductPrice('');
    };

    return (
        <form onSubmit={handleSubmit} className='d-flex align-items-center flex-column'>
            <div className="mb-3">
                <label htmlFor="product-name" className="form-label">Nombre del Producto:</label>
                <input type="text" className="form-control" id="product-name" value={productName} onChange={handleProductNameChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="product-price" className="form-label">Precio:</label>
                <input type="number" className="form-control" id="product-price" value={productPrice} onChange={handleProductPriceChange} step="0.01" min="0" required />
            </div>
            <button type="submit" className="btn btn-primary"><Check /> Agregar Producto</button>
        </form>
    );
};

export default ExpenseForm;
