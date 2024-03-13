import React from 'react';

const PeopleNumber = ({ numberOfPeople, setNumberOfPeople }) => {
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