import React from 'react';
import axios from 'axios';
import ImageList from '@material-ui/core/ImageList';
import ResultsDisplay from '../resultsDisplay/ResultsDisplay';
import { useState } from 'react';

function SearchBar() {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);
    const searchImages = async (e) => {
        e.preventDefault();
        var API_KEY = '32265864-051f1f4a77558a7656ff80c35';
        var url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}`;
        if(query != "") {
            axios.get(url).then(response => { const results = response.data.hits; setPics(results); });
        } else {
            setPics([]);
        }
    };
    return (
        <div>
            <form className="form" onSubmit={searchImages}>
                <div style={{ padding: '50px' }}>
                    <input type="text" name="searchText"
                        className="input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />
                    <button type="submit" > Search </button>
                </div>
            </form>
            {ResultsDisplay(pics)}
        </div>
    )
}


export default SearchBar;