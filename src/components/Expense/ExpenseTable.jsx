import React, { useState, useEffect } from 'react';
import { Trash, PencilSquare, Check, X } from 'react-bootstrap-icons';

const ExpenseTable = ({ expenses, onDelete, onEdit }) => {
    const [editIndex, setEditIndex] = useState(null);
    const [editProductName, setEditProductName] = useState('');
    const [editProductPrice, setEditProductPrice] = useState('');
    const [editProductQuantity, setEditProductQuantity] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(() => {
        const storedNumberOfPeople = sessionStorage.getItem('numberOfPeople');
        return storedNumberOfPeople ? parseInt(storedNumberOfPeople) : 1;
    });

    const handleEdit = (index) => {
        const expenseToEdit = expenses[index];
        setEditIndex(index);
        setEditProductName(expenseToEdit.productName);
        setEditProductPrice(expenseToEdit.productPrice);
        setEditProductQuantity(expenseToEdit.productQuantity);
        onEdit(index);
    };

    const handleSaveEdit = () => {
        onEdit(editIndex, editProductName, editProductPrice, editProductQuantity);
        setEditIndex(null);
    };

    const handleNumberOfPeopleChange = (event) => {
        const newNumberOfPeople = parseInt(event.target.value);
        setNumberOfPeople(newNumberOfPeople);
        sessionStorage.setItem('numberOfPeople', newNumberOfPeople);
    };

    const totalExpense = expenses.reduce((total, expense) => total + expense.productPrice * expense.productQuantity, 0);
    const individualExpense = (totalExpense / numberOfPeople).toFixed(2);

    return (
        <>
            <div className="table-responsive">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td className="col-3">{editIndex === index ? (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={editProductName}
                                        onChange={(event) => setEditProductName(event.target.value)}
                                    />
                                ) : (
                                    expense.productName
                                )}</td>
                                <td className="col-3">{editIndex === index ? (
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
                                <td className="col-3">{editIndex === index ? (
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={editProductQuantity}
                                        onChange={(event) => setEditProductQuantity(event.target.value)}
                                        min="1"
                                    />
                                ) : (
                                    `${expense.productQuantity}`
                                )}</td>
                                <td className="col-3">
                                    <div className="d-flex justify-content-around">
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
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="col-6" colSpan="3">Total: ${totalExpense.toFixed(2)}</td>
                            <td className="col-6">Personal: ${individualExpense}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='people-number'>
                <label htmlFor="number-of-people" className="form-label">Número de personas:</label>
                <input
                    type="number"
                    id="number-of-people"
                    className="form-control"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                    min="1"
                />
            </div>
        </>
    );
};

export default ExpenseTable;
