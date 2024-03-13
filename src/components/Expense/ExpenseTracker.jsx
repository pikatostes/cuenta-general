import React, { useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseTable from './ExpenseTable';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const storedExpenses = JSON.parse(sessionStorage.getItem('expenses'));
        if (storedExpenses) {
            setExpenses(storedExpenses);
        }
    }, []);

    const handleSubmit = (productName, productPrice, productQuantity) => {
        if (productName.trim() !== '' && !isNaN(productPrice) && parseFloat(productPrice) > 0 && !isNaN(productQuantity) && parseInt(productQuantity) > 0) {
            const newExpense = {
                productName: productName,
                productPrice: parseFloat(productPrice),
                productQuantity: parseInt(productQuantity)
            };
            setExpenses([...expenses, newExpense]);
            sessionStorage.setItem('expenses', JSON.stringify([...expenses, newExpense]));
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    const handleDelete = (index) => {
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(index, 1);
        setExpenses(updatedExpenses);
        sessionStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    };

    const handleEdit = (index, editedProductName, editedProductPrice, editedProductQuantity) => {
        if (editedProductName.trim() !== '' && !isNaN(editedProductPrice) && parseFloat(editedProductPrice) > 0 && !isNaN(editedProductQuantity) && parseInt(editedProductQuantity) > 0) {
            const updatedExpenses = [...expenses];
            updatedExpenses[index] = {
                productName: editedProductName,
                productPrice: parseFloat(editedProductPrice),
                productQuantity: parseInt(editedProductQuantity)
            };
            setExpenses(updatedExpenses);
            sessionStorage.setItem('expenses', JSON.stringify(updatedExpenses));
        } else {
            alert('Por favor, complete todos los campos correctamente.');
        }
    };

    return (
        <div className="container">
            <h2 className="mt-5 mb-4">Gastos Generales</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Add Item</h3>
                    <ExpenseForm onSubmit={handleSubmit} />
                </div>
                <div className="col-md-6">
                    <h3>Tabla</h3>
                    <ExpenseTable expenses={expenses} onDelete={handleDelete} onEdit={handleEdit} />
                </div>
            </div>
        </div>
    );
};

export default ExpenseTracker;
