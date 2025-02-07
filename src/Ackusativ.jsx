import React, { useState } from 'react';

const AckusativApp = ({ words, onBack }) => {
  const [showAcc, setShowAcc] = useState(false);
  const [showSentences, setShowSentences] = useState(false);

  const toggleAcc = () => setShowAcc(!showAcc);
  const toggleSentences = () => setShowSentences(!showSentences);

  return (
    <div>
      <h1>Ackusativ - Se vad verben gör!</h1>

      <div>
        <h2>Ordövning</h2>
        <button onClick={toggleAcc}>
          {showAcc ? "Visa Nominativ" : "Visa Ackusativ"}
        </button>
        <div>
          {words.map((word, index) => (
            <div key={index}>
              <p>{showAcc ? word.acc : word.nom}</p>
              <p>({word.info})</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Meningsövning</h2>
        <button onClick={toggleSentences}>
          {showSentences ? "Dölj meningar" : "Visa meningar"}
        </button>
        {showSentences && (
          <div>
            <p>Pera ima druga. (Pera har en vän.)</p>
            <p>Čitam knjigu. (Jag läser en bok.)</p>
            <p>Vidim školu. (Jag ser skolan.)</p>
            <p>Volim psa. (Jag älskar hunden.)</p>
          </div>
        )}
      </div>

      <button onClick={onBack}>Tillbaka till huvudmenyn</button>
    </div>
  );
};

export default AckusativApp;