import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

function Education( { entries, onInputChange, onAddEntry, onRemoveEntry } ) {

    const handleAddClick = (event) => {
        event.preventDefault();
        const newEntry = { id: uuidv4(), course: '', university: '', graduationDate: '' };
        onAddEntry(newEntry);
    };

    const handleRemoveClick = (id) => {
        onRemoveEntry(id);
    };
    
    const handleInputChange = (id, event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const updateEntries = entries.map(item => 
            item.id === id ? { ...item, [fieldName]: fieldValue }  : item
        );
        onInputChange(updateEntries);
    };

  return (
    <div>
        <h2 className='fs-md'>Education</h2>
        {entries.map((item, index) => (
            <form key={item.id} className='inputs'>
                {index === 0 ? null : <hr />}
                    <input 
                        type="text" 
                        name="course"
                        placeholder='Course'
                        value={item.course}
                        onChange={(event) => handleInputChange(item.id, event)}
                    />
                    <input 
                        type="text" 
                        name="university"
                        placeholder='University'
                        value={item.university}
                        onChange={(event) => handleInputChange(item.id, event)}
                    />
                    <input 
                        type="text" 
                        name="graduationDate"
                        placeholder='Graduation date (DD/MM/YYYY)'
                        value={item.graduationDate}
                        onChange={(event) => handleInputChange(item.id, event)}
                    />
                {entries.length > 0 && (
                    <Button onClick={() => handleRemoveClick(item.id)} title="Remove" />
                )}
            </form>
        ))}
        <Button onClick={handleAddClick} title="Add" />
    </div>
  );
}

export default Education;
