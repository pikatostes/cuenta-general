import React, { useState } from 'react';
import { Trash, PencilSquare, Check, X } from 'react-bootstrap-icons';

const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editProductName, setEditProductName] = useState('');
    const [editProductPrice, setEditProductPrice] = useState('');

    const handleEdit = (index) => {
        const expenseToEdit = expenses[index];
        setEditIndex(index);
        setEditProductName(expenseToEdit.productName);
        setEditProductPrice(expenseToEdit.productPrice);
        onEdit(index);
    };

    const handleSaveEdit = () => {
        onEdit(editIndex, editProductName, editProductPrice);
        setEditIndex(null);
    };

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>{editIndex === index ? (
                            <input
                                type="text"
                                className="form-control"
                                value={editProductName}
                                onChange={(event) => setEditProductName(event.target.value)}
                            />
                        ) : (
                            expense.productName
                        )}</td>
                        <td>{editIndex === index ? (
                            <input
                                type="number"
                                className="form-control"
                                value={editProductPrice}
                                onChange={(event) => setEditProductPrice(event.target.value)}
                                step="0.01"
                                min="0"
                            />
                        ) : (
                            `$${expense.productPrice.toFixed(2)}`
                        )}</td>
                        <td>
                            {editIndex === index ? (
                                <>
                                    <button className="btn btn-success me-2" onClick={handleSaveEdit}><Check /></button>
                                    <button className="btn btn-secondary" onClick={() => setEditIndex(null)}><X /></button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-danger me-2" onClick={() => onDelete(index)}><Trash /></button>
                                    <button className="btn btn-primary" onClick={() => handleEdit(index)}><PencilSquare /></button>
                                </>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseTable;
