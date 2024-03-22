import React, { useState } from 'react';

const SaveButton = ({ expenses, onClick }) => {
  const [accountName, setAccountName] = useState('');

  const handleSaveClick = () => {
    const name = prompt('Por favor, ingrese el nombre de la cuenta:');
    if (name !== null) {
      setAccountName(name);
      const expensesToSave = JSON.parse(sessionStorage.getItem('expenses')) || {};
      expensesToSave[name] = expenses;
      sessionStorage.setItem('expenses', JSON.stringify(expensesToSave));
      if (onClick) {
        onClick(name);
      }
    }
  };

  return (
    <button onClick={handleSaveClick} className="btn btn-primary">
      Guardar
    </button>
  );
};

export default SaveButton;