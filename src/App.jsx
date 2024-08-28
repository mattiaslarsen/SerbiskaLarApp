import React, { useState } from 'react';
import './styleGuide.css';
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
    <div className="container" style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: 'var(--light-bg)',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{color: 'var(--deep-accent)', textAlign: 'center', marginBottom: '30px'}}>
        Lär dig serbiska
      </h1>

      <div style={{marginBottom: '20px'}}>
        <h2 style={{color: 'var(--accent)'}}>Välj område att berika ditt språk på:</h2>
        <select 
          onChange={(e) => setSelectedWordSet(e.target.value === "pera" ? words_Pera_Ima_Drugare : words_Song_Tamara)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            borderRadius: '5px',
            border: '1px solid var(--light-gray)',
            fontSize: '16px',
            backgroundColor: 'var(--softer-light)'
          }}
        >
          <option value="">Välj en ordlista</option>
          <option value="pera">Pera Ima Drugare</option>
          <option value="tamara">Sång: Tamara</option>
        </select>
      </div>

      {selectedWordSet && (
        <div>
          <h2 style={{color: 'var(--accent)'}}>Välj grammatikområde att öva på:</h2>
          <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <button 
              onClick={() => setSelectedGrammarArea('ackusativ')}
              className="button button-primary"
              style={{marginBottom: '10px', flex: '1 0 45%'}}
            >
              Ackusativ ("Se vad verben gör!")
            </button>
            <button 
              onClick={() => setSelectedGrammarArea('lokativ')}
              className="button button-primary"
              style={{marginBottom: '10px', flex: '1 0 45%'}}
            >
              Lokativ ("Var saker händer!")
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;