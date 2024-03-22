import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
        if (storedAccounts) {
            setAccounts(Object.keys(storedAccounts));
        }
    }, []);

    const handleClearLocalStorage = () => {
        localStorage.clear();
        setAccounts([]); // Limpiar también la lista de cuentas mostradas en el NavBar
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Expense Tracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/expenses">Expense Tracker</Link>
                        </li>
                        {/* Mostrar cuentas almacenadas */}
                        {/* {accounts.map(account => (
                            <li key={account} className="nav-item">
                                <Link className="nav-link" to={`/accounts/${account}`}>{account}</Link>
                            </li>
                        ))} */}
                        {/* Agregar enlace o botón para limpiar el almacenamiento local */}
                        <li className="nav-item">
                            <button className="btn btn-link nav-link" onClick={handleClearLocalStorage}>Limpiar Almacenamiento Local</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
