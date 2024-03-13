import React from 'react';

const UserDropdown = ({ users, selectedUser, onSelect }) => {
    return (
        <div className="col-md-6">
            <h3>Users</h3>
            {users.length > 0 && (
                <div className="mt-3">
                    <label htmlFor="user-dropdown" className="form-label">Usuarios:</label>
                    <select id="user-dropdown" className="form-select" onChange={onSelect} value={selectedUser}>
                        <option value="">Seleccionar usuario</option>
                        {users.map((user, index) => (
                            <option key={index} value={user}>{user}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
