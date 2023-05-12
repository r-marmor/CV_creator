import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'; 
import FormInput from './components/FormInput';
import CvPreview from './components/CvPreview';


function App() {
  const [personalDetails, setPersonalDetails] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState([{ id: uuidv4(), course: '', university: '', graduationDate: '' }]);
  const [experience, setExperience] = useState([{ id: uuidv4(), company: '', position: '', from: '', to: '' }]);

  const handlePersonalDetailsChange = (event) => {
      const { name, value } = event.target;
      setPersonalDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEducationChange = (newEntries) => {
    setEducation(newEntries);
  };

  const handleAddEducation = (newEducation) => {
    setEducation(prevState => [...prevState, newEducation]);
  };

  const handleRemoveEducation = (id) => {
    setEducation(prevState => prevState.filter(entry => entry.id !== id));
  };

  const handleExperienceChange = (newEntries) => {
    setExperience(newEntries);
};

  const handleExperienceAdd = (newEntry) => {
      setExperience(prevState => [...prevState, newEntry]);
  };

  const handleExperienceRemove = (id) => {
      setExperience(prevState => prevState.filter(item => item.id !== id));
  };

  return (
    <div>
        <h1>Resume Builder</h1>
        <FormInput
          personalDetails={personalDetails}
          onPersonalDetailsChange={handlePersonalDetailsChange}
          education={education}
          onEducationChange={handleEducationChange}
          onAddEducation={handleAddEducation}
          onRemoveEducation={handleRemoveEducation}
          experience={experience}
          onExperienceChange={handleExperienceChange}
          onAddExperience={handleExperienceAdd}
          onRemoveExperience={handleExperienceRemove}
        />
        <CvPreview
          personalDetails={personalDetails}
          education={education}
          experience={experience}
        />
    </div>
  );
}

export default App;
