import React, { useState } from 'react';

const LokativApp = ({ words, onBack }) => {
  const [showLok, setShowLok] = useState(false);
  const [showSentences, setShowSentences] = useState(false);

  const toggleLok = () => setShowLok(!showLok);
  const toggleSentences = () => setShowSentences(!showSentences);

  return (
    <div>
      <h1>Lokativ - Var saker händer!</h1>

      <div>
        <h2>Ordövning</h2>
        <button onClick={toggleLok}>
          {showLok ? "Visa Nominativ" : "Visa Lokativ"}
        </button>
        <div>
          {words.map((word, index) => (
            <div key={index}>
              <p>{showLok ? word.lok : word.nom}</p>
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
            <p>Knjiga je u školi. (Boken är i skolan.)</p>
            <p>Razgovaramo o filmu. (Vi pratar om filmen.)</p>
            <p>Živim u Beogradu. (Jag bor i Belgrad.)</p>
            <p>Pas je u parku. (Hunden är i parken.)</p>
          </div>
        )}
      </div>

      <button onClick={onBack}>Tillbaka till huvudmenyn</button>
    </div>
  );
};

export default LokativApp;