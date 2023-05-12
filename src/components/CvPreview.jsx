import React from 'react';

function CvPreview( { personalDetails, education, experience } ) {
  return (
    <div className='CvPreview'>
      <h1>CV Preview</h1>
        <h2>Personal Details</h2>
        <p>Name: {personalDetails.name}</p>
        <p>Email: {personalDetails.email}</p>
        <p>Phone: {personalDetails.phone}</p>

        <h2>Education</h2>
        {education.map((item, index) => (
            <div key={item.id}>
                <h3>Course {index + 1}</h3>
                <p>Course: {item.course}</p>
                <p>University: {item.university}</p>
                <p>Graduation Date: {item.graduationDate}</p>
            </div>
        ))};

        <h2>Experience</h2>
        {experience.map((item, index) => (
            <div key={item.id}>
                <h3>Job {index + 1}</h3>
                <p>Company: {item.company}</p>
                <p>Position: {item.position}</p>
                <p>From: {item.from}</p>
                <p>To: {item.to}</p>
            </div>
        ))};   
    </div>
  );
}

export default CvPreview;
