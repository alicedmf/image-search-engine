import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import { ImageListItem } from '@material-ui/core';

function ResultsDisplay(pics){
    const imageListContent=(<ImageList cols={4}>
        {pics.map(img => (
            <ImageListItem> key={img.id}
            <img src={img.largeImageURL} alt="" />
            </ImageListItem>
    
            ))}
        </ImageList>) 

    if (imageListContent==null){
        <div>
            <h2>Aucun resultat</h2>
        </div>

    } else {
        <div>
            {imageListContent}
        </div>
    }

    
}

    
export default ResultsDisplay;