import React from 'react';
import PersonalDetails from './PersonalDetails';
import Education from './Education';
import Experience from './Experience';

function FormInput({
    personalDetails, 
    onPersonalDetailsChange, 
    education, 
    onEducationChange,
    onAddEducation, 
    onRemoveEducation,
    experience, 
    onExperienceChange,
    onAddExperience,
    onRemoveExperience
}) {
    return (
        <div className='formInput'>
            <PersonalDetails
                details={personalDetails} 
                onInputChange={onPersonalDetailsChange}
            />
            <Education
                entries={education}
                onInputChange={onEducationChange}
                onAddEntry={onAddEducation}
                onRemoveEntry={onRemoveEducation}
            />
            <Experience
                entries={experience}
                onInputChange={onExperienceChange} 
                onAddEntry={onAddExperience}
                onRemoveEntry={onRemoveExperience}
            />
        </div>
    );
}

export default FormInput;
