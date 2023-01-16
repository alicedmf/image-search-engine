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
        <div class="class= mx-auto text-center mt-4">
            <form className="form" onSubmit={searchImages}>
                <div class="">
                    <input class="form-input h-12 bg-white border-black border placeholder-gray-500 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-black sm:text-sm sm:leading-5 "
                        type="text" name="searchText"
                        className="input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} />
                    <button class="bg-blue-500 hover:bg-blue-700 text-white rounded p-3 h-12 " type="submit" > Search </button>
                </div>
            </form>
            {ResultsDisplay(pics)}
        </div>
    )
}


export default SearchBar;