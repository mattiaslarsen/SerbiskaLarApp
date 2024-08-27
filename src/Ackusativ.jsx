import React, { useState } from 'react';

const words = [
  { nom: "drug", acc: "druga", info: "vän" },
  { nom: "knjiga", acc: "knjigu", info: "bok" },
  { nom: "škola", acc: "školu", info: "skola" },
  { nom: "park", acc: "park", info: "park" },
  { nom: "pas", acc: "psa", info: "hund" },
  { nom: "mačka", acc: "mačku", info: "katt" },
];

const AckusativApp = () => {
  const [showAccusative, setShowAccusative] = useState(false);

  const toggleAccusative = () => setShowAccusative(!showAccusative);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Ackusativens Äventyr</h2>
      <button 
        onClick={toggleAccusative} 
        style={{
          marginBottom: '20px',
          padding: '10px 15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {showAccusative ? "Visa Nominativ" : "Visa Ackusativ"}
      </button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
        {words.map((word, index) => (
          <div key={index} style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
            <p style={{ fontWeight: 'bold' }}>{showAccusative ? word.acc : word.nom}</p>
            <p style={{ fontSize: '14px', color: '#666' }}>({word.info})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AckusativApp;