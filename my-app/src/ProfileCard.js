import React from 'react';

const ProfileCard = ({ name, age, job }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '300px',
      backgroundColor: '#f9f9f9'
    }}>
      <h1>{name}</h1>
      <h2>Age: {age}</h2>
      <h2>Job: {job}</h2>
    </div>
  );
};

export default ProfileCard;
