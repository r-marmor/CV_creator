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
        <h2>Education</h2>
        {entries.map((item, index) => (
            <form key={item.id}>
                {index === 0 ? null : <hr />}
                <label>
                    Course / Program:
                    <input 
                        type="text" 
                        name="course"
                        value={item.course}
                        onChange={(event) => handleInputChange(item.id, event)}
                    />
                </label>
                <label>
                    University:
                    <input 
                        type="text" 
                        name="university"
                        value={item.university}
                        onChange={(event) => handleInputChange(item.id, event)}
                    />
                </label>
                <label>
                    Graduation date:
                    <input 
                        type="date" 
                        name="graduationDate"
                        value={item.graduationDate}
                        onChange={(event) => handleInputChange(item.id, event)}
                    />
                </label>
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
