import React from 'react';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import ResultsDisplay from './components/resultsDisplay/ResultsDisplay';



function App() {
  return (
    <div className="App ">
      <div className="container">
        <h1 className="title" class="text-2xl font-extrabold ">Photo Search Engine</h1>
        <SearchBar />
        
      </div>
    </div>
  );
}

export default App;
