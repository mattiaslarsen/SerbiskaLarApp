import React, { useState } from 'react';
import './App.css';
import AckusativApp from './Ackusativ';
import LokativApp from './Lokativ';
import { words_Pera_Ima_Drugare, words_Song_Tamara } from './constants';

function App() {
  const [selectedWordSet, setSelectedWordSet] = useState(null);
  const [selectedGrammarArea, setSelectedGrammarArea] = useState(null);

  const resetToMainMenu = () => {
    setSelectedGrammarArea(null);
  };

  const renderGrammarArea = () => {
    switch(selectedGrammarArea) {
      case 'ackusativ':
        return <AckusativApp words={selectedWordSet} onBack={resetToMainMenu} />;
      case 'lokativ':
        return <LokativApp words={selectedWordSet} onBack={resetToMainMenu} />;
      default:
        return null;
    }
  };

  if (selectedGrammarArea) {
    return renderGrammarArea();
  }

  return (
    <div className="container">
      <h1>Lär dig serbiska</h1>

      <div>
        <h2>Välj område att berika ditt språk på:</h2>
        <select onChange={(e) => setSelectedWordSet(e.target.value === "pera" ? words_Pera_Ima_Drugare : words_Song_Tamara)}>
          <option value="">Välj en ordlista</option>
          <option value="pera">Pera Ima Drugare</option>
          <option value="tamara">Sång: Tamara</option>
        </select>
      </div>

      {selectedWordSet && (
        <div>
          <h2>Välj grammatikområde att öva på:</h2>
          <button 
            onClick={() => setSelectedGrammarArea('ackusativ')}
            className={selectedGrammarArea === 'ackusativ' ? 'active' : ''}
          >
            Ackusativ ("Se vad verben gör!")
          </button>
          <button 
            onClick={() => setSelectedGrammarArea('lokativ')}
            className={selectedGrammarArea === 'lokativ' ? 'active' : ''}
          >
            Lokativ ("Var saker händer!")
          </button>
        </div>
      )}
    </div>
  );
}

export default App;