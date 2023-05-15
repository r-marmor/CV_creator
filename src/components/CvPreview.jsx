import React from 'react';

function CvPreview( { personalDetails, education, experience } ) {
  return (
    <div className='CvPreview'>
      <div className='cvPreviewHeader'>
        <div className='cvPreviewHeaderLeftSide'>
          <p className='fullName fs-lg'>{personalDetails.name}</p>
          <p className='fs-md'>{personalDetails.title}</p>
        </div>
        <div className='cvPreviewHeaderRightSide fs-sm'>
          <p>{personalDetails.email}</p>
          <p>{personalDetails.phone}</p>
          <p>{personalDetails.localisation}</p>
        </div>
      </div>

        <h2 className='fs-md'>Education</h2>
        {education.map((item) => (
            <div key={item.id} className='cvPreviewForm'>
                <p>{item.course}</p>
                <p>{item.university}</p>
                <p>{item.graduationDate}</p>
            </div>
        ))}

        <h2 className='fs-md'>Experience</h2>
        {experience.map((item) => (
            <div key={item.id} className='cvPreviewForm'>
                <p>{item.company}</p>
                <p>{item.position}</p>
                <p>From {item.from} to {item.to}</p>
            </div>
        ))}   
    </div>
  );
}

export default CvPreview;
