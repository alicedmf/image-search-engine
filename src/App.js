import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import ResultsDisplay from './components/resultsDisplay/ResultsDisplay';



function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">React Photo Search</h1>
        <SearchBar />
        
      </div>
    </div>
  );
}

export default App;
