import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

function Experience( { entries, onInputChange, onAddEntry, onRemoveEntry } ) {

    const handleAddClick = (event) => {
        event.preventDefault();
        onAddEntry({ id: uuidv4(), company: '', position: '', from: '', to: '' });
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
      <h2>Experience</h2>
      {entries.map((item, index) => (
        <form key={item.id}>
            {index === 0 ? null : <hr />}
            <label>
                Company:
                <input
                    type="text" 
                    name="company" 
                    value={item.company} 
                    onChange={(event) => handleInputChange(item.id, event)}
                />
            </label>
            <label>
                Position:
                <input
                    type="text" 
                    name="position" 
                    value={item.position} 
                    onChange={(event) => handleInputChange(item.id, event)}
                />
            </label>
            <label>
                From:
                <input
                    type="date" 
                    name="from"
                    value={item.from}
                    onChange={(event) => handleInputChange(item.id, event)}
                />
            </label>
            <label>
                To:
                <input
                    type="date" 
                    name="to" 
                    value={item.to} 
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

export default Experience;
