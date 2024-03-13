import React, { useEffect, useState } from 'react';

const PeopleNumber = () => {
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    // Cargar el número de personas desde sessionStorage al montar el componente
    useEffect(() => {
        const storedNumberOfPeople = sessionStorage.getItem('numberOfPeople');
        if (storedNumberOfPeople) {
            setNumberOfPeople(parseInt(storedNumberOfPeople));
        }
    }, []);

    // Actualizar sessionStorage cuando el número de personas cambia
    useEffect(() => {
        sessionStorage.setItem('numberOfPeople', numberOfPeople.toString());
    }, [numberOfPeople]);

    const handleNumberOfPeopleChange = (event) => {
        setNumberOfPeople(parseInt(event.target.value));
    };

    return (
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
    );
};

export default PeopleNumber;