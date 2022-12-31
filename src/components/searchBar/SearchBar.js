import React from 'react';
import axios from 'axios';
import ImageList from '@material-ui/core/ImageList';
import ResultsDisplay from '../resultsDisplay/ResultsDisplay';
import { useState } from 'react';

function SearchBar () {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const searchImages = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
        var API_KEY = '32265864-051f1f4a77558a7656ff80c35';
        var url= `https://pixabay.com/api/?key=${API_KEY}&q=${query}`;
        console.log(url);
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}`).then(response => {const results= response.data.hits; setPics(results);});
        console.log(pics);
         
                    
    
        
    };
    
    ResultsDisplay (pics);

    console.log(query);
    return (
        <form className="form" onSubmit={searchImages}>
            <div style={{padding: '50px'}}>
                <input type="text" name="searchText" 
                    className="input" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}/>
                
                <button type="submit" > Search </button>
                
            </div>
        </form>
        
        
            
    )


    
}


export default SearchBar;
