import React from 'react';
import ExpenseTable from '../Expense/ExpenseTable';
import ExpenseForm from '../Expense/ExpenseForm';


const ProductSection = ({ selectedUser, products, onDelete, onEdit, onSubmit }) => {
    const handleProductSubmit = (name, price) => {
        if (name.trim() !== '' && !isNaN(price) && parseFloat(price) > 0) {
            onSubmit(name, price);
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    const handleDeleteProduct = (index) => {
        onDelete(index);
    };

    const handleEditProduct = (index, name, price) => {
        onEdit(index, name, price);
    };

    return (
        <div className="mt-4">
            <h3>Productos de {selectedUser}:</h3>
            <ExpenseForm onSubmit={handleProductSubmit} />
            <ExpenseTable expenses={products} onDelete={handleDeleteProduct} onEdit={handleEditProduct} />
        </div>
    );
};

export default ProductSection;
