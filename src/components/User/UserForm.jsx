import React, { useState } from 'react';

const UserForm = ({ onSubmit }) => {
    const [userName, setUserName] = useState('');

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleSubmitUser = (event) => {
        event.preventDefault();
        if (userName.trim() !== '') {
            onSubmit(userName);
            setUserName('');
        } else {
            alert('Por favor, ingrese un nombre de usuario válido.');
        }
    };

    return (
        <div className="col-md-6">
            <h3>Add User</h3>
            <form onSubmit={handleSubmitUser}>
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Nombre de Usuario:</label>
                    <input type="text" className="form-control" id="user-name" value={userName} onChange={handleUserNameChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Agregar Usuario</button>
            </form>
        </div>
    );
};

export default UserForm;
