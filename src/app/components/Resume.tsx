import React from 'react';

const Resume = () => {
  return (
    <>
    <h2 className='custom-text text-xl font-bold'>Lastest Resume:</h2>
    <div className="pdf-container">
      <iframe
        src="/Aman_Chhetri_Resume.pdf" // Update with the path to your PDF
        style={{ width: '100%', height: '100vh' }}
      />
    </div>
    </>
  );
};

export default Resume;
